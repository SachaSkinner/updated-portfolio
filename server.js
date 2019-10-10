var express = require("express");
// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Images, all static files
app.use(express.static("public"));
// Routes
require("./routes/html-routes")(app);
// Starting the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
