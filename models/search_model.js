var db = require("../dbconnection");
var search = {
    searchProduct:function(item,callback){
        console.log(item.searchtext);
        db.query('select * from product_tbl where p_name like ?',['%'+item.searchtext+'%'],callback);
    }
};
module.exports = search;
