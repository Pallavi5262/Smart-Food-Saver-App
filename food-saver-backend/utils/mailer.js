// utils/mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use Outlook, Yahoo, etc.
  auth: {
    user: process.env.MAIL_USER,   // your project email
    pass: process.env.MAIL_PASS,   // app password (not your normal password!)
  },
});

async function sendAppreciationMail(to, donorName, foodType, quantity) {
  try {
    await transporter.sendMail({
      from: `"Smart Food Saver" <${process.env.MAIL_USER}>`,
      to,
      subject: "🙏 Thank You for Your Donation!",
      text: `Dear ${donorName},\n\nThank you for donating ${quantity} of ${foodType}. Your generosity will help those in need.\n\nWe deeply appreciate your contribution.\n\n- Smart Food Saver Team`,
    });
    console.log("Appreciation mail sent to:", to);
  } catch (err) {
    console.error("Mail sending failed:", err);
  }
}

module.exports = { sendAppreciationMail };
