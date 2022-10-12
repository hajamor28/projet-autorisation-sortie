const mongoose = require ('mongoose')


const PostSchema = new mongoose.Schema({
    title:String,
    Des: String,
    owner:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
    

})
module.exports=mongoose.model('posts',PostSchema)