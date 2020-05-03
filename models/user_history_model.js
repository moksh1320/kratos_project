var db=require('../dbconnection');
var user={
    getAllOrders:function(item,callback){
        return db.query('select * from order_tbl where fk_c_id=?',[item.fk_c_id],callback);        
    },
    getOrderDetails:function(fk_order_id,callback){
        return db.query('select ot.*,od.* from order_tbl ot,order_detail od where ot.order_id=? AND od.fk_order_id=?',[fk_order_id,fk_order_id],callback);
    },
    getAllService:function(item,callback){
        return db.query('select * from service_purchase_tbl where fk_c_id=?',[item.fk_c_id],callback);
    }
}

module.exports = user;