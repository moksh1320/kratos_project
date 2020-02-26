var db=require('../dbconnection');
var image={

    getAllImage:function(callback){
        return db.query('select * from mul_img_tbl',callback);

    },
    addImage:function(item,filename,callback){
        return db.query('insert into mul_img_tbl (image,fk_s_id) values (?,?)'[filename,item.fk_s_id],callback);

    },
    deleteImage:function(image_id,callback){
        return db.query('delete from mul_img_tbl where img_id=?',[img_id],callback);
    }
}
module.exports=image;