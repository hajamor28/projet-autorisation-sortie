const mongoose = require ('mongoose')


const ConnectDB = ()=> {
mongoose.connect (process.env.MONGO_URI,err? console.log(err) : console.log('DB is connected'))

}