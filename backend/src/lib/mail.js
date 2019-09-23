import { resolve } from 'path'
import nodemailer from 'nodemailer'
import mailConfig from '../config/mail'
import { pugEngine } from 'nodemailer-pug-engine'

class Mail {
    constructor() {
        const { host, port, secure, auth } = mailConfig

        this.transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: auth.user ? auth : null
        })

        this.configureTemplates()
    }

    sendMail(message) {
        return this.transporter.sendMail({
            ...mailConfig.default,
            ...message
        })
    }

    configureTemplates() {
        this.transporter.use('compile', pugEngine({
            templateDir: resolve(__dirname, '..', 'app', 'views', 'emails'),
            pretty: true
        }))
    }
}

export default new Mail()
