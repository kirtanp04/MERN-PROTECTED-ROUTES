const mongoose = require("mongoose")


const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.URL)
        .then(()=>{
            console.log("database is connecte");
        })
    }catch(e){
        console.log(e)
    }
}

module.exports = connectDB