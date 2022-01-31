const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const ListController = require("../controllers/listController");

router.get("/", authentication, ListController.getLists);
router.post("/", authentication, ListController.addList);
router.get("/:id", authentication, ListController.getList);
router.put("/:id", authentication, ListController.editList);
router.delete("/:id", authentication, ListController.deleteList);

module.exports = router;
