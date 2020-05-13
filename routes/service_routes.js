var express = require("express");
var router = express.Router();
var Service = require("../models/service_model");
var multer = require("multer");
var path = require("path");

router.get("/", function (req, res, next) {
  Service.getAllservice(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/service_images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.filename + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });

router.get("/:s_id", upload.single('image'), function (req, res, next) {
  Service.getServiceById(req.params.s_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:s_id", function (req, res, next) {
  Service.deleteService(req.params.s_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/", function (req, res, next) {
  Service.updateService(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", upload.single("image"), function (req, res, next) {
    console.log(req.body);
  Service.addService(req.body,  req.file.originalname != 'null' ? req.file.filename : null,function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
