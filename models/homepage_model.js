var db = require("../dbconnection");
var homepage = {
        getAllOffers:function(callback){
            return db.query("select * from homeoffer_tbl",callback);
        },
        addOffers: function (item, filename, callback) {
            return db.query(
              "insert into homeoffer_tbl (offer_img,offer_link,offer_discription,) values (?,?,?,?)",
              [
                filename,
                item.offer_link,
                item.offer_discription,
              ],
              callback
            );
          },
          deleteOffers: function (offer_id, callback) {
            return db.query("delete from homeoffer_tbl where offer_id=?", [offer_id], callback);
          },
          getOfferById: function (offer_id, callback) {
            return db.query("select * from homeoffer_tbl where offer_id=?", [offer_id], callback);
          },
}
module.exports=homepage;