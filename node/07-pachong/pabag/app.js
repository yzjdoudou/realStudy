const request = require("request");
const path = require("path");
const fs = require("fs");
function downLoadImg(keyW,first,second,keyWords){
    request({
        method:"get",
        url:"https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord="+keyW+"&cl=&lm=&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word="+keyW+"&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&fr=&expermode=&force=&cg=star&pn="+first+"&rn="+second+"",
        headers:{
            "User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
        }
    },(err,res,body)=>{
        //等到JSON是个字符串  转化为对象
        let data = JSON.parse(body).data;
        data.pop();
        //console.log(data);
        let date = new Date().getTime();
            date = date.toString(32);
        data.forEach((v,i)=>{
            request(v.thumbURL).pipe(fs.createWriteStream(path.join(__dirname,`${keyWords}/${i}${date}.jpg`)));
        })
    })
}
module.exports = function (keyWords,num) {
    let keyW = encodeURI(keyWords)
    fs.mkdirSync(path.join(__dirname,keyWords))
    let first = 0;
    let second =0;
    num = Math.max(0,num);
    num = Math.min(num,199);
    if(num<=30){
        first =0;
        second= num
        downLoadImg(keyW,first,second,keyWords)
    }else{
        for(let i=0;i<=Math.floor(num/30);i++){
            first =30*i;
            second =(i==Math.floor(num/30)?num%30:30);
            downLoadImg(keyW,first,second,keyWords)
        }
    }
}