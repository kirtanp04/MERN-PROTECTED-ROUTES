const { Model } = require("../model")

const totalDocument = async(req,res)=>{
    try{
        const data = await Model.find()
        .countDocuments()
        const male = await Model.find()
        .or([{gender:"male"}]).countDocuments()
        const female = await Model.find()
        .or([{gender:"female"}]).countDocuments()
        res.status(200).send({mess:"sent",data,male,female})
      
       
    }catch(e){
        
    }

}

module.exports = totalDocument