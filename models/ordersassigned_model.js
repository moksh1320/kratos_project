var db = require("../dbconnection");
var order = {
    getAllOrders:function(callback){
        return db.query("select ot.*,dd_id from order_tbl ot,delivery_detail_tbl ddt  where ot.order_id = ddt.fk_order_id AND ddt.status = 'pending'",callback);
    },
    updateStatus:function(dd_id,callback){
        return db.query("update delivery_detail_tbl set status = 'complete' where dd_id=?",[dd_id],callback)
    }
}

module.exports = order;