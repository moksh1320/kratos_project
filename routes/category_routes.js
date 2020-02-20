var express = require("express");
var router = express.Router();
var category = require("../models/category_model");



router.get("/", function(req, res, next) {
  category.getCategory(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/:ct_id", function(req, res, next) {
  category.getSubategory(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


module.exports = router;
