const { Model } = require("../model")
const bcrypt = require("bcrypt")

const Signup = async(req,res)=>{
    const{name,email,images,pass,gender} = req.body
    

    try{
        const check = await Model.findOne({email:email})
        if(check){
            res.send({mess:"exist"})
        }else{
            const hashPass = await bcrypt.hash(pass,10)
            const data = {
                name:name,
                email:email,
                image:images,
                gender:gender,
                pass:hashPass
            }
            await Model.create(data)
            res.status(202).send({mess:"Account created"})

        }

    }catch(e){
        res.status(500).send(e)
    }
}

module.exports = Signup