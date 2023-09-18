//1. import node mailer
const nodemailer = require("nodemailer");

//2. configure email and send
async function sendMail() {
  //1. create an email transporter
  //SMTP (simple mail transfer protocol)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ad665014@gmail.com",
      pass: "rqks rilb lvne kiqj",
    },
  });
  //configure email content
  const mailOptions = {
    from: "ad665014@gmail.com",
    to: "barlaravi10@gmail.com",
    subject: "welcome to node js app",
    text: "this is an email using node js emailer  ",
  };
  //send this mail
  try {
    const rsult = await transporter.sendMail(mailOptions);
    console.log("email sent successfully");
  } catch (err) {
    console.log("email send failed with error : ", err);
  }
}
sendMail();
