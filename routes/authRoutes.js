var  express = require("express"),
    router     = express.Router();
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.json();//passes the text as json
var formencoded=bodyParser.urlencoded({extended : true})//passes the text as urlencoded


router.get("/", function(request, response) {
    console.log
   response.render("index");
});
router.post("/userSignup",urlencodedParser ,formencoded, function(request, response) {
    var data=request.body.password
    console.log(data)
    response.send(data)
 })
 



module.exports = router;