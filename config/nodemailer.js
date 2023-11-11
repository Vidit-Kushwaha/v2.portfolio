const nodemailer = require("nodemailer");

const mail = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: mail,
    pass: pass,
  },
});

export const mailOptions = {
  from: mail,
  to: mail,
};
