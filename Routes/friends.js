const express = require('express')
const router = express.Router()
const controller = require('../controllers/friends')
router.route("/").get((req,res)=>{
    console.log("I received the call my friend")
    console.log(req.query)
    res.status(200).json({message:"you have reached /friends"})

})

router.route("/createNew").post(controller.addNew)
router.route("/friend=:friendID")
.delete(controller.Deletefriend)
.put((req,res,next)=>{
    console.log(req.params)
})
router.route("/:userID").get(controller.getall)
module.exports = router