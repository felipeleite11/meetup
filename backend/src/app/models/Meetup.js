import Sequelize, { Model } from 'sequelize'
import { isBefore } from 'date-fns'

class Meetup extends Model {
    static init(sequelize) {
        super.init({
            title: Sequelize.STRING,
            description: Sequelize.STRING,
            location: Sequelize.STRING,
            datetime: Sequelize.DATE,
            past: {
                type: Sequelize.VIRTUAL,
                get() {
                    return isBefore(this.datetime, new Date())
                }
            }
        }, { sequelize })

        return this
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.belongsTo(models.File, { foreignKey: 'banner_id', as: 'banner' })
        this.hasMany(models.Subscription, { foreignKey: 'meetup_id', as: 'subscribers' })
    }
}

export default Meetup
