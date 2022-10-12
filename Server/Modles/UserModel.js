const mongoose = require ('mongoose')



const UserSchema = new mongoose.Schema ({

name:{
 type :String,
 required : true  
},
email : {
  type: String,
  required: true
},
password : {
    type : String,
    required : true  
},
Role:{
  type:String,
  enum:['user','admin'],
  default:'user'
}

})

module .exports = mongoose .model ('User', UserSchema)