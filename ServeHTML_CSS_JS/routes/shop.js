const path = require('path');
//const rootDir = require('../util/path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProduct);

module.exports = router;
//