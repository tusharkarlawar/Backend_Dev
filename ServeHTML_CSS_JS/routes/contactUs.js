const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/contactus', productsController.getContact);

router.post('/submit', productsController.postContact);

module.exports = router;
///