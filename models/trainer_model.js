var db=require('../dbconnection');
var trainer={
        getAllTrainer:function(callback){
            return db.query('select * from trainer_tbl',callback);
        },
        addTrainer:function(item,filename,callback){
            console.log(filename);
            return db.query('insert into trainer_tbl (t_name,t_gen,t_dob,t_con,t_qlf,t_img,t_exp) values(?,?,?,?,?,?,?)',[item.t_name,item.t_gen,item.t_dob,item.t_con,item.t_qlf,filename,item.t_exp],callback);
        },
        getTrainerById:function(t_id,callback){
            return db.query('select * from trainer_tbl where t_id=?',[t_id],callback);
        },
       
        deleteTrainer:function(t_id,callback) {
            return db.query('delete from trainer_tbl where t_id=?',[t_id],callback);
        },
        editTrainer:function(t_id,callback) {
            return db.query('select * from trainer_tbl where t_id=?',[t_id],callback);
        },
        updateTrainer:function(item,callback){
            return db.query('update trainer_tbl set t_name=?,t_gen=?,t_dob=?,t_con=?,t_qlf=?,t_exp=? where t_id=?',[item.t_name,item.t_gen,item.t_dob,item.t_con,item.t_qlf,item.t_exp,item.t_id],callback);
        },
        updateImage:function(t_id,filename,callback){
            console.log(filename);
            console.log(t_id);
            if(filename != null) {
                return db.query('update trainer_tbl set t_img=? where t_id=?',[filename,t_id],callback);
        }
        }
}
module.exports=trainer;