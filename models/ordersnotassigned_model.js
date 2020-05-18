var db = require("../dbconnection");
var order = {
  getAllOrders: function (callback) {
    return db.query(
      "select ot.*,dd_id from order_tbl ot,delivery_detail_tbl ddt where ot.order_id = ddt.fk_order_id AND ddt.fk_db_id IS NULL",
      callback
    );
  },
  assignOrder: function (item, callback) {
    return db.query(
      "update delivery_detail_tbl set fk_db_id =?,status='pending' where dd_id=?",
      [item.db_id, item.dd_id],
      callback
    );
  },
  updateStock: function (item, callback) {
      return db.query(
        "update product_tbl set p_stock=? where p_id=?",
        [item.p_stock, item.p_id],
        callback
      );
    }
  }

module.exports = order;
