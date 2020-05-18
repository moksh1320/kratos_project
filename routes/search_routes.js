var express = require("express");
var router = express.Router();
var search = require("../models/search_model");

router.put("/", function (req, res, next) {
  search.searchProduct(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;