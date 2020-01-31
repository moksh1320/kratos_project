var express=require('express');
var router=express.Router();
var subcategory=require('../models/subcategory_model');

router.get('/',function(req,res,next){
    subcategory.getSubcategory(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports = router;