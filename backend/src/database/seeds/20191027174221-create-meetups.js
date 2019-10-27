'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('meetups', [
      {
        title: 'Meetup 01',
        description: 'Descrição da meetup 1...',
        location: 'Local 01',
        datetime: '2019-12-15 13:00:00',
        user_id: 2,
        banner_id: 1,
        created_at: '2019-10-27 00:00:00',
        updated_at: '2019-10-27 00:00:00'
      },
      {
        title: 'Meetup 02',
        description: 'Descrição da meetup 2...',
        location: 'Local 02',
        datetime: '2019-12-18 16:00:00',
        user_id: 2,
        banner_id: 2,
        created_at: '2019-10-25 00:00:00',
        updated_at: '2019-10-25 00:00:00'
      },
      {
        title: 'Meetup 03',
        description: 'Descrição da meetup 3...',
        location: 'Local 03',
        datetime: '2019-12-10 16:00:00',
        user_id: 2,
        banner_id: 3,
        created_at: '2019-10-25 00:00:00',
        updated_at: '2019-10-25 00:00:00'
      },
      {
        title: 'Meetup 04',
        description: 'Descrição da meetup 4...',
        location: 'Local 04',
        datetime: '2019-10-03 16:00:00',
        user_id: 2,
        banner_id: 4,
        created_at: '2019-10-25 00:00:00',
        updated_at: '2019-10-25 00:00:00'
      },
      {
        title: 'Meetup 05',
        description: 'Descrição da meetup 5...',
        location: 'Local 05',
        datetime: '2019-10-10 16:00:00',
        user_id: 2,
        banner_id: 5,
        created_at: '2019-10-25 00:00:00',
        updated_at: '2019-10-25 00:00:00'
      },
      {
        title: 'Meetup 06',
        description: 'Descrição da meetup 6...',
        location: 'Local 06',
        datetime: '2019-11-18 16:00:00',
        user_id: 2,
        banner_id: 6,
        created_at: '2019-10-25 00:00:00',
        updated_at: '2019-10-25 00:00:00'
      },
      {
        title: 'Meetup 07',
        description: 'Descrição da meetup 7...',
        location: 'Local 07',
        datetime: '2019-11-20 16:00:00',
        user_id: 2,
        banner_id: 7,
        created_at: '2019-10-25 00:00:00',
        updated_at: '2019-10-25 00:00:00'
      },
      {
        title: 'Meetup 08',
        description: 'Descrição da meetup 8...',
        location: 'Local 08',
        datetime: '2019-11-23 16:00:00',
        user_id: 2,
        banner_id: 8,
        created_at: '2019-10-25 00:00:00',
        updated_at: '2019-10-25 00:00:00'
      },
      {
        title: 'Meetup 09',
        description: 'Descrição da meetup 9...',
        location: 'Local 09',
        datetime: '2019-12-09 16:00:00',
        user_id: 2,
        banner_id: 9,
        created_at: '2019-10-25 00:00:00',
        updated_at: '2019-10-25 00:00:00'
      },
      {
        title: 'Meetup 10',
        description: 'Descrição da meetup 10...',
        location: 'Local 10',
        datetime: '2019-12-01 16:00:00',
        user_id: 2,
        banner_id: 10,
        created_at: '2019-10-25 00:00:00',
        updated_at: '2019-10-25 00:00:00'
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('meetups');
  }
};
