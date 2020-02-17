var express = require("express");
var router = express.Router();
var client = require("../models/client_model");

router.get("/", function(req, res, next) {
  client.getAllclient(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get("/:c_id", function(req, res, next) {
  client.get.editclient(req.params.c_id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post("/", function(req, res, next) {
  client.getlogin(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function(req, res, next) {
  client.addclient(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.delete("/:id", function(req, res, next) {
  client.deleteclient(req.params.id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.put("/:c_id", function(req, res, next) {
  client.updateclient(req.params.c_id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
