const { Model } = require("../model")
const bcrypt = require("bcrypt")


const ChangeDetails = async(req,res)=>{
    const {name,email,password,gender,image}= req.body
    try{
        const data = req.user
        const hashPass = await bcrypt.hash(password,10)
        await Model.findByIdAndUpdate({_id:data._id},{
            $set: {
                name:name,
                email:email,
                image:image === "" ? data.image : image,
                gender:gender,
                pass:password === "" ? data.pass : hashPass
            }
        })
        res.status(202).send({mess:"updated"})
    
        

    }catch(e){
        res.status(401).send({mess:"error in change accouny"})
    }
}


module.exports = ChangeDetails