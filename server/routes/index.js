const express = require("express");
const router = express.Router();
const customerRoutes=require('./customer')
const itemRoutes=require('./item')
const saleRoutes=require('./sale')
const errorHandlers = require("../middlewares/errorhandlers");

router.use('/customers', customerRoutes)
router.use('/items', itemRoutes)
router.use('/sales', saleRoutes)

router.use(errorHandlers);

module.exports = router;
