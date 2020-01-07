var db=require('../dbconnection');
var product={
    addProduct:function(item,callback){
        console.log(item);
        return db.query('insert into product_tbl (p_name,p_price,p_dis,p_stock,p_qty) values (?,?,?,?,?)',[item.p_name,item.p_price,item.p_dis,item.p_stock,item.p_qty],callback);
    },
    getAllProduct:function(callback){
        return db.query('select * from product_tbl',callback);
    },
    getProductById:function(p_id,callback){
        return db.query('select * from product_tbl where p_id=?',[p_id],callback);
    }
}

module.exports=product;