var express=require('express');
var router=express.Router();
var trainer=require('../models/trainer_model');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/trainer_images')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '_' + Date.now() + path.extname(file.originalname));
<<<<<<< HEAD
        console.log('image');
    }
});

=======
    }
});
 
>>>>>>> 075d6fe426edf94f4d87ef55451907ad3a2b159b
var upload = multer({ storage: storage });

router.post('/', upload.single('image'), function (req, res, next) {
    console.log(req.body);
    trainer.addTrainer(req.body, req.file.originalname != 'null' ? req.file.filename : null, function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});



router.get('/',function(req,res,next){
    trainer.getAllTrainer(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

// router.post('/',function(req,res,next){
//     trainer.addTrainer(req.body,function(err,rows){
//         console.log(req.body);
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(rows);
//         }
//     });
// });
<<<<<<< HEAD
router.delete('/:id',function(req,res,next){
    trainer.deleteTrainer(req.params.id,function(err,rows){
        if(err){
=======
// router.post('/',function(req,res,next){
//     trainer.addTrainer(req.body,function(err,rows){
//         // console.log(req.body);
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(rows);
//         }
//     });
// });
router.delete('/:id',function(req,res,next){
    trainer.deleteTrainer(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:t_id',upload.single('image'), function (req, res, next) {
    trainer.updateImage(req.params.t_id, req.file.originalname != 'null' ? req.file.filename : null, function (err, rows) {
        if (err) {
>>>>>>> 075d6fe426edf94f4d87ef55451907ad3a2b159b
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/',function(req,res,next){
    trainer.updateTrainer(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/:t_id', function (req, res, next) {
    trainer.getTrainerById(req.params.t_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:t_id',upload.single('image'), function (req, res, next) {
    trainer.updateImage(req.params.t_id, req.file.originalname != 'null' ? req.file.filename : null, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports=router;