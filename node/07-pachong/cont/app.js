
const request = require("request");
const path = require("path");
const fs = require("fs");

let str ="苍井空"
let keyW = encodeURI(str)
fs.mkdirSync(path.join(__dirname,str))
    request({
        method:"get",
        url:"https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord="+keyW+"&cl=&lm=&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word="+keyW+"&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&fr=&expermode=&force=&cg=star&pn=90&rn=60",
        headers:{
            "User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
        }
    },(err,res,body)=>{
        //等到JSON是个字符串  转化为对象
        let data = JSON.parse(body).data;
        data.pop();
        //console.log(data);
        data.forEach((v,i)=>{
                request(v.thumbURL).pipe(fs.createWriteStream(path.join(__dirname,`${str}/${i}.jpg`)));
            })
    })

/*
 https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E5%BC%A0%E6%9F%8F%E8%8A%9D&cl=&lm=&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=%E5%BC%A0%E6%9F%8F%E8%8A%9D&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&fr=&expermode=&force=&cg=star&pn=60&rn=30&gsm=3c&1559696542499=
     https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E5%BC%A0%E6%9F%8F%E8%8A%9D&cl=&lm=&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=%E5%BC%A0%E6%9F%8F%E8%8A%9D&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&fr=&expermode=&force=&cg=star&pn=90&rn=30&gsm=5a&1559696604632=

     */

