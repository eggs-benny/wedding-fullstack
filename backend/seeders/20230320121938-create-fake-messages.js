'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('messages', [{
      uuid: "29ff6def-5ee7-47e8-affd-b3474494ce87",
      needsReply: true,
      content: "How do we get to the wedding?",
      reply: "we will provide bus",
      createdAt: "2023-03-20T11:51:52.081Z",
      updatedAt: "2023-03-20T11:51:52.081Z",
      guestId: 19}
  
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('messages', null, {});
  }
};
