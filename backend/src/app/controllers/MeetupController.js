import { parseISO, isBefore, startOfDay, endOfDay } from 'date-fns'
import { Op } from 'sequelize'
import * as Yup from 'yup'

import Meetup from '../models/Meetup'
import File from '../models/File'
import User from '../models/User'

class MeetupController {
    async index(req, res) {
        const { page = 1, date = new Date() } = req.query
        const itemsPerPage = 10

        const meetups = await Meetup.findAll({
            where: {
                user_id: req.userId,
                datetime: {
                    [Op.between]: [startOfDay(parseISO(date)), endOfDay(parseISO(date))]
                }
            },
            order: ['datetime'],
            limit: itemsPerPage,
            offset: (page - 1) * itemsPerPage,
            attributes: ['id', 'title', 'description', 'datetime', 'location', 'past'],
            include: [
                {
                    model: File,
                    as: 'banner',
                    attributes: ['path', 'url']
                },
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name', 'email']
                }
            ]
        })

        return res.json(meetups)
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            location: Yup.string().required(),
            datetime: Yup.date().required(),
            banner_id: Yup.number().required()
        })

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ msg: 'A validação dos dados falhou.' })
        }

        const { title, description, location, datetime, banner_id, user_id } = req.body

        if(isBefore(parseISO(datetime), new Date())) {
            return res.status(400).json({ msg: 'Esta data já passou.' })
        }

        const { id } = await Meetup.create({
            title,
            description,
            location,
            datetime,
            banner_id,
            user_id: req.userId,
        })

        return res.json({ id, title, description, location, datetime, user_id })
    }

    async update(req, res) {
        const schemaMeetup = Yup.object().shape({
            title: Yup.string(),
            description: Yup.string(),
            location: Yup.string(),
            datetime: Yup.date(),
            banner_id: Yup.number()
        })

        const { id } = req.headers

        //Validação do ID
        if(!id) {
            return res.status(400).json({ msg: 'ID inválido.' })
        }

        const meetup = await Meetup.findByPk(id)

        //Verificação da meetup
        if(!meetup) {
            return res.status(400).json({ msg: 'Meetup não encontrada.' })
        }

        //Validação do dados alterados
        if(!(await schemaMeetup.isValid(req.body))) {
            return res.status(400).json({ msg: 'A validação dos dados falhou.' })
        }

        //Validação da nova data
        if(isBefore(meetup.datetime, new Date())) {
            return res.status(400).json({ msg: 'Esta meetup já foi encerrada.' })
        }

        if(req.body.datetime && isBefore(parseISO(req.body.datetime), new Date())) {
            return res.status(400).json({ msg: 'A data informada já passou.' })
        }

        //Validação do owner da meetup
        if(meetup.user_id !== req.userId) {
            return res.status(400).json({ msg: 'Você não pode alterar os dados desta meetup.' })
        }

        await Meetup.update(
            req.body,
            {
                where: { id }
            }
        )

        const { title, description, location, datetime, user_id } = await Meetup.findByPk(id)

        return res.json({ id, title, description, location, datetime, user_id })
    }

    async delete(req, res) {
        const { id } = req.headers

        //Validação do ID
        if(!id) {
            return res.status(400).json({ msg: 'ID inválido.' })
        }

        const meetup = await Meetup.findByPk(id)

        //Verificação da meetup
        if(!meetup) {
            return res.status(400).json({ msg: 'Meetup não encontrada.' })
        }

        //Validação do owner da meetup
        if(meetup.user_id !== req.userId) {
            return res.status(400).json({ msg: 'Você não pode cancelar esta meetup.' })
        }

        //Verificação da data
        if(meetup.past) {
            return res.status(400).json({ msg: 'Esta meetup já está encerrada.' })
        }

        await Meetup.destroy({
            where: { id }
        })

        return res.json({ msg: 'Meetup cancelada com sucesso!' })
    }
}

export default new MeetupController()
