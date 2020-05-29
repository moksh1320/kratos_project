var express = require("express");
var router = express.Router();
var order = require("../models/ordersnotassigned_model");

router.get("/", function (req, res, next) {
  order.getAllOrders(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/", function (req, res, next) {
  order.assignOrder(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function (req, res, next) {
  order.updateStock(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/shipmentclientmail", function (req, res, next) {
  order.sendShipmentMailClient(req.body, function (err, message) {
    console.log(req.body);
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      return res.json({ success: true, msg: "sent" }); //or return count for 1 or 0
    }
  });
});

router.put("/shipmentdboymail", function (req, res, next) {
  order.sendShipmentMailDboy(req.body, function (err, message) {
    console.log(req.body);
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      return res.json({ success: true, msg: "sent" }); //or return count for 1 or 0
    }
  });
});

module.exports = router;
