const express = require("express");
const tokenObj = require("./token")
const middelware = require("./middleware")

const module2 = express.Router()
module2.get("/", [middelware], (req, res) => {
    res.json({ "meassage": "Welcome to module 2 ............." })
    // const reqHeaders = req.headers;
    // console.log("module1", tokenObj.token);
    // if (reqHeaders.token == tokenObj.token) {
    //     res.json({ "meassage": "Welcome to module 1" })
    // } else {
    //     res.json({ "meassage": "unauthorized user..." })
    // }
})
module.exports = module2;