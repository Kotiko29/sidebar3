var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        square1: 'Ты',
        square2: 'молодец!',
        square3: 'У тебя',
        square4: 'получилось!',
        square5: ['привет','как дела?','что делаешь'],
        squares: [
            ['Ты','молодец!'],
            ['У тебя','получилось!']
        ],
        tracks: [
            [0, 'muse','bliss'],
            [1, 'asdf', '12345'],
            [2, 'asdf', '1223345'],
            [4, 'asdf', '1223424345'],
        ]
    });
});

module.exports = router;
