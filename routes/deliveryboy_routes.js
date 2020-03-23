var express=require('express');
var router=express.Router();
var dboy=require('../models/deliveryboy_model');

router.get("/",function(req,res,next){
    dboy.getAllDboy(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get("/:db_id",function(req,res,next){
    dboy.getAllDataById(req.params.db_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post("/",function(req,res,next){
    dboy.addDboy(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete("/:db_id",function(req,res,next){
    dboy.deleteDboy(req.params.db_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports = router;