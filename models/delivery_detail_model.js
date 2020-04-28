var db=require('../dbconnection');

var ddt={
    addDdt: function(item,callback){
        return db.query('insert into delivery_detail_tbl (address,notes,fk_order_id) values (?,?,?)',[item.address,item.notes,item.fk_order_id],callback);
    }

}

module.exports = ddt;