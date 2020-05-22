var db = require("../dbconnection");

var ddt = {
  addDdt: function (item, callback) {
    return db.query(
      "insert into delivery_detail_tbl (address,notes,fk_order_id,status) values (?,?,?,?)",
      [item.address, item.notes, item.fk_order_id,item.status],
      callback
    );
  },
  getDdt: function (item, callback) {
    return db.query("select * from delivery_detail_tbl where fk_order_id=?",[item],callback);
  },
};

module.exports = ddt;
