var express = require("express");
var router = express.Router();
var client = require("../models/client_model");

router.post("/", function (req, res, next) {
  client.addClient(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/:c_name", function (req, res, next) {
  client.sendMail(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
