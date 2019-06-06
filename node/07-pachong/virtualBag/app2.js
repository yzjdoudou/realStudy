
const request = require("request");
const cheerio = require("cheerio");

request({
        method:"get",
        url:"",
        headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"}},
    (err,res,body)=>{
        let $ = cheerio.load(body);
        console.log($("#inner").text());
    });
