import nodemailer from "nodemailer"
const transporter=nodemailer.createTransport({
    // service:"gmail",
     host: "smtp.gmail.com",
  port: 465,
  secure: true,
    auth:{
        user:process.env.USER,
        pass:process.env.PASS

    },
});
transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("SMTP Server Ready");
  }
});
export default transporter;
