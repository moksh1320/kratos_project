var express = require("express");
var router = express.Router();
var order = require("../models/ordersnotassigned_model");

router.get("/", function(req, res, next) {
  order.getAllOrders(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/", function(req, res, next) {
  order.assignOrder(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
