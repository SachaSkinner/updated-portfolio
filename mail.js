const nodemailer = require('nodemailer');
require("dotenv").config(); 

let sendEmail = function (name, email) {
    console.log(name, email)
    ///step 1 - we create a transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // our email and password are stored in .env
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    // step 2 - mail template
    let mailText = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Thank you!',
        text: "Thank you for your feedback!",
        html: '<body style="color: purple; background-color: yellow;padding: 30px;text-align: center"> <h1> Hello, ' + name + '! &#128525;</h1><br><h2>Thank you very much for your feedback!</h2> <h2>Soon I will read your message and answer asap if needed!</h2><img src="cid:sasha.jpg"><h2>Have a lovely day!</h2><h3>Sincerely, Sasha Skinner.<br><br>Web development.<br> From Chi with <span style="font-size:200%;color:green;">&hearts;</span></h3></body>',
        // added a picture inside of html file
        attachments: [{
            filename: 'sasha.jpg',
            path: './sasha.jpg',
            cid: 'sasha.jpg' //same cid value as in the html img src
        }]
    }
    // step 3 - to handle errors
    transporter.sendMail(mailText, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("It was sent");
        }
    });
};
// ps: you also need to turn on less security app in gmail, I turned it on for our account

module.exports = sendEmail;