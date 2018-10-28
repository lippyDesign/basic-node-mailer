require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { GMAIL_USER, GMAIL_PASS } = process.env;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// POST route from contact form
app.post('/contact', function (req, res) {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS
        }
    });
    mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: GMAIL_USER,
        subject: 'New message from contact form',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
        if (error !== null) {
            console.log(error);
            res.send('Failed to send message');
        } else {
            console.log(response)
            res.redirect('/');
        }
    });
});

// GET index.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

// set up port the server will listen on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on port', PORT));