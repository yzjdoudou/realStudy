

const fs = require("fs");
const  path = require("path");


function delDre(fp) {
    let states = fs.statSync(fp);
    if(states.isDirectory()){
        let list = fs.readdirSync(fp);
        if(list.length){
            list.forEach(p=>{
                p = path.join(fp,p);
                delDre(p);
            })
        }
        fs.rmdirSync(fp)
    }
    if(states.isFile()){
        fs.unlinkSync(fp);
    }
}
module.exports=delDre;