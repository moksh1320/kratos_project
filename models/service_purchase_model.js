var db = require("../dbconnection");
var Service = {
  purchaseService: function (item, callback) {
    console.log(item);
    return db.query(
      "insert into service_purchase_tbl (sp_pur_date, sp_exp_date, fk_s_id, fk_c_id) values(?,?,?,?)",
      [item.sp_pur_date, item.sp_exp_date, item.fk_s_id, item.fk_c_id],
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
  getAllPurchasedService: function (callback) {
    return db.query(
      "select st.s_name,ct.c_name,spt.* from service_purchase_tbl spt,service_tbl st,client_tbl ct where st.s_id=spt.fk_s_id AND ct.c_id=spt.fk_c_id",
      callback
    );
  },
};
module.exports = Service;
