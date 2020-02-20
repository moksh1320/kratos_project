var express = require("express");
var router = express.Router();
var subcategory = require("../models/subcategory_model");

router.post("/:ct_id", function(req, res, next) {
  subcategory.addSubategory(req.body, req.params.ct_id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/", function(req, res, next) {
  subcategory.getSubcategory(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:sct_id", function(req, res, next) {
  subcategory.deleteSubcategory(req.params.sct_id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
