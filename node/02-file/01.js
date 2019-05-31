
const  path = require("path");

const  fs = require("fs");

let filePath = path.join(__dirname,"../01-requre/02.txt");
//console.log(fs);
//读文件
/*fs.readFile(filePath,"utf8",(err,data)=>{
    if(err)throw err;
    console.log(data.toString());//异步执行
})*/
/*let data =fs.readFileSync(filePath,"utf8");//同步执行
console.log(data);*/
//写文件
/*fs.writeFile(filePath,"woaini",{
    encoding:"utf8",flag:"a"//flag 表示写入的方式，a表示添加
},(err)=>{if(err)throw err;})
//fs.appendFile()*/
//删除文件
/*fs.unlink(filePath,(err)=>{
    if(err)throw err;
})*/
//读取目录信息
/*let fp =path.join(__dirname,"../01-requre");
fs.readdir(fp,(err,info)=>{
    if(err)throw err;
    console.log(info);
})*/
//重命名
/*let fp =path.join(__dirname,"../01-requre/01.txt");
let nfp = path.join(__dirname,"../01-requre/02.txt");
fs.rename(fp,nfp,(err)=>{if(err)throw err;} )*/
//删除文件
/*let fp = path.join(__dirname,"../01-requre/hh");
fs.rmdir(fp,(err)=>{if(err)throw err;})*/
//文件状态stats




