var db = require("../dbconnection");
var Service = {
  purchaseService: function (item, callback) {
    return db.query(
      "insert into service_purchase_tbl (sp_pur_date, fk_s_id, fk_c_id) values(?,?,?)",
      [item.sp_pur_date, item.fk_s_id, item.fk_c_id],
      callback
    );
  },
  assignTrainer: function (item, callback) {
    return db.query(
      "update service_purchase_tbl set fk_t_id=? where sp_id=?",
      [item.fk_t_id, item.sp_id],
      callback
    );
  },
};
module.exports = Service;
