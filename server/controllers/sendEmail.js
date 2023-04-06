const {Model,Otp} = require("../model")
const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken")

const sendEmail = async(req,res)=>{
    const {email} = req.body 

    try{
        const check = await Model.findOne({email:email})
        if(!check){return res.send({mess:"no account found"})}

        const num = Math.floor(Math.random() * 9000 + 1000);
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{ 
                user:process.env.USER,
                pass:process.env.PASS
            } 
        });
        const mailOptions = {
            from : process.env.USER,
            to : email,
            subject : "Password recovery",
            html : `<h1> your code is </h1> ` + num
        }
        transporter.sendMail(mailOptions, async(err,info)=>{
            if(err){
                console.log(err).status(404)
            }else{
                const token = jwt.sign({num},process.env.JWT,{
                    expiresIn:"5min"
                })
                const userData = {
                    token:token,
                    userID:check._id,
                    otp:num
                }
                await Otp.create(userData)
                
                res.status(200).send({mess:"sent",token})
            }
        })
        setTimeout(async()=>{
            await Otp.findOneAndDelete({otp:num})
        },2*60*1000)

    }catch(e){
        res.status(401).send({mess:"error in sending otp"})
    }

}

module.exports = sendEmail