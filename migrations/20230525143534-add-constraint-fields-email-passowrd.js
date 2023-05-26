'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Users', {
      fields: ['email', 'password'],
      type: 'unique',
      name: 'unique_constraint_data'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'email');
    await queryInterface.removeColumn('Users', 'password');
  }
};
