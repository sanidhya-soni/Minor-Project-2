const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require("cors");
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.post('/send-email', (req, res) => {
  
  console.log("jkjkjkkjkjkjkjkbkjbkbkb")
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'abhay14kapatia@outlook.com',
      pass: 'radhe8krishna*',
    },
  });

  const mailOptions = {
    from: 'abhay14kapatia@outlook.com',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(5003, () => {
  console.log('Server started on port 5003');
});