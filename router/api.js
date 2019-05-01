const express = require('express');
const shopController = require('../controller/productController')
const router = express.Router();

router.get('/product', shopController.product);

module.exports = router;