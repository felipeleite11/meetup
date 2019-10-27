'use strict';

module.exports = {
  up: (queryInterface) => {
      return queryInterface.bulkInsert('users', [
        {
          name: 'Felipe Leite',
          email: 'felipe@rocketseat.com',
          password_hash: '$2a$08$iJTRbBMjF1/uP9m1.HGoxOe/Tn59MrUeTNW7ZZ1Pj5GDisMPZGgQ6',
          created_at: '2019-10-27 00:00:00',
          updated_at: '2019-10-27 00:00:00',
          phone: '91981293338'
        },

        {
          name: 'Rocketset',
          email: 'rocketseat@rocketseat.com',
          password_hash: '$2a$08$iJTRbBMjF1/uP9m1.HGoxOe/Tn59MrUeTNW7ZZ1Pj5GDisMPZGgQ6',
          created_at: '2019-10-27 00:00:00',
          updated_at: '2019-10-27 00:00:00',
          phone: '91981293338'
        }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};
