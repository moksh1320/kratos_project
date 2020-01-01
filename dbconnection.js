var db=require('mysql');
var con=db.createPool({
        host:'localhost',
        user:'root',
        password:'',
        database:'kratos_project'
});
module.exports=con;