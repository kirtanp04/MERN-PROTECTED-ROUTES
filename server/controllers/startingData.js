

const startingData = (req,res)=>{
    try{
        res.status(201).send(req.user)

    }catch(e){
        res.status(401).send({mess:"err in starting data"})
    }
}

module.exports= startingData