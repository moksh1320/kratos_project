var db = require("../dbconnection");
var dboy = {
  addDboy: function(item, callback) {
    return db.query(
      "insert into deliveryboy_tbl (db_name,db_gen,db_contact,db_img) values (?,?,?,?)",
      [item.db_name,item.db_gen,item.db_contact,item.db_img],
      callback
    );
  },
  deleteDboy: function(db_id, callback) {
    return db.query(
      "delete from deliveryboy_tbl where db_id=?",
      [db_id],
      callback
    );
  },
  getAllDboy: function(callback) {
    return db.query("select * from deliveryboy_tbl", callback);
  },
  getAllDataById: function(db_id, callback) {
    return db.query(
      "select ot.* from order_tbl AS ot,delivery_detail_tbl AS ddt where ddt.dd_id = ot.fk_dd_id AND ddt.fk_db_id = ?",
      [db_id],
      callback
    );
  },
  updateDeliveryBoy:function(item,callback){
    return db.query('update deliveryboy_tbl set db_name=?,db_gen,db_con=?, where db_id=?',[item.db_name,item.db_gen,item.db_con,item.db_id],callback);
},
  updateImage:function(db_id,filename,callback){
    console.log(filename);
    console.log(db_id);
    if(filename != null) {
        return db.query('update deliveryboy_tbl set db_img=? where db_id=?',[filename,db_id],callback);
}
}
};
module.exports = dboy;
