var db = require("../dbconnection");
var email = require("emailjs/email");

var client = {
  getAllclient: function (callback) {
    return db.query("select * from client_tbl", callback);
  },
  deleteclient: function (c_id, callback) {
    return db.query("delete from client_tbl where c_id=?", [c_id], callback);
  },
  editclient: function (c_id, callback) {
    return db.query("select * from client_tbl where c_id=?", [c_id], callback);
  },
  updateclient: function (item, c_id, callback) {
    console.log(item);
    return db.query(
      "update client_tbl set c_name=?,c_email=?,c_con=?,c_dob=? WHERE c_id=?",
      [item.c_name, item.c_email, item.c_con, item.c_dob, c_id],
      callback
    );
  },
  getlogin: function (item, callback) {
    //console.log(item);
    return db.query(
      "select * from client_tbl where c_email=? and c_pass=?",
      [item.c_email, item.c_pass],
      callback
    );
  },
  addClient(item, callback) {
    console.log(item);
    return db.query(
      "insert into client_tbl (c_email,c_name,c_pass,c_con,c_dob) values (?,?,?,?,?)",
      [item.c_email, item.c_name, item.c_pass, item.c_con, item.c_dob],
      callback
    );
  },
  sendMail: function (demo, callback) {
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
        subject: demo.subject,
      },
      callback
    );
  },
};
module.exports = client;
