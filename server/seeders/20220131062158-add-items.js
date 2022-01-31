"use strict";

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
      "Items",
      [
        {
          nama_item: "Beras",
          unit: "kg",
          stok: 500,
          harga_satuan: 25000,
          barang:
            "https://cdn-cas.orami.co.id/parenting/images/5_Jenis_Beras_yang_Ada_di_Indone.original.jpegquality-90_mOYa7rl.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_item: "Gandum",
          unit: "kg",
          stok: 500,
          harga_satuan: 45000,
          barang:
            "https://img.lovepik.com/photo/20211121/medium/lovepik-still-life-map-of-cereals-picture_500639899.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_item: "Karung",
          unit: "pcs",
          stok: 100,
          harga_satuan: 2500,
          barang:
            "https://static.duta.co/wp-content/uploads/2020/05/225-muslimobsession.jpg",
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
    await queryInterface.bulkDelete("Items", null, {});
  },
};
