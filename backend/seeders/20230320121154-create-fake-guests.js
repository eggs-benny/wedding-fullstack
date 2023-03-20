'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('guests', [{
      uuid: "a93699af-4f19-4799-8719-d06a725ca4c9",
      firstname: 'Ben',
      lastname: 'Smith',
      email: 'ben@smith.com',
      rsvp: true,
      mealStarter: 'fish',
      mealMain: 'beef',
      updatedAt: "2023-03-20T12:08:01.640Z",
      createdAt: "2023-03-20T12:08:01.640Z",
    }, {
      uuid: "a93699af-4f19-4799-8719-d06a725ca4c1",
      firstname: 'Laura',
      lastname: 'Gao',
      email: 'laura@gao.com',
      rsvp: true,
      mealStarter: 'veggie',
      mealMain: 'veggie',
      updatedAt: "2023-03-20T12:08:01.640Z",
      createdAt: "2023-03-20T12:08:01.640Z",
    }, {
      uuid: "a93699af-4f19-4799-8719-d06a725ca4c2",
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@doe.com',
      rsvp: false,
      updatedAt: "2023-03-20T12:08:01.640Z",
      createdAt: "2023-03-20T12:08:01.640Z",
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('guests', null, {});
  }
};
