'use strict';
const hashPassword = require("../helpers/passwordHash");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Item, {
        foreignKey: "ItemId",
        through: models.Sales,
      });
    }
  };
  Customer.init({
    nama: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    alamat: DataTypes.STRING,
    diskon: DataTypes.INTEGER,
    tipe_diskon: DataTypes.STRING,
    ktp: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: (instance) => {
        instance.password = hashPassword(instance.password);
      },
    },
    modelName: 'Customer',
  });
  return Customer;
};