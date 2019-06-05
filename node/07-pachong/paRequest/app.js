
const request = require("request");
const path = require("path");
const fs = require("fs");

let str ="泳装"
let keyW = encodeURI(str)
fs.mkdirSync(path.join(__dirname,str))
request({
    method:"get",
    url:"https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word="+keyW+"",
    headers:{
        "User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
    }
},(err,res,body)=>{
    //https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=25967968,3843472718&fm=26&gp=0.jpg
    //https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4004663874,102647833&fm=11&gp=0.jpg
    //https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=446427746,1562230058&fm=26&gp=0.jpg
    let reg =/https:\/\/ss\d+\.bdstatic\.com[\/0-9a-z_=,&]+\.(jpg|png|gif)/ig;
    let info = body.match(reg);
        info=[...new Set(info)];
    info.forEach((v,i)=>{
        request(v).pipe(fs.createWriteStream(path.join(__dirname,`${str}/${i}.jpg`)));
    })

})