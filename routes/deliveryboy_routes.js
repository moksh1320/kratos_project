var express=require('express');
var router=express.Router();
var dboy=require('../models/deliveryboy_model');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/deliveryboy_images')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '_' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage });


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

router.post("/",upload.single('image'),function(req,res,next){
    dboy.addDboy(req.body, req.file.originalname != 'null' ? req.file.filename : null,function(err,rows){
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
router.put('/:db_id',upload.single('image'), function (req, res, next) {
    dboy.updateImage(req.params.db_id, req.file.originalname != 'null' ? req.file.filename : null, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/',function(req,res,next){
    dboy.updateDeliveryBoy(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports = router;