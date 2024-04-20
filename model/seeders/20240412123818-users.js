"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        { id: 1, firstname: "Joe", lastname: "Dalton", adult: 1, guardian_id: null, role: 1, state: 1 },
        { id: 2, firstname: "Jack", lastname: "Dalton", adult: 1, guardian_id: null, role: 1, state: 1 },
        { id: 3, firstname: "William", lastname: "Dalton", adult: 0, guardian_id: null, role: 1, state: 1 },
        { id: 4, firstname: "Averell", lastname: "Dalton", adult: 0, guardian_id: null, role: 1, state: 1 },
        { id: 5, firstname: "Ma", lastname: "Dalton", adult: 1, guardian_id: null, role: 2, state: 1 },
        { id: 6, firstname: "Rantanplan", lastname: "Plan", adult: 0, guardian_id: null, role: 1, state: 0 },
        { id: 101, firstname: "Lucky", lastname: "Luke", adult: 1, guardian_id: null, role: 3, state: 1 }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
