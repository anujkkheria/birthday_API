const mongoose = require('mongoose')

const dotenv = require('dotenv').config()

const Password =  process.env.DB_PASS

const DB= process.env.DB_URI.replace('<password>', Password) 
 
try{
    mongoose.connect(DB, { useNewUrlParser:true }).then(()=>console.log("DB connection Successful "))
}
catch(e){
    console.log(e)
}




module.exports = DB