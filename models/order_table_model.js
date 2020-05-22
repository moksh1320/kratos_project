var db = require("../dbconnection");
var order = {
  getOrdersByCid: function(c_id, callback) {
    return db.query(
      "select * from order_tbl where fk_c_id=?",
      [c_id],
      callback
    );
  },
  addOrder: function(item, callback) {
    console.log(item);
    return db.query(
      "insert into order_tbl (order_date,pay_type,fk_c_id) values (?,?,?)",
      [item.order_date, item.pay_type, item.fk_c_id],
      callback
    );
  },
  deleteOrderById: function(order_id, callback) {
    return db.query(
      "delete from order_tbl where order_id=?",
      [order_id],
      callback
    );
  },
  getOrderById:function(order_id,callback){
    return db.query('select * from order_tbl where order_id=?',[order_id],callback);
},

  deleteAllOrders: function(c_id, callback) {
    return db.qyery("delete from order_tbl where fk_c_id=?", [c_id], callback);
  },
  getAllOrders: function(callback) {
    return db.query(
      "select ot.*,ddt.dd_id,ct.c_name from order_tbl ot,delivery_detail_tbl ddt,client_tbl ct where ot.order_id = ddt.fk_order_id AND ot.fk_c_id=ct.c_id AND ddt.status = 'complete'",
      callback
    );
  }
};

module.exports = order;
