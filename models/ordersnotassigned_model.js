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
    console.log(item.p_stock, item.p_id);
    return db.query(
      "update product_tbl set p_stock=? where p_id=?",
      [item.p_stock, item.p_id],
      callback
    );
  },

  sendShipmentMailClient: function (demo, callback) {
    console.log(demo);
    var server = email.server.connect({
      user: "moksh111320@gmail.com",
      password: "moksh1328@",
      host: "smtp.gmail.com",
      ssl: true,
      port: 465,
    });
    console.log(demo.message);

    server.send(
      {
        text: demo.shipmentclientmessage,
        from: "moksh111320@gmail.com",
        to: demo.clientreceiver,
        subject: "Your order is shipped",
      },
      callback
    );
  },

  sendShipmentMailDboy: function (demo, callback) {
    console.log(demo);
    var server = email.server.connect({
      user: "moksh111320@gmail.com",
      password: "moksh1328@",
      host: "smtp.gmail.com",
      ssl: true,
      port: 465,
    });
    console.log(demo.message);

    server.send(
      {
        text: demo.shipmentdboymessage,
        from: "moksh111320@gmail.com",
        to: demo.dboyreceiver,
        subject: "You have new order to deliever",
      },
      callback
    );
  },
};

module.exports = order;
