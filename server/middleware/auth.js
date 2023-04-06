const jwt = require("jsonwebtoken")
const { Model } = require("../model")


const verifyUser = async(req,res,next)=>{
    try{
        const token = req.cookies.jwt
       const verifyToken = jwt.verify(token,process.env.JWT)
       const user = await Model.findById({_id:verifyToken._id})
       
       req.user = user
       next()
    }catch(e){
        res.status(401).send({mess:"err in middleware"})
    }
}

module.exports = verifyUser