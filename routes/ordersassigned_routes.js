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

router.put("/:complentclientmail", function(req, res, next) {
  order.sendCompleteMailClient(req.body, function(err, message) {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      return res.json({ success: true, msg: "sent" }); //or return count for 1 or 0
    }
  });
});

router.put("/", function(req, res, next) {
  order.updateStatus(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
