'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      belongsTo: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'username'
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Entries');
  }
};
