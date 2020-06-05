var rn = require("random-number");
var dateTime = require("node-datetime");
var express = require("express");
var router = express.Router();
var otp = require("../models/otp_model");

var dt;
var formatted;

var option = {
  min: 1000,
  max: 9999,
  integer: true,
};

router.put("/", function (req, res, next) {
  var otpnum = rn(option);
  console.log(otpnum);
  dt = dateTime.create();
  formatted = dt.format("YmdHMS");
  otp.addOtp(otpnum, formatted, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(otpnum);
    }
  });
});

router.post("/", function (req, res, next) {
  otp.getOtp(req.body, function (err, rows) {
    dt = dateTime.create();
    formatted = parseInt(dt.format("YmdHMS"));
    console.log(rows);
    if (err) {
      res.json(err);
    } else if(rows.length <= 0) {
      res.json("email not exist")
    } else if (rows[0].otp == req.body.otp) {
      exptime = parseInt(rows[0].otp_exp);
      console.log(exptime);
      if (formatted > exptime + 300) {
        res.json("time excced");
      } else {
        res.json("success");
      }
    } else {
      res.json("wrong otp");
    }
    console.log(formatted);
  });
});

router.put("/:change", function (req, res, next) {
  otp.changePassword(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/:otpmail", function (req, res, next) {
  otp.sendOTPMail(req.body, function (err, message) {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      return res.json({ success: true, msg: "sent" }); //or return count for 1 or 0
    }
  });
});
module.exports = router;
