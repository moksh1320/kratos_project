var db = require("../dbconnection");
var homepage = {
  getAllOffers: function (callback) 
  {
    return db.query("select * from homeoffer_tbl", callback);
  },
  addOffers: function (item, filename, callback) 
  {
    return db.query("insert into homeoffer_tbl (offer_img,offer_link,offer_discription) values (?,?,?)",
      [filename, item.offer_link, item.offer_discription],
      callback
    );
  },
  deleteOffers: function (offer_id, callback) {
    return db.query(
      "delete from homeoffer_tbl where offer_id=?",
      [offer_id],
      callback
    );
  },
  getOfferById: function (offer_id, callback) {
    return db.query(
      "select * from homeoffer_tbl where offer_id=?",
      [offer_id],
      callback
    );
  },
  addProductsToCarousel: function (item, callback) {
    return db.query(
      "insert into product_carousel_tbl (fk_p_id) values (?)",
      [item.fk_p_id],
      callback
    );
  },
  deleteProductFromCarousel: function (item, callback) {
    return db.query(
      "delete from product_carousel_tbl where fk_p_id=?",
      [item.fk_p_id],
      callback
    );
  },
  getAllProducts: function (item, callback) {
    return db.query("select * from product_carousel_tbl", callback);
  },
};
module.exports = homepage;
