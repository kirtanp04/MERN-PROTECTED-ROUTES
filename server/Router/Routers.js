const express = require("express")
const Signup = require("../controllers/signup")
const Login = require("../controllers/Login")
const sendEmail = require("../controllers/sendEmail")
const otpVerify = require("../controllers/otpVerify")
const userName = require("../controllers/Username")
const resetPass = require("../controllers/resetPass")
const totalDocument = require("../controllers/Totaldocument")
const verifyUser = require("../middleware/auth")
const accountDetail = require("../controllers/accountUpdate")
const ChangeDetails = require("../controllers/changeAccountDetails")
const startingData = require("../controllers/startingData")
const Logout = require("../controllers/Logout")
const checkUser = require("../controllers/checkUser")

const router = express.Router()


router.post("/register",Signup)
router.post("/login",Login)
router.post("/forgetpass",sendEmail)
router.post("/otpverification",otpVerify)
router.post("/getusername",userName)

router.post("/resetpassword",resetPass)
router.get("/logout",Logout)

// middleware includedchange
router.get("/totaldocument",verifyUser,totalDocument)
router.get("/updateaccount",verifyUser,accountDetail)
router.post("/changeaccount",verifyUser,ChangeDetails)
router.get("/startingdata",verifyUser,startingData)
router.get("/checkuser",verifyUser,checkUser)




module.exports = router