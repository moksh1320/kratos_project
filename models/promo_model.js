var db=require('../dbconnection');

var promo = {
    addPromo:function(item,callback){
        console.log(item.pro_name);
        return db.query('insert into promo (pro_name,pro_disc_rate,pro_disc_flat,pro_min_pur,pro_max_disc,pro_pur_type,pro_exp_date) values(?,?,?,?,?,?,?)',[item.pro_name,item.pro_disc_rate,item.pro_disc_flat,item.pro_min_pur,item.pro_max_disc,item.pro_pur_type,item.pro_exp_date],callback);
    },
    getPromo:function(callback){
        return db.query('select * from promo',callback);
    },
    deletePromo:function(pro_id,callback)
    {
        return db.query('delete from promo where pro_id=?',[pro_id],callback)
    },
    checkPromo:function(item,callback) {
        return db.query('select * from promo where pro_name=?',[item],callback);
    }
}

module.exports=promo;