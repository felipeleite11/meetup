import Subscription from '../models/Subscription'
import { isBefore, areIntervalsOverlapping, addHours, format } from 'date-fns'
import Mail from '../../lib/mail'

import Meetup from '../models/Meetup'
import User from '../models/User'
import File from '../models/File'

class SubscriptionController {
    async index(req, res) {
        const subscriptions = await Subscription.findAll({
            where: {
                user_id: req.userId
            },
            attributes: ['id'],
            include: [
                {
                    model: Meetup,
                    as: 'meetup',
                    attributes: ['id', 'title', 'description', 'location', 'datetime', 'past'],
                    include: [
                        {
                            model: File,
                            as: 'banner',
                            attributes: ['path', 'url']
                        }
                    ]
                }
            ],
            order: [
                [
                    {
                        model: Meetup,
                        as: 'meetup'
                    },
                    'datetime',
                    'ASC'
                ]
            ]
        })

        return res.json(subscriptions.filter(subscription => !subscription.past))
    }

    async store(req, res) {
        const { id } = await req.params

        const meetup = await Meetup.findByPk(id, {
            attributes: ['id', 'title', 'description', 'location', 'datetime'],
            include: [
                {
                    model: Subscription,
                    as: 'subscribers',
                    attributes: ['id'],
                    include: [
                        {
                            model: User,
                            as: 'user',
                            attributes: ['id', 'name', 'email']
                        }
                    ]
                },
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name', 'email']
                }
            ]
        })

        const subscribedMeetups = await Subscription.findAll({
            where: {
                user_id: req.userId
            },
            attributes: ['id'],
            include: [
                {
                    model: Meetup,
                    as: 'meetup',
                    attributes: ['id', 'datetime', 'title']
                }
            ]
        })

        const { name } = await User.findByPk(req.userId)

        //Verificação da meetup
        if(!meetup) {
            return res.status(400).json({ msg: 'Meetup não encontrada.' })
        }

        //Verificação do owner da meetup
        if(meetup.user.id === req.userId) {
            return res.status(400).json({ msg: 'Você não pode se inscrever em meetups criadas por você.' })
        }

        //Verificação de data
        if(isBefore(meetup.datetime, new Date())) {
            return res.status(400).json({ msg: 'Você não pode se inscrever em meetups encerradas.' })
        }

        //Verificação de inscrição já feita
        if(meetup.subscribers.find(subscriber => subscriber.user.id === req.userId)) {
            return res.status(400).json({ msg: 'Você já está inscrito nesta meetup.' })
        }

        //Verificação de sobreposição de horário
        let overlappingMeetup

        subscribedMeetups.forEach(subscribed => {
            const { datetime, title } = subscribed.meetup

            const intervalMeetup = {
                start: meetup.datetime,
                end: addHours(meetup.datetime, 1)
            }

            const intervalSubscribed = {
                start: datetime,
                end: addHours(datetime, 1)
            }

            if(areIntervalsOverlapping(intervalMeetup, intervalSubscribed)) {
                overlappingMeetup = {
                    title,
                    date: format(datetime, 'dd/LL/yyyy'),
                    start: format(intervalMeetup.start, "HH:mm'h'"),
                    end: format(intervalMeetup.end, "HH:mm'h'")
                }
                return false
            }
        })

        if(overlappingMeetup) {
            return res.status(400).json({ msg: `Não é possível se inscrever. A meetup ${overlappingMeetup.title} acontecerá nesta mesma data (${overlappingMeetup.date}), das ${overlappingMeetup.start} às ${overlappingMeetup.end}.` })
        }

        //Inscrição
        const subscription = await Subscription.findCreateFind({
            user_id: req.userId,
            meetup_id: meetup.id,
            where: {
                user_id: req.userId,
                meetup_id: meetup.id
            }
        })

        //E-mail de confirmação
        Mail.sendMail({
            to: `${meetup.user.name} <${meetup.user.email}>`,
            subject: `Nova inscrição na meetup ${meetup.title}`,
            text: `${name} acabou de se inscrever na meetup ${meetup.title}.`
        })

        const { user_id, meetup_id } = subscription[0]

        return res.json({ user_id, meetup_id })
    }
}

export default new SubscriptionController()
