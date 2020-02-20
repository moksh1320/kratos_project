var express = require('express');
var router = express.Router();
var Service = require('../models/service_model');
//var multer = require('multer');
//var path = require('path');

router.get('/', function (req, res, next) {
    Service.getAllservice(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/:s_id', function (req, res, next) {
    Service.getServiceById(req.params.s_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.delete('/:s_id', function (req, res, next) {
    Service.deleteService(req.params.s_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/',function(req,res,next){
    Service.updateService(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/', function (req, res, next) {
    Service.addService(req.body,function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports=router;