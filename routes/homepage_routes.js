var express = require("express");
var router = express.Router();
var homepageoffer = require("../models/homepage_model");
var multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/homepageoffer_images");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.filename + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

var upload = multer({ storage: storage });

router.get("/", function (req, res, next) {
    homepageoffer.getAllOffers(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
router.get("/:offer_id", function (req, res, next) {
    homepageoffer.getOffersById(req.params.offer_id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
router.delete("/:offer_id", function (req, res, next) {
    homepageoffer.deleteOffers(req.params.offer_id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
router.put("/", function (req, res, next) {
    homepageoffer.deleteProductFromCarousel(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
router.post("/", function (req, res, next) {
    homepageoffer.addProductsToCarousel(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
router.post('/:offer', upload.single('image'), function (req, res, next) {
    homepageoffer.addOffers(req.body, req.file.originalname != 'null' ? req.file.filename : null, function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put("/:get", function (req, res, next) {
    homepageoffer.getAllProducts(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
