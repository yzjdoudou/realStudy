
//接受与处理http请求
const  express = require("express");


let app = express();

//监听端口
app.listen(5684)

//监听请求。给对应客户端返回数据 request response
app.get("/",(req,res)=>{
    //返回信息
    res.send("woaini")
})