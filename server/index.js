const cookieParser = require("cookie-parser")
const express = require("express")
const connectDB = require("./db")

const cors=require("cors")
const router = require("./Router/Routers")
require("dotenv").config()
const app = express()

app.use(cookieParser())
app.use(cors(
    {
        origin:["https://kirtanp04-mern-protected-routes.netlify.app"],
        credentials: true,
        
    }
))
app.use(express.json({limit:"5mb"}))
const PORT = process.env.PORT || 4000

connectDB()

app.use("/",router)




app.listen(PORT,()=>{
    console.log("server is running on " + PORT)
})