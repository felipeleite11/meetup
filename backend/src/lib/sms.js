import axios from 'axios'
import zenviaConfig from '../config/sms'
import { format } from 'date-fns'
import btoa from 'btoa'

class Sms {
    async sendSMS(target, message) {
        const token = btoa(`${zenviaConfig.user}:${zenviaConfig.pass}`)

        const response = await axios.post('https://api-rest.zenvia.com/services/send-sms', {
            "sendSmsRequest": {
                from: zenviaConfig.messageData.from,
                to: `55${target}`,
                schedule: format(new Date(), `yyyy-MM-dd'T'HH:mm:ss`),
                msg: message,
                callbackOption: 'ALL',
                flashSms: false
            }
        }, {
            headers: {
                Authorization: `Basic ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })

        return response.data
    }
}

export default new Sms()
