var bodyParser = require("body-parser"),
    express = require("express"),
    session = require('express-session'),
    app        = express();

var indexRoutes = require("./routes/index");



app.use(session({
    secret:"Project",
    resave: false,
    saveUninitialized: false
}));
 
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



app.use(indexRoutes);

var port = process.env.PORT || 3000; //
app.listen(port);