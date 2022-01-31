const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const ItemController=require('../controllers/itemController')

router.get("/", ItemController.getItems);
router.post("/",authentication, ItemController.addItem);
router.get("/:id", ItemController.getItem);
router.put("/:id",authentication, ItemController.editItem);
router.delete("/:id",authentication, ItemController.deleteItem);

module.exports = router;