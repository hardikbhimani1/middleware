const express = require("express");
const jwt = require("jwt-simple");
const tokenObj = require("./token")

const loginModule = express.Router();

loginModule.post("/",(req,res)=>{
    const uname = req.body.uname;
    const upwd = req.body.upwd;
    if(uname === "hardik" && upwd === "bhimani"){
        const token = jwt.encode({"uname":uname,"upwd":upwd},"hello@123")
        // res.json({"msg":"login success..."})
        tokenObj.token = token;
        // console.log(tokenObj.token)
        res.json({  "status": true,"responsecode": 1,"message": "User Login Successfully.","data": tokenObj.token,"user_name":uname,"user_pass":"upwd" })
        // console.log(token)
    }
    else{
        res.json({"status": false,"responsecode": 101,"message": "Authentication failed."})
    }
})

module.exports = loginModule