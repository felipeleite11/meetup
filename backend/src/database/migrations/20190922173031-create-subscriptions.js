'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('subscriptions', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id',
                allowNull: true,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        },
        meetup_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'meetups',
                key: 'id',
                allowNull: true,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false
        }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('subscriptions')
  }
};
