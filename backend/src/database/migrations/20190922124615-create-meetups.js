'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('meetups', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        datetime: {
            type: Sequelize.DATE,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id',
                allowNull: true,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        },
        banner_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'files',
                key: 'id',
                allowNull: true,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
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
    return queryInterface.dropTable('meetups')
  }
};
