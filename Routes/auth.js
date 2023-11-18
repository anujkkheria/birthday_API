const express = require('express')
const router =  express.Router()
const controller =require('../controllers/auth')

router.route("/").get(
    (req,res)=>{
    res.status(200).json({message:"req recevied on auth"})
    console.log("you reached the route")
}
);
router.route("/Signup").post(controller.Signup)

router.route("/Login").post(controller.Login)

module.exports = router