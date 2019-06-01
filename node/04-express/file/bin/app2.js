

const express = require("express");

let  app = express();

app.listen(6844);

app.use("/student",require("../routers/student"));
app.use((req,res,next)=>{
    req.doudou = "doudou";
    next();
})
app.get("/",(req,res,next)=>{
    req.shasha="shasha";
    next()
})
app.get("/",(req,res)=>{
    res.send("woaini"+req.doudou+req.shasha)
})
app.get("/main",(req,res)=>{
    res.send ("zhazha"+req.doudou)
})