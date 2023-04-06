const { Model } = require("../model")
const bcrypt = require("bcrypt")

const resetPass = async(req,res)=>{
    const {id,name,email,pass} = req.body
    
    try{
        
        const hashPass = await bcrypt.hash(pass,10)
        
         await Model.findByIdAndUpdate({_id:id},{
            $set:{
                name:name,
                email:email,
                pass:hashPass
            }
         })
         res.status(201).send({mess:"update success"})
        

    }catch(e){
        res.status(401).send({mess:"error in reset pass"})
    }
}

module.exports = resetPass