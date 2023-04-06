const { Model } = require("../model")



const userName = async(req,res)=>{
    const{id} = req.body
    console.log(id)
    try{
        const data = await Model.findById({_id:id})
        res.status(201).send({name:data.name,email:data.email})

    }catch(e){
        res.status(401).send({mess:"error to fetch user"})
    }
}
module.exports = userName