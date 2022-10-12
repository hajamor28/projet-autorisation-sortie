const User = require ('../Modles/UserModel')
const { validationResult } =require ('express-validator')
var bcrypt = require ('bcryptjs')
const jwt = require ('jsonwebtoken')


const Register = async (req , res) => {
try{
    const errors = validationResult(req)
    if (!errors .isEmpty()){
        return res.status(402).json({errors: errors.mapped()})
    }

    const {name,email ,password} = req.body
// check if user already exists 
    const found = await User.findOne ({email})
    if (found) {
        return res .status(400).json({message : 'User already exists'})
    }

// hash password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
// creation user     
const newUser = await User.create({name, email,password: hashedPassword})

// Generate Token 
 const token = jwt.sign({id: newUser._id}, process.env.SECRET,{expiresIn: '30d'})
res.status(200).json({newUser,token} )


} catch (error){
    res.status(500).json({ message: error})
}

}

//Login
const login = async (req,res)=>{
    const errors = validationResult(req);
     if (!errors.isEmpty()){
        return res.status(401).json({errors : errors.mapped()})
     }
    const {email,password} = req.body
    // verify user exists 
    const found = await User.findOne({email})
    if (!found) {
        return res.status(402).json({message :'You have to register before'})
    }
    // decrypte password and compare with password user 
    const isMatch = await bcrypt.compare(password, found.password )
     if (!isMatch){
        res.status(401).json({message: 'wrong Password'})
     }
     // regenrate the token 
      const token = await jwt.sign({id:found._id},process.env.SECRET)
      res.json({found,token})

    }




 const GetDataUsers = async (req,res)=>{
    try {
        const users = await User.find({});
        res.status(201).json(users)
    } catch (error) {
        res.status(500).json({message: error})
        
    }
    
 }   

const DeleteUsers= async(req,res)=>{
    try {
        const DeleteUsers = await User.findByIdAndDelete (req.params.id)
        res.json({DeleteUsers, msg: 'the user has been deleted'})
    } catch (error) {
        res.status(500).json({message: error})
        
    }
}






module.exports={Register,login,GetDataUsers,DeleteUsers}