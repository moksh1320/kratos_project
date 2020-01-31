var express=require('express');
var router=express.Router();
var trainer=require('../models/trainer_model');

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
// router.get('/:t_id',function(req,res,next){
//     trainer.get.editTrainer(req.params.t_id,function(err,rows){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(rows);
//         }
//     });
// });
router.post('/',function(req,res,next){
    trainer.addTrainer(req.body,function(err,rows){
        console.log(req.body);
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
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

module.exports=router;