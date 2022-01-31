const express = require("express");
const CustomerController = require("../controllers/customerController");
const router = express.Router();
const authentication = require("../middlewares/authentication");

router.post("/register", CustomerController.register);
router.post("/login", CustomerController.login);
router.get("/:id", CustomerController.account);
router.put("/:id",authentication, CustomerController.editAccount);
router.delete("/:id",authentication, CustomerController.deactivate);

module.exports = router;
