var express=require('express');
var router=express.Router();
var promo=require('../models/promo_model');

router.get('/',function(req,res,next){
    promo.getPromo(function(err,rows){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
})

router.post('/',function(req,res,next){
    console.log(req.body);
    promo.addPromo(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
})

router.delete('/:pro_id',function(req,res,next){
    promo.deletePromo(req.params.pro_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})

module.exports = router;