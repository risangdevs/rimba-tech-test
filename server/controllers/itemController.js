const { Item } = require("../models");

class ItemController {
  static async getItems(req, res, next) {
    try {
      const items = await Item.findAll();
      if (!items) {
        throw { message: "notFound" };
      }
      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  }
  static async getItem(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id);
      if (!item) {
        throw { message: "notFound" };
      }
      res.status(200).json(item);
    } catch (err) {
      next(err);
    }
  }
  static async addItem(req, res, next) {
    try {
      const { nama_item, unit, stok, harga_satuan, barang } = req.body;
      // console.log(nama_item, unit, stock, harga_satuan, barang);
      if (!nama_item || !unit || !stok || !harga_satuan || !barang) {
        throw { message: "badRequest" };
      }
      const add = await Item.create({
        nama_item,
        unit,
        stok,
        harga_satuan,
        barang,
      });
      res.status(201).json(add);
    } catch (err) {
      next(err);
    }
  }
  static async editItem(req, res, next) {
    try {
      const { id } = req.params;
      const { nama_item, unit, stok, harga_satuan, barang } = req.body;

      const item = await Item.findByPk(id);
      if (!item) {
        throw { message: "notFound" };
      }
      if (!nama_item || !unit || !stok || !harga_satuan || !barang) {
        throw { message: "badRequest" };
      }
      const edit = await Item.update(
        {
          nama_item,
          unit,
          stok,
          harga_satuan,
          barang,
        },
        { where: { id: id }, returning: true }
      );
      res.status(201).json(edit);
    } catch (err) {
      next(err);
    }
  }
  static async deleteItem(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id);
      if (!item) {
        throw { message: "notFound" };
      }
      const deleteNow = await Item.destroy({
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

module.exports = ItemController;
