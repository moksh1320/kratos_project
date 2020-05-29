var express = require('express');
var router = express.Router();
var product = require('../models/product_model');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/product_images')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '_' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage });

router.post('/', upload.single('image'), function (req, res, next) {
    product.addProduct(req.body, req.file.originalname != 'null' ? req.file.filename : null, function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/', function (req, res, next) {
    product.getAllProduct(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/:p_id', function (req, res, next) {
    product.getProductById(req.params.p_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/', function (req, res, next) {
    product.updateProduct(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/:p_id',upload.single('image'), function (req, res, next) {
    product.updateImage(req.params.p_id, req.file.originalname != 'null' ? req.file.filename : null, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.delete('/:p_id', function (req, res, next) {
    product.deleteProduct(req.params.p_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.post('/:multiple', upload.single('image'), function (req, res, next) {
    product.getMultipleProducts(req.body, function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;