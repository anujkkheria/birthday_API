const mongoose = require('mongoose');
const validator  = require("validator");

const friendSchema = new mongoose.Schema({
    userID:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    }

})

const friend = mongoose.model('friend',friendSchema);

module.exports = friend