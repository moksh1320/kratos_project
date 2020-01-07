var express = require('express');
var router = express.Router();
var product = require('../models/product_model');

router.post('/',function(req,res,next){
    product.addProduct(req.body,function(err,rows){
        console.log(req.body);
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/',function(req,res,next){
    product.getAllProduct(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/:p_id',function(req,res,next){
    product.getProductById(req.params.p_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports = router;