var db = require('../dbconnection');
var multiple = {
    deleteMultiple(item, callback) {
        return db.query('delete from product_tbl where p_id in (?)', [item], callback);
    },
    addPromo(item, callback) {
        return db.query('update product_tbl set p_code=? where p_id in (?)', [item.promo, item.chkarr], callback);
    },
    deletePromo(item, callback) {
        return db.query('update product_tbl set p_code = Null  where p_id in (?)',[item],callback);
    }
}

module.exports = multiple;