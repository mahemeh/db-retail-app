'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Fitur Login',
        description: 'Membuat fitur authentication dan authorization',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      },
      {
        title: 'Fitur Register',
        description: 'Membuat fitur register disertai validasi saat user daftar',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
