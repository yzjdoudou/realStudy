
const express = require("express");
const path = require("path");
const app = express();

app.listen(5632);
app.get("/favicon.ico",(req,res)=>{
    res.sendFile(path.join(__dirname,"images/02.jpg"))
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/index.html"))
})
app.use(express.static(path.join(__dirname,"public")))
/*app.get("/list",(req,res)=>{
    res.send(`该用户名为：${req.query.user}，密码为：${req.query.pwd}`)
    })*/
app.use(express.urlencoded({extended:true}));
/*app.post("/list",(req,res)=>{
    res.send(`该用户名为：${req.body.user}，密码为：${req.body.pwd}`)
 })*/
/*app.all("/list",(req,res)=>{
    let data ={...req.query,...req.body};
    res.send(`该用户名为：${data.user}，密码为：${data.pwd}`)
    })*/
app.use("/:name",(req,res)=>{
    res.send(`该用户名为：${req.params.name.user}，密码为：${req.params.name.pwd}`)
    })