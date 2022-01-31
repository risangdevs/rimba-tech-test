const create_UUID = require("../helpers/randomUniqueString");
const { Sales, List, Item } = require("../models");
const list = require("../models/list");

class SaleController {
  static async getSales(req, res, next) {
    try {
      const { id } = req.body;
      const sales = await Sales.findAll(
        { include: List },
        { where: { ListId: id } }
      );
      if (!sales) {
        throw { message: "notFound" };
      }
      res.status(200).json(sales);
    } catch (err) {
      next(err);
    }
  }
  static async getSale(req, res, next) {
    try {
      const { id } = req.params;
      const sale = await Sales.findByPk(id);
      if (!sale) {
        throw { message: "notFound" };
      }
      res.status(200).json(sale);
    } catch (err) {
      next(err);
    }
  }
  static async addSale(req, res, next) {
    try {
      const CustomerId = req.user.id;
      const { diskon, tipe_diskon } = req.user;
      const getFromList = await List.findAll({
        where: { CustomerId: CustomerId },
        raw: true,
      });
      const getFromItem = await Item.findByPk(getFromList[0].ItemId);
      //   console.log(getFromList);
      //   console.log(getFromItem);
      const code_transaksi = create_UUID();
      const tanggal_transaksi = new Date();
      const ListId = +getFromList[0].id;
      const qty = getFromList[0].qty;
      let total_diskon = 0;
      const total_harga = getFromList[0].totalPrice;
      if (tipe_diskon === "fixed") {
        total_diskon += diskon;
      } else if (tipe_diskon === "persentase") {
        let x = getFromList.totalPrice * diskon;
        total_diskon += x;
      }
      const total_bayar = total_harga - total_diskon;
      const newStock = getFromItem.stok - getFromList[0].qty;
      if (newStock < 0) {
        throw { message: "Melebihi Stok yang Tersedia" };
      }
      const addThis = await Sales.create({
        code_transaksi,
        tanggal_transaksi,
        CustomerId,
        ListId,
        qty,
        total_diskon,
        total_harga,
        total_bayar,
      });
      const updateStock = await Item.update(
        {
          stok: newStock,
        },
        { where: { id: getFromItem.id }, returning: true }
      );
      const updateList = await List.destroy({ where: { id: ListId } });
      res.status(201).json({ addThis, updateStock });
    } catch (err) {
      next(err);
    }
  }
  static async editSale(req, res, next) {
    try {
    } catch (err) {
      next(err);
    }
  }
  static async deleteSale(req, res, next) {
    try {
      const { id } = req.params;
      const sale = await Sales.findByPk(id);
      if (!sale) {
        throw { message: "notFound" };
      }
      const deleteNow = await Sales.destroy({
        where: { id: id },
        returning: true,
      });
      if (!deleteNow) {
        throw { message: "notFound" };
      }
      res.status(200).json(deleteNow);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}
module.exports = SaleController;
