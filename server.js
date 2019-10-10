require("dotenv").config();
var express = require("express");
// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;
// email info
var sendEmail = require('./mail.js');
//Images, all static files
app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
// Routes
require("./routes/html-routes")(app);
// Starting the server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
// EMAIL
app.post('/sendEmail', function (req, res) {
    sendEmail(req.body.data.name, req.body.data.email);
    res.status(200).end();
});
