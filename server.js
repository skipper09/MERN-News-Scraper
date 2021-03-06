var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();
var router = express.Router();

// require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

// app.engine("handlebars", expressHandlebars({
//     defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

var db = process.env.MONGODBURI || "mongodb://localhost/nytreact";

mongoose.connect(db, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection is successful");
    }
});

app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});