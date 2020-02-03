var express = require('express');
var router = express.Router();
var demo = require("../models/email_model");

router.post('/',function(req,res,next){
    demo.sendMail(req.body,function(err,message){
        console.log(req.body);
        if(err)
        {
            console.log(err);
            res.json(err);
            
        }
        else
        {
            return res.json({success: true, msg: 'sent'});//or return count for 1 or 0
        }
    });
});

module.exports=router; 