var express = require("express");
var router = express.Router();
var od = require("../models/order_detail_model");

router.post("/", function(req, res, next) {
  od.addData(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:order_id", function(req, res, next) {
  od.deleteAllData(req.params.order_id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/:order_id", function(req, res, next) {
  od.getAllData(req.params.order_id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;