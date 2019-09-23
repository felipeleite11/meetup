'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'phone', {
        type: Sequelize.STRING,
        allowNull: true
    })
  },

  down: (queryInterface) => {
    return queryInterface.removeColumns('users', 'phone')
  }
};
