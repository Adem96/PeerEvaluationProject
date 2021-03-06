var mongoose = require('mongoose')
var Team = require('./team');
var MS = require('./microskills').schema
var team = require('../models/team')
var Project = require('../models/project')
var userSchema = new mongoose.Schema({
  nom : {type : String , trim : true},
  prenom : {type : String},
  password : {type:String , required : true},
  email : {type : String , required : true},
  resetPasswordToken: {type : String,default:null},
  role : {type : String , default : null},
  etat:{type  : Boolean , default : false},
  university:{type  : String , default : null},
  pays:{type  : String , default : null},
  team :{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Team', default:null
  },
  microskills:[MS],
  projet:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Project',default:null
  }],
  image : {type:String,default:"assets/img/faces/user.png"}
})
// var u1 = mongoose.model('User', userSchema);
// u1.create({ nom:'aziz',prenom:'aziz',password:'aziz',email:'aziz'}, function (err, small) {
//   if (err) return handleError(err);
//   // saved!
// });
module.exports = mongoose.model('User',userSchema)
