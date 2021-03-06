var express = require("express");
var router = express.Router();
var ddt = require("../models/delivery_detail_model");

router.post("/", function(req, res, next) {
  ddt.addDdt(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/:db_id",function(req,res,next) {
  ddt.getDetailsByDbId(req.params.db_id,function(err,rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
