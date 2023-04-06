const { Model } = require("../model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const Login = async(req,res)=>{
    const {email,pass} = req.body

    try{
        const check = await Model.findOne({email:email})
        
        if(!check){
            return res.send({mess:"Account not found"})
        }
        const password = await bcrypt.compare(pass,check.pass)
        if(!password){
            return res.send({mess:"wrong Pass"})
        }
        const token = jwt.sign({_id:check._id},process.env.JWT,{
            expiresIn:"2h"
        })
        res.cookie("jwt",token,{
            expire: 1800000 + Date.now(),
            httpOnly:true,
        })

        res.status(201).send({mess:"sucesss"})

    }catch(e){
        res.status(401).send(e)
    }

}

module.exports = Login