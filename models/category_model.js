var db=require('../dbconnection');
var category={
    getCategory(callback){
        return db.query('select * from category_tbl',callback);
    }
}

module.exports = category;