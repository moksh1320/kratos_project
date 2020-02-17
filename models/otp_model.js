var db = require("../dbconnection");

var otp = {
  addOtp(otp, otp_exp, item, callback) {
    console.log(item.c_email);
    return db.query(
      "update client_tbl set otp_exp=?,otp=? where c_email=?",
      [otp_exp, otp, item.c_email],
      callback
    );
  },
  getOtp(item, callback) {
    return db.query(
      "select otp,otp_exp from client_tbl where c_email=?",
      [item.c_email],
      callback
    );
  }
};

module.exports = otp;
