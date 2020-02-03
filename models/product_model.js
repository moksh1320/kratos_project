var db=require('../dbconnection');
var product={
    addProduct:function(item,filename,callback){
        return db.query('insert into product_tbl (p_name,p_price,p_dis,p_stock,p_qty,p_unit,p_ben,p_usage,p_img,fk_sct_id) values (?,?,?,?,?,?,?,?,?,?)',[item.p_name,item.p_price,item.p_dis,item.p_stock,item.p_qty,item.p_unit,item.p_ben,item.p_usage,filename,item.fk_sct_id],callback);
    },
    getAllProduct:function(callback){
        return db.query('select * from product_tbl',callback);
    },
    getProductById:function(p_id,callback){
        return db.query('select * from product_tbl where p_id=?',[p_id],callback);
    },
    updateProduct:function(item,callback){
        return db.query('update product_tbl set p_name=?,p_price=?,p_qty=?,p_stock=?,p_dis=?,p_unit=?,p_usage=?,fk_sct_id=? where p_id=?',[item.p_name,item.p_price,item.p_qty,item.p_stock,item.p_dis,item.p_unit,item.p_usage,item.fk_sct_id,item.p_id],callback);
    },
    deleteProduct:function(p_id,callback){
        return db.query('delete from product_tbl where p_id=?',[p_id],callback);
    },
    updateImage:function(p_id,filename,callback){
        if(filename != null) {
            return db.query('update product_tbl set p_img=? where p_id=?',[filename,p_id],callback);
        }
    }
}

module.exports=product;
