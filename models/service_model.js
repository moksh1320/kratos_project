var db=require('../dbconnection');
var Service={
    getAllservice:function(callback){
        return db.query('select * from service_tbl',callback);
    },
    getServiceById:function(s_id,callback){
        return db.query('select * from service_tbl where s_id=?',[s_id],callback);
    },
    updateService:function(item,callback){
        return db.query('update service_tbl set s_name=?,s_price=?,s_dur=?,s_disc=?,s_ben=? where s_id=?',[item.s_name,item.s_price,item.s_dur,item.s_disc,item.s_ben,item.s_id],callback);
    },
    deleteService:function(s_id,callback){
        return db.query('delete from service_tbl where s_id=?',[s_id],callback);
    },
    addService:function(item,callback){
        return db.query('insert into service_tbl  (s_name,s_price,s_dur,s_disc,s_ben) values (?,?,?,?,?)',[item.s_name,item.s_price,item.s_dur,item.s_disc,item.s_ben],callback);
    }
} 
    module.exports=Service;