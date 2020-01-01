var db=require('../dbconnection');
var product={
    addProduct:function(item,callback){
        return db.query('insert into product_tbl (p_name,p_price,p_dis,p_stock,p_qty) values (?,?,?,?,?)',[item.p_name,item.p_price,item.p_dis,item.p_stock,item.p_qty]);
    }
}

module.exports=product;