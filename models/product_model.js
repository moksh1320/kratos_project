var db=require('../dbconnection');
var product={
    addProduct:function(item,filename,callback){
        console.log(item);
        console.log(filename);
        return db.query('insert into product_tbl (p_name,p_price,p_dis,p_stock,p_qty,p_ben,p_img,fk_sct_id) values (?,?,?,?,?,?,?,?)',[item.p_name,item.p_price,item.p_dis,item.p_stock,item.p_qty,item.p_ben,filename,item.fk_sct_id],callback);
    },
    getAllProduct:function(callback){
        return db.query('select * from product_tbl',callback);
    },
    getProductById:function(p_id,callback){
        return db.query('select * from product_tbl where p_id=?',[p_id],callback);
    },
    updateProduct:function(item,callback){
        return db.query('update product_tbl set p_name=?,p_price=?,p_qty=?,p_stock=?,p_dis=? where p_id=?',[item.p_name,item.p_price,item.p_qty,item.p_stock,item.p_dis,item.p_id],callback);
    },
    deleteProduct:function(p_id,callback){
        return db.query('delete from product_tbl where p_id=?',[p_id],callback);
    }
}

module.exports=product;