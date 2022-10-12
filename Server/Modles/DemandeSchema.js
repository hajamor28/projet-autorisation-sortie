const mongoose = require ('mongoose')


const DemandetSchema = new mongoose.Schema({
    debutjournée:String,
    Debuthours:String,
    finjournée:String,
    finhours:String,
    Matricule:String,
    msg:String,
    owner:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    status:{type:String,
    enum:['pending', 'Accepted','Refused'],
    default:'pending'
}
    
    

})
module.exports=mongoose.model('Demande',DemandetSchema)