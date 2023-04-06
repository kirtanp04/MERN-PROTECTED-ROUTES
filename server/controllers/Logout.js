
const Logout = (req,res)=>{
    try{
        res.clearCookie("jwt").send({mess:"success"})

    }catch(e){
        res.status(401).send({mess:"error in logout"})
    }
}

module.exports = Logout