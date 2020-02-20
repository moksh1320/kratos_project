var express = require('express');
var router = express.Router();
var Multiple = require('../models/multiple_model');

router.post('/', function (req, res, next) {
    Multiple.deleteMultiple(req.body, function (err, rows) {
        if (err) {
            res.json(err)
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/', function (req, res, next) {
    Multiple.addDiscount(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/:id', function (req, res, next) {
    Multiple.deleteDiscount(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;