var express = require("express");
var router = express.Router();
var order = require("../models/ordersassigned_model");

router.get("/", function(req, res, next) {
  order.getAllOrders(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/complentclientmail", function(req, res, next) {
  order.sendCompleteMailClient(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
