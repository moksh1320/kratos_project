var db = require("../dbconnection");
var order_detail = {
  getAllData: function(order_id, callback) {
    db.query(
      "select * from order_detail where fk_order_id=?",
      [order_id],
      callback
    );
  },
  deleteAllData: function(order_id, callback) {
    db.query(
      "delete from order_detail where fk_order_id=?",
      [order_id],
      callback
    );
  },
  addData: function(item, callback) {
    let order_total=0;
    const arr=[];
    console.log(item.cartItems[0].product.p_id);
    console.log(item.fk_order_id);
    for (let i = 0; i < item.cartItems.length; i++) {
      var order_id = item.fk_order_id;
      var prod_id = item.cartItems[i].product.p_id;
      var order_qty = item.cartItems[i].quantity;
      order_total = item.cartItems[i].subtotal;
      arr.push([order_id, prod_id, order_qty, order_total]);
      console.log(i);
    }
    console.log(arr);
    db.query(
       "INSERT INTO `order_detail`( `fk_order_id`, `fk_prod_id`, `order_qty`, `order_total`) VALUES ?",
       [arr],
       callback
    );
  }
};

module.exports = order_detail;
