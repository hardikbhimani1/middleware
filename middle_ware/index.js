const express = require("express")

const app = express();
app.use(express.json())

const loginModule = require("./login")
app.use("/login", loginModule);

const Module1 = require("./module1")
app.use("/module1", Module1);

const Module2 = require("./module2")
app.use("/module2", Module2);

const Module3 = require("./module3")
app.use("/module3", Module3);


app.listen(5252, () => {
    console.log("listing port 5252");
})