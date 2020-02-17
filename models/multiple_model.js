var db = require('../dbconnection');
var multiple = {
    deleteMultiple(item, callback) {
        return db.query('delete from product_tbl where p_id in (?)', [item], callback);
    },
    addPromo(item, callback) {
        console.log(item);
        for(let i=0;i<item.length;i++){
        return db.query('update product_tbl set p_disc=? where p_id=?', [item[i].price, item[i].id], callback);
        }
    },
    deletePromo(item, callback) {
        return db.query('update product_tbl set p_disc = Null  where p_id in (?)',[item],callback);
    }
}

module.exports = multiple;