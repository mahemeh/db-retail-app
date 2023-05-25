'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Mahesa Nur Alamsyah',
        email: 'mahesa@gmail.com',
        password: 'mhs123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Muhammad Fauzan',
        email: 'mfauzan@gmail.com',
        password: 'fzn123',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
