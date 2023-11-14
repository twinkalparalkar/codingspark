const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();

sgMail.setApiKey('https://react3-6931f-default-rtdb.firebaseio.com/email.json');

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    const msg = {
      to,
      from: 'twinkalparalkar2@gmail.com',
      subject,
      text,
    };

    await sgMail.send(msg);

    return res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).send('Error sending email.');
  }
});
