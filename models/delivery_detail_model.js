var db = require("../dbconnection");

var ddt = {
  addDdt: function (item, callback) {
    return db.query(
      "insert into delivery_detail_tbl (address,notes,fk_order_id,status) values (?,?,?,?)",
      [item.address, item.notes, item.fk_order_id, item.status],
      callback
    );
  },
  getDdt: function (item, callback) {
    return db.query(
      "select * from delivery_detail_tbl where fk_order_id=?",
      [item],
      callback
    );
  },
  getDetailsByDbId: function (db_id, callback) {
    return db.query(
      "select ot.*,ddt.*,ct.* from order_tbl ot,delivery_detail_tbl ddt,client_tbl ct where ot.order_id = ddt.fk_order_id AND ddt.fk_db_id=? AND ot.fk_c_id=ct.c_id AND ddt.status = 'shipped'",
      [db_id],
      callback
    );
  },
};

module.exports = ddt;
