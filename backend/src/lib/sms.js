const zenvia = require('@zenvia/zenvia-sms-core').api
import zenviaConfig from '../config/sms'

class Sms {
    async sendSMS(target, message, id) {
        zenvia.setCredentials(zenviaConfig.user, zenviaConfig.pass)

        const response = await zenvia.sendSMS({
            sendSmsRequest: {
                from: zenviaConfig.from,
                to: target,
                //schedule: null,
                msg: message,
                callbackOption: "NONE",
                id: id.toString(),
                aggregateId: '002'
            }
        })

        return response
    }
}

export default new Sms()
