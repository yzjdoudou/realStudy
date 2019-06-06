
const request = require("request");
const {JSDOM} = require("jsdom");
const path = require("path");

request({
    method:"get",
    url:"https://www.cuiweijubook.com/files/article/html/0/41/6115.html",
    headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"}},
(err,res,body)=>{
//    console.log(body);
    let window = new JSDOM(body).window;
    // console.log(window);
    let f = window.document.getElementById("contents").innerHTML;
    console.log(f);
})

