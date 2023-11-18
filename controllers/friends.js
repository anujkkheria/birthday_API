const friend = require('../Schema/friendSchema')

exports.addNew = async(req,res,next)=>{
    try{
        console.log({...req.body})
        const newFriend = await friend.create({...req.body})
        res.status(201).json({status:"created",data:{
            ...newFriend
        }})
    }
    catch(e){
        console.log(e)
        res.status(400).json({status:"failed"})
    }
}

exports.getall = async(req,res,next)=>{
    try{
const userID = req.params.userID
const friends = await friend.find({userID:userID})
res.status(200).json({data:[
    ...friends
]})
    }
    catch(e){
console.log(e)
    }
}
exports.editAnEntry = async(req,res,next)=>{
try{
    const fId = req.params.friendID
    const update = {...req.body}
    const item = await friend.findOneAndUpdate({_id:fId},{...update},null,function(err,doc){
        console.log(doc)
        if(err){
            console.log(err)
        }
        else{

            res.status(200).json({
                message : "updated",
                newValue:{
                    ...doc
                }
                
            }
            )
        }
    })
    console.log(item)
}
catch(e){
    console.log(e)
}
}
exports.Deletefriend = async (req,res,next)=>{
    const fID = req.params.friendID
    console.log(fID)

}