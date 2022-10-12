const express = require ('express')
const { connectDB } = require ('./config/conectDB')
const mongoose = require ('mongoose')
require('dotenv').config()
const UserRouter = require ('./Routes/UserRouter')
const DemandeRouter = require('./Routes/DemandesRouter')
const path = require('path')


const app = express()
app.use (express.json ())
app.use('/api/users',UserRouter )
app.use('/api/demandes',DemandeRouter)

//set up for deployment 
app.use(express.static(path.join (__dirname,'../','user','build')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','user','build','index.html'))
})





mongoose.connect (process.env.MONGOo_URI ,err =>err? console.log(err): console.log('the DB is connected'))



const PORT = process.env .PORT

app.listen ( PORT, err =>err? console.log(err) :console.log(`the server is runnig on  ${PORT}`))