
const checkUser = async(req,res)=>{
    try{
        res.status(201).send({mess:"success"})
    }catch(e){
        res.status(401).send({mess:"error in new route"})
    }
}

module.exports = checkUser