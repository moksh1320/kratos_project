var db = require("../dbconnection");
var email = require("emailjs/email");

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
  },
  changePassword(item, callback) {
    return db.query(
      "update client_tbl set c_pass=? where c_email=?",
      [item.password, item.c_email],
      callback
    );
  },
  sendOTPMail: function (demo, callback) {
    console.log(demo);
    var server = email.server.connect({
      user: "poojanmehta2017@gmail.com",
      password: "Poojan7041182054",
      host: "smtp.gmail.com",
      ssl: true,
      port: 465,
    });
    console.log(demo.message);

    server.send(
      {
        text: demo.message,
        from: "poojanmehta2017@gmail.com",
        to: demo.receiver,
        subject: 'You have new otp',
      },
      callback
    );
  },
};

module.exports = otp;
