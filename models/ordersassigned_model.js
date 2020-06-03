var db = require("../dbconnection");
var email = require("emailjs/email");


var order = {
  getAllOrders: function (callback) {
    return db.query(
      "select ot.*,ddt.dd_id,ct.c_name from order_tbl ot,delivery_detail_tbl ddt,client_tbl ct where ot.order_id = ddt.fk_order_id AND ot.fk_c_id=ct.c_id AND ddt.status = 'shipped'",
      callback
    );
  },
  updateStatus: function (item, callback) {
    return db.query(
      "update delivery_detail_tbl set status = 'complete',completion_date=? where dd_id=?",
      [item.completion_date, item.dd_id],
      callback
    );
  },

  sendCompleteMailClient: function (demo, callback) {
    console.log(demo);
    var server = email.server.connect({
      user: "poojanmehta2017@gmail.com",
      password: "Poojan7041182054",
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
        subject: "Your order is complete",
      },
      callback
    );
  },
};

module.exports = order;
