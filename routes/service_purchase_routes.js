var express = require("express");
var router = express.Router();
var Service = require("../models/service_purchase_model");

router.post("/", function (req, res, next) {
  Service.purchaseService(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/", function (req, res, next) {
  Service.assignTrainer(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/", function (req, res, next) {
  Service.getAllPurchasedService(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
