var db = require("../dbconnection");
var order = {
  getAllOrders: function (callback) {
    return db.query(
        "select ot.*,ddt.dd_id,ct.c_name from order_tbl ot,delivery_detail_tbl ddt,client_tbl ct where ot.order_id = ddt.fk_order_id AND ot.fk_c_id=ct.c_id AND ddt.status = 'pending'",
      callback
    );
  },
  assignOrder: function (item, callback) {
    return db.query(
      "update delivery_detail_tbl set fk_db_id =?,status='shipped' where dd_id=?",
      [item.db_id, item.dd_id],
      callback
    );
  },
  updateStock: function (item, callback) {
      console.log(item.p_stock,item.p_id);
      return db.query(
        "update product_tbl set p_stock=? where p_id=?",
        [item.p_stock, item.p_id],
        callback
      );
    }
  }

module.exports = order;
