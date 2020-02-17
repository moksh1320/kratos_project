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

router.post('/:ct_id',function(req,res,next){
    // console.log(req.body.sct_name);
    console.log(req.params.ct_id);
    subcategory.addSubCategory(req.body,req.params.ct_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports = router;