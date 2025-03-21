"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "recruiter_profiles",
      { city: "KYIV" },
      { id: 468 }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "recruiter_profiles",
      { city: null },
      { id: 468 }
    );
  }
};
