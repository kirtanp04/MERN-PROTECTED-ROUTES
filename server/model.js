const mongoose= require("mongoose")


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    pass:{
        type:String,
        require:true
    },
    token:{
        type:String,
        require:true
    }
})



const otpSchema = new mongoose.Schema({
    token:{
        type: String,
        require:true
    },
    userID:{
        type:String,
        require:true
    },
    otp:{
        type:Number,
        required:true
    }
})

const Model = mongoose.model("sample",userSchema)
const Otp = mongoose.model("otp",otpSchema)


module.exports = {Model, Otp}