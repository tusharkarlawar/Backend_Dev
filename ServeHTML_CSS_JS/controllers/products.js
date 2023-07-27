const path = require('path');

const rootDir = require('../util/path');

const Product = require('../models/product');

exports.getAddProduct =(req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res,next) =>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProduct = (req, res,next) =>{
     Product.fetchAll((products) =>{
        res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    });
   
};

exports.getContact = (req, res,next) =>{
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
};

exports.postContact = (req, res,next) =>{
    console.log(req.body);
    res.redirect('/success');
};

exports.getSuccess = (req, res,next) =>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
};