var db = require("../dbconnection");
var order = {
    getAllOrders:function(callback){
        return db.query('select ot.* from order_tbl ot,delivery_detail_tbl ddt where ddt.dd_id = ot.fk_dd_id AND ddt.fk_db_id IS NULL',callback);
    },
    assignOrder:function(item,callback){
        return db.query('update table delivery_detail_tbl set fk_db_id =? where dd_id=?',[item.db_id,item.dd_id],callback);
    }
}

module.exports = order;