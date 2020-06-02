var express = require("express");
var router = express.Router();
var dashbord = require("../models/dashbord_model");

router.get("/",function(req,res,next){
        dashbord.orderBySubCategory(function(err,rows){
            if(err){
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
});
module.exports=router;