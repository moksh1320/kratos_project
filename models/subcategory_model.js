var db=require('../dbconnection');

var subcategory={
    getSubcategory:function(callback){
        return db.query('select * from subcategory_tbl',callback);
    }
}

module.exports = subcategory;