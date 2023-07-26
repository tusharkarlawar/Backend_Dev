const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactus',(req, res,next) =>{
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
});

router.post('/submit',(req, res,next) =>{
    console.log(req.body);
    res.redirect('/success');
});

module.exports = router;
//