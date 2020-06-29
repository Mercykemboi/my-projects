var mongoose=require('mongoose');
var taskSchema = new mongoose.Schema({
    taskName    : String,
    taskLocation: String,
    taskTime:String,
    tasks:[],
    createdAt   : {
      type      : Date,
      default   : Date.now()
    },
    updatedAt   :  {
      type      : Date,
      default   : Date.now()
    },
  });
  module.exports = mongoose.model('task', taskSchema);
  