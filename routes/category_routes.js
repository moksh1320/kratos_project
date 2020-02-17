var express=require('express');
var router=express.Router();
var category=require('../models/category_model');

router.post('/:ct_id',function(req,res,next){
    // console.log(req.body.sct_name);
    console.log(req.params.ct_id);
    category.addCategory(req.body,req.params.ct_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

 
router.get('/',function(req,res,next){
    category.getCategory(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('/:ct_id',function(req,res,next){
    category.getSubategory(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports = router;