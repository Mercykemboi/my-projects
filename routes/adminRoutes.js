var  express = require("express"),
    router     = express.Router();
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.json();//passes the text as json
var formencoded=bodyParser.urlencoded({extended : true})//passes the text as urlencoded
const Task=require('../models/task');
//const {add}=require('../services/queries');


/*router.get("/", function(request, response) {
    console.log
   response.render("index");
});*/
router.post("/addTask",urlencodedParser ,formencoded, function(request, response) {
    var data1={}
    var data2=""
    var data3=5
    var data4=[]
    var data={
    taskName    : request.body.taskName,
    taskLocation:  request.body.taskLocation,
    taskTime: request.body.taskTime,
    }

        Task.create(data,function(error,task
        ){

            if(error){
                console.log(error)
                
            }
            else{
                console.log(task)
                response.send(task)
            }
        
 })
})
router.get("/gettask",function(request,response){
    Task.findOne({},function(error,task){
        if(error){
            console.log(error)
        }
        else{
            console.log(task)
            response.send(task)
        }
    })

    
})
router.get("/gettaskbyId",function(request,response){
    var id=request.query.id
    Task.findOne({ _id:id},function(error,task){
        if(error){
            console.log(error)
        }
        else{
            console.log(task)
            response.send(task)
        }
    })

    
})
router.put("/updatetaskbyId",function(request,response){
    var id=request.body.id
       Task.findOne({ _id:id},function(error,task){
        if(error){
            console.log(error)
        }
        else{
            task.taskName="dancing"
            task.save()
            console.log(task)
            response.send(task)
        }
    })
    
})
router.delete("/deletetaskbyId",function(request,response){
    var id=request.body.id
       Task.deleteOne({ _id:id},function(error,task){
        if(error){
            console.log(error)
        }
        else{
    
            console.log(task)
            response.send(task)
        }
    })
})


module.exports = router;