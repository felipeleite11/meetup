import { Op } from 'sequelize'

import Meetup from '../models/Meetup'
import File from '../models/File'
import User from '../models/User'

class OwnerMeetupController {
    async index(req, res) {
        const { page = 1 } = req.query

        const itemsPerPage = 10

        const meetups = await Meetup.findAll({
            where: {
                user_id: req.userId,
                datetime: {
                    [Op.gte]: new Date()
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
                    attributes: ['id', 'path', 'url']
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
}

export default new OwnerMeetupController()
