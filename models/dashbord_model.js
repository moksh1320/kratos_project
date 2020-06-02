var db = require("../dbconnection");

var dashboard={

     orderBySubCategory:function(callback){
                return db.query("select  odt.*,pt.* from order_detail odt,product_tbl pt where odt.fk_prod_id=pt.p_id",callback) 
    }
}
module.exports=dashboard;