

const accountDetail = async(req,res)=>{
    try{
        res.send(req.user)

    }catch(e){
        res.status(401).send({mess:"error in update acc"})
    }
}


module.exports = accountDetail