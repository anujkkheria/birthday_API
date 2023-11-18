const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const DB = require('./DB')
const authRouter = require('./Routes/auth')
const friendsRouter = require('./Routes/friends')

const app  = express()
app.use(express.json())
dotenv.config()
app.use(cors())

app.get("/",(req,res)=>{
    console.log("got it man")
    res.status(200).json({
        status:"success",
        message:"your api is working"
    }
    )
})

app.use('/auth',authRouter)

app.use("/friends",friendsRouter)


const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`listenning on port ${port}`)
})