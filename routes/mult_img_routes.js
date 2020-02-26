var express = require('express');
var router = express.Router();
var image = require('../models/mult_img_model');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/service_images')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '_' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });

router.post('/', upload.single('image'), function (req, res, next) {
    image.addImage(req.body, req.file.originalname != 'null' ? req.file.filename : null, function (err, rows) {
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
    image.getAllImage(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.delete('/:img_id', function (req, res, next) {
    image.deleteImage(req.params.img_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports=router;
