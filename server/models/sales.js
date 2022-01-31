'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sales.init({
    code_transaksi: DataTypes.STRING,
    tanggal_transaksi: DataTypes.DATE,
    CustomerId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    total_diskon: DataTypes.INTEGER,
    total_harga: DataTypes.INTEGER,
    total_bayar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sales',
  });
  return Sales;
};