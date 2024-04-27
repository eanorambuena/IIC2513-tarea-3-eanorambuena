'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Entries', [
      {
        title: 'Vendí X.com!',
        body: 'Vendí X.com! Este es el primer post',
        date: '2002-08-18',
        belongs_to: 'elon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Creé Tesla',
        body: 'Creé Tesla, esta será la próxima gran cosa que hice',
        date: '2003-01-01',
        belongs_to: 'elon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mi primer post',
        body: 'Mi primer post',
        date: '2010-09-04',
        belongs_to: 'marcos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mi segundo post',
        body: 'Mi segundo post, no sé qué escribir',
        date: '2010-11-06',
        belongs_to: 'marcos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Estoy muy emocionada por ser influencer',
        body: 'Voy a conseguir muchos seguidores',
        date: '2024-04-24',
        belongs_to: 'maria777',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Llevo solo 10 seguidores',
        body: 'Llevo solo 10 seguidores, no sirvo para esto',
        date: '2024-04-25',
        belongs_to: 'maria777',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Con un 100% de confianza',
        body: 'Con un 100% de confianza, debo ponerme a estudiar',
        date: '2024-04-26',
        belongs_to: 'maria777',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Buena cita',
        body: 'Buena cita, me llamó Javier en vez de José pero estuvo divertida',
        date: '2024-04-27',
        belongs_to: 'jose',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Voy a ser papá',
        body: 'Voy a ser papá, no me importa nada',
        date: '2024-04-28',
        belongs_to: 'jose',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entries', null, {});
  }
};
