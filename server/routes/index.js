const express = require("express");
const router = express.Router();
const customerRoutes=require('./customer')
const itemRoutes=require('./item')
const saleRoutes=require('./sale')
const listRoutes=require('./list')
const errorHandlers = require("../middlewares/errorhandlers");

router.use('/customers', customerRoutes)
router.use('/items', itemRoutes)
router.use('/sales', saleRoutes)
router.use('/lists', listRoutes)

router.use(errorHandlers);

module.exports = router;
