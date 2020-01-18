var db=require('../dbconnection');
var trainer={
        getAllTrainer:function(callback){
            return db.query('select * from trainer_tbl',callback);
        },
        addTrainer:function(item,callback){
            return db.query('insert into trainer_tbl (t_name,t_gen,t_dob,t_con,t_qlf,t_exp) values(?,?,?,?,?,?)',[item.t_name,item.t_gen,item.t_dob,item.t_con,item.t_qlf,item.t_exp],callback);
        },
        deleteTrainer:function(t_id,callback) {
            return db.query('delete from trainer_tbl where t_id=?',[t_id],callback);
        },
        editTrainer:function(t_id,callback) {
            return db.query('select * from trainer_tbl where t_id=?',[t_id],callback);
        },
        updateTrainer:function(t_id,item,callback){
            return db.query('update trainer_tbl set t_id=?,t_name =?,t_gen=?,t_dob=?,t_con=?,t_qlf=?,t_exp=?',[item.t_id,item.t_name,item.t_gen,item.t_dob,item.t_con,item.t_qlf,item.t_exp],callback);
        },
}
module.exports=trainer;