'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('files', [
      {
        name: '1.png',
        path: '9267b80c28456290ad062109f4f2f766.png',
        created_at: '2019-10-27 00:00:00',
        updated_at: '2019-10-27 00:00:00',
      },
      {
        name: '2.png',
        path: '06cb8ba70dacd9900d7df54debb6f53f.png',
        created_at: '2019-10-27 00:00:00',
        updated_at: '2019-10-27 00:00:00',
      },
      {
        name: '3.png',
        path: 'ae8d1dd2d2666f9640d1334f128ebabd.png',
        created_at: '2019-10-27 00:00:00',
        updated_at: '2019-10-27 00:00:00',
      },
      {
        name: '4.png',
        path: '6f5fa471e95247b4b97eea55d17060f2.png',
        created_at: '2019-10-27 00:00:00',
        updated_at: '2019-10-27 00:00:00',
      },
      {
        name: '5.png',
        path: '9207c47832d52eb110e3f307945def86.png',
        created_at: '2019-10-27 00:00:00',
        updated_at: '2019-10-27 00:00:00',
      },
      {
        name: '6.png',
        path: '566f8c514a3cadf08467aa1bb3f4434b.png',
        created_at: '2019-10-27 00:00:00',
        updated_at: '2019-10-27 00:00:00',
      },
      {
        name: '7.png',
        path: '07ea5bd283afd4b99b7907289160bc2a.png',
        created_at: '2019-10-27 00:00:00',
        updated_at: '2019-10-27 00:00:00',
      },
      {
        name: '8.png',
        path: '9674696280993523700e0c271384e33c.png',
        created_at: '2019-10-27 00:00:00',
        updated_at: '2019-10-27 00:00:00',
      },
      {
        name: '9.png',
        path: 'bb933b468feabc82165140d506e15fe4.png',
        created_at: '2019-10-27 00:00:00',
        updated_at: '2019-10-27 00:00:00',
      },
      {
        name: '10.png',
        path: 'f1e5a4d739a014378d458b3bfa472095.png',
        created_at: '2019-10-27 00:00:00',
        updated_at: '2019-10-27 00:00:00',
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('files');
  }
};
