const { Customer } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();
const secretkey = process.env.SECRETKEY;
const jwt = require("jsonwebtoken");
const hashPassword = require("../helpers/passwordHash");
class CustomerController {
  static async register(req, res, next) {
    try {
      const { nama, email, password, contact, alamat, ktp } = req.body;
      //   console.log(nama, email, password, contact, alamat, ktp);
      if (!nama || !email || !password || !ktp) {
        throw { name: `badRequest` };
      } else {
        const newUser = await Customer.create({
          nama: nama,
          email: email,
          password: password,
          contact: contact,
          alamat: alamat,
          ktp: ktp,
        });
        // console.log(newUser);
        res.status(201).json({ message: `new user registered` });
      }
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { message: "notFound" };
      } else {
        const user = await Customer.findOne({ where: { email }, raw: true });
        // console.log(user);
        if (!user) {
          throw { message: "notFound" };
        } else {
          if (!bcrypt.compareSync(password, user.password)) {
            throw { message: "notFound" };
          } else {
            //kirim token
            const access_token = jwt.sign(user, secretkey);
            // console.log(access_token);
            res.status(200).json({ access_token, user });
          }
        }
      }
    } catch (err) {
      next(err);
    }
  }
  static async account(req, res, next) {
    try {
      const { id } = req.params;
      //   console.log(id);
      const account = await Customer.findByPk(id);
      if (!account) {
        throw { message: "notFound" };
      }
      res.status(200).json(account);
    } catch (err) {
      next(err);
    }
  }
  static async deactivate(req, res, next) {
    try {
      const { id } = req.params;
      //   console.log(id);
      const account = await Customer.findByPk(id);
      if (!account) {
        throw { message: "notFound" };
      }
      const deleted= await Customer.destroy({
        where: { id: id },
        returning: true,
    });
        if(!deleted){
            throw{message:'notFound'}
        }
      res.status(200).json(deleted);
    } catch (err) {
      next(err);
    }
  }
  static async editAccount(req, res, next) {
    try {
      const { nama, email, password, contact, alamat, ktp } = req.body;
      const { id } = req.params;

      const account = await Customer.findByPk(id);
      if (!account) {
        throw { message: "notFound" };
      }
      if (!nama || !email || !password || !ktp) {
        throw { message: `badRequest` };
      } else {
        const update = await Customer.update(
          {
            nama: nama,
            email: email,
            password: hashPassword(password),
            contact: contact,
            alamat: alamat,
            ktp: ktp,
          },
          { where: { id: id }, returning: true }
        );
        res.status(200).json(update);
      }
      //   console.log(account);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = CustomerController;
