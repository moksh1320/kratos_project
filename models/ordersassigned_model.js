var db = require("../dbconnection");
var order = {
  getAllOrders: function (callback) {
    return db.query(
      "select ot.*,ddt.dd_id,ct.c_name from order_tbl ot,delivery_detail_tbl ddt,client_tbl ct where ot.order_id = ddt.fk_order_id AND ot.fk_c_id=ct.c_id AND ddt.status = 'shipped'",
      callback
    );
  },
  updateStatus: function (dd_id, callback) {
    return db.query(
      "update delivery_detail_tbl set status = 'complete' where dd_id=?",
      [dd_id],
      callback
    );
  },
};

module.exports = order;
