"use strict"
const bcrypt = require('bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      "Customers",
      [
        {
          nama: "risang",
          contact: "081212344321",
          email: "admin@admin.com",
          password: bcrypt.hashSync("1234qwer", bcrypt.genSaltSync(5)),
          alamat: "Bandung",
          diskon: 10000,
          tipe_diskon: "fixed",
          ktp: "https://1.bp.blogspot.com/-DP3oO978WlI/YKxaJG_qjOI/AAAAAAAAAZg/l8TpNN23Edw6TiXfLzODzRSrzeolfKaPgCNcBGAsYHQ/s16000/zz.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
