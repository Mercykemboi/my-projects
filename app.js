var bodyParser = require("body-parser"),
    express = require("express"),
    session = require('express-session'),
    app        = express();
    var mongoose=require('mongoose');

var indexRoutes = require("./routes/index");
var authRoutes =require("./routes/authRoutes")
var adminRoutes=require("./routes/adminRoutes");
mongoose.connect('mongodb://localhost/task' , { useNewUrlParser: true });
mongoose.Promise = global.Promise;





app.use(session({
    secret:"Project",
    resave: false,
    saveUninitialized: false
}));
 
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



app.use(indexRoutes);
app.use(authRoutes);
app.use(adminRoutes);

var port = process.env.PORT || 3000; //
app.listen(port);