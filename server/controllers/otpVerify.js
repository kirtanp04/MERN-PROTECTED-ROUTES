const { Otp } = require("../model")


const otpVerify = async(req,res)=>{

    const {token,one,two,three,four} = req.body

    try{
        const check = await Otp.findOne({token:token,otp:one+two+three+four})
        if(check){
            res.status(201).send({mess:"otp matched",id:check.userID})
        }else{
            res.send({mess:"otp not matched"})
        }

    }catch(e){
        res.status(401).send({mess:"error in otp verification"})
    }

}
module.exports = otpVerify