const { List, Item } = require("../models");

class ListController {
  static async getLists(req, res, next) {
    try {
      const { id } = req.user;
      const lists = await List.findAll({ where: { CustomerId: id },include:'Item' });
      if (!lists) {
        throw { message: "notFound" };
      }
      res.status(200).json(lists);
    } catch (err) {
      next(err);
    }
  }
  static async getList(req, res, next) {
    try {
      const { id } = req.params;
      const list = await List.findByPk(id);
      if (!list) {
        throw { message: "notFound" };
      }
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  }
  static async addList(req, res, next) {
    try {
      const { ItemId, qty } = req.body;
      const CustomerId = req.user.id;
    //   console.log(ItemId,qty,CustomerId);
      if (!ItemId || !qty) {
        throw { message: `badRequest` };
      }
      const getitem = await Item.findByPk(+ItemId);
      if (!getitem) {
        throw { message: `notFound` };
      }
      let totalPrice = getitem.harga_satuan * qty;
      const addList = await List.create({
        ItemId:+ItemId,
        qty:+qty,
        CustomerId,
        totalPrice,
      });
      res.status(201).json(addList);
    } catch (err) {
      next(err);
    }
  }
  static async editList(req, res, next) {}
  static async deleteList(req, res, next) {
    try {
      const { id } = req.params;
      const list = await List.findByPk(id);
      if (!list) {
        throw { message: "notFound" };
      }
      const deleteNow = await List.destroy({
        where: { id: id },
        returning: true,
      });
      if (!deleteNow) {
        throw { message: "notFound" };
      }
      res.status(200).json(deleteNow);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = ListController;
