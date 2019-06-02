var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        block: ['Ты','молодец!', 'у тебя', 'получилось!']
    });
});

module.exports = router;
