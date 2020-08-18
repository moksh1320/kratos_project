var db = require("../dbconnection");
var email = require("emailjs/email");

var order = {
  getOrdersByCid: function (c_id, callback) {
    return db.query(
      "select * from order_tbl where fk_c_id=?",
      [c_id],
      callback
    );
  },
  addOrder: function (item, callback) {
    console.log(item);
    return db.query(
      "insert into order_tbl (order_date,fk_c_id,pro_disc) values (?,?,?)",
      [item.order_date, item.fk_c_id, item.pro_disc],
      callback
    );
  },
  deleteOrderById: function (order_id, callback) {
    return db.query(
      "delete from order_tbl where order_id=?",
      [order_id],
      callback
    );
  },
  getOrderById: function (order_id, callback) {
    return db.query(
      "select * from order_tbl where order_id=?",
      [order_id],
      callback
    );
  },

  deleteAllOrders: function (c_id, callback) {
    return db.qyery("delete from order_tbl where fk_c_id=?", [c_id], callback);
  },
  getAllOrders: function (callback) {
    return db.query(
      "select ot.*,ddt.dd_id,ct.c_name from order_tbl ot,delivery_detail_tbl ddt,client_tbl ct where ot.order_id = ddt.fk_order_id AND ot.fk_c_id=ct.c_id AND ddt.status = 'complete'",
      callback
    );
  },

  sendConformationMailClient: function (demo, callback) {
    console.log(demo);
    var server = email.server.connect({
      user: "moksh111320@gmail.com",
      password: "123moksh02",
      host: "smtp.gmail.com",
      ssl: true,
      port: 465,
    });
    console.log(demo.message);

    server.send(
      {
        text: demo.message,
        from: "moksh111320@gmail.com",
        to: demo.receiver,
        subject: "Your order is placed",
      },
      callback
    );
  },
};

module.exports = order;
