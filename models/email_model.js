var email = require("emailjs/email");
var demo = {

   sendMail: function (demo, callback) {
        console.log(demo);
      var server = email.server.connect({
         user: 'poojanmehta2017@gmail.com',
         password: 'Poojan7041182054',
         host: "smtp.gmail.com",
         ssl: true,
         port: 465
      });
      console.log(demo.message);

      server.send({
         text: demo.message,
         from: 'poojanmehta2017@gmail.com',
         to: demo.receiver,
         subject: demo.subject
      }, callback);
   }


}
module.exports = demo;
