var db = require("../dbconnection");
var dboy = {
  addDboy: function(item, callback) {
    return db.query(
      "insert into deliveryboy_tbl (db_name,db_contact,db_email) values (?,?,?)",
      [item.db_name,item.db_contact,item.db_email],
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
    return db.query('update deliveryboy_tbl set db_name=?,db_con=?,db_email=? where db_id=?',[item.db_name,item.db_con,item.db_email,item.db_id],callback);
}
};
module.exports = dboy;
