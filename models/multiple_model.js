var db = require('../dbconnection');
var multiple = {
    deleteMultiple(item, callback) {
        return db.query('delete from product_tbl where p_id in (?)', [item], callback);
    },
    addDiscount(item, callback) {
        console.log(item)
        return db.query('update product_tbl set p_disc=?,p_disc_price=? where p_id=?', [item.disc,item.disc_price, item.id], callback);
    },
    deleteDiscount(item, callback) {
        return db.query('update product_tbl set p_disc = Null,p_disc_price = product_tbl.p_price  where p_id in (?)',[item],callback);
    }
}

module.exports = multiple;