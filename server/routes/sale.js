const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const SaleController=require('../controllers/saleController')

router.get("/",authentication, SaleController.getSales);
router.post("/",authentication, SaleController.addSale);
router.get("/:id", authentication, SaleController.getSale);
router.put("/:id",authentication, SaleController.editSale);
router.delete("/:id",authentication, SaleController.deleteSale);

module.exports = router;
