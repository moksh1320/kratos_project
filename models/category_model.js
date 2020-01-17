var db=require('../dbconnection');
var category={
    getCategory(callback){
        return db.query('select * from category_tbl',callback);
    },
    addCategory(item,ct_id,callback){
        return db.query('insert into subcategory_tbl (sct_name,fk_ct_id) VALUES (?,?)',[item.sct_name,ct_id],callback);
    },
    getSubcategory(callback){
        return db.query('select * from subcategory_tbl');
    }
}

module.exports = category;