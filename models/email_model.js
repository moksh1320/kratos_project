var email = require("emailjs/email");
var demo = {

   sendMail: function (demo, callback) {
        console.log(demo);
      var server = email.server.connect({
         user: 'moksh111320@gmail.com',
         password: '123moksh02',
         host: "smtp.gmail.com",
         ssl: true,
         port: 465   
      });
      console.log(demo.message);

      server.send({
         text: demo.message,
         from: 'moksh111320@gmail.com',
         to: demo.receiver,
         subject: 'demo'
      }, callback);
   }
  }

module.exports = demo;
