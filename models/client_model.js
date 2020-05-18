var db=require('../dbconnection');
var client={
    getAllclient:function(callback) {
        return db.query('select * from client_tbl',callback);
    },
    deleteclient:function(c_id,callback) {
        return db.query('delete from client_tbl where c_id=?',[c_id],callback);
    },
    editclient:function(c_id,callback) {
        return db.query('select * from client_tbl where c_id=?',[c_id],callback);
    },
    updateclient:function(item,c_id,callback){
        return db.query('update client_tbl set c_pass=?,c_name=?,c_con=?,c_dob=?,c_b_pic=?,c_a_pic=?,c_goal=?,fk_t_id=?,fk_s_id=?,p_pur_det=?,c_type=?,c_gen=?',[item.c_pass,item.c_name,item.c_con,item.c_dob,item.c_b_pic,item.c_a_pic,item.c_goal,item.fk_t_id,item.fk_s_id,item.p_pur_det,item.c_type,item.c_gen],callback);
    },
    getlogin:function(item,callback) {
        //console.log(item);
        return db.query('select * from client_tbl where c_email=? and c_pass=?',[item.c_email,item.c_pass],callback);
    },
    getsignup(item,callback){
        console.log(item)
        return db.query('insert into client_tbl (c_email,c_name,c_pass,c_con,c_dob) values (?,?,?,?,?)',[item.c_email,item.c_name,item.c_pass,item.c_con,item.c_dob],callback);
},

}
module.exports=client;