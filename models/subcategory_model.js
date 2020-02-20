var db=require('../dbconnection');

var subcategory={
    getSubcategory:function(callback){
        return db.query('select * from subcategory_tbl',callback);
    },
    addSubategory(item,ct_id,callback){
        return db.query('insert into subcategory_tbl (sct_name,fk_ct_id) VALUES (?,?)',[item.sct_name,ct_id],callback);
    },
    deleteSubcategory(item,callback){
        return db.query('delete from subcategory_tbl where sct_id = ?',[item],callback);
    }
}

module.exports = subcategory;