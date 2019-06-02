

const express = require("express");
const path = require("path");

let  app = express();

app.listen(6844);

app.use("/student",require("../routers/student"));

app.get("/student",(req,res)=>{
    res.send("tong xue lu")
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../view/index.html"))
})
app.get("/main",(req,res)=>{
    res.send ("zhazha")
})
app.get("/favicon.ico",(req,res)=>{
    res.sendFile(path.join(__dirname,"../images/02.jpg"))
})
app.use(express.static(path.join(__dirname,"../public")))