'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'elon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'marcos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'maria777',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jose',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
