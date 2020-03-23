var express = require("express");
var router = express.Router();
var order = require("../models/order_table_model");

router.post("/", function(req, res, next) {
  order.addOrder(req.body, function(err, rows) {
    console.log(req.body.order_date);
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/:c_id", function(req, res, next) {
  order.getOrdersByCid(req.params.c_id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/", function(req, res, next) {
  order.getAllOrders(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:c_id", function(req, res, next) {
  order.deleteAllOrders(req.params.c_id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/order_id", function(req, res, next) {
  order.deleteOrderById(req.params.order_id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


module.exports = router;