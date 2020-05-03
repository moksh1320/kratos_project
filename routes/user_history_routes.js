var express = require("express");
var router = express.Router();
var user = require("../models/user_history_model");

router.get("/", function (req, res, next) {
  user.getAllOrders(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/:fk_order_id",function(req,res,next){
  user.getOrderDetails(req.params.fk_order_id,function(err,rows){
    if(err) {
      res.json(err);
    }
    else{
      res.json(rows);
    }
  });
});


router.post("/",function(req,res,next){
  user.getAllService(req.body,function(err,rows){
    if(err) {
      res.json(err);
    }
    else{
      res.json(rows);
    }
  });
});
module.exports = router;
