/*

const fs = require("fs");
const path = require("path");

function deleteD(fp) {
    let state = fs.statSync(fp);
    if(state.isDirectory()){
        let list = fs.readdirSync(fp);
        if(list.length){
            list.forEach(v=>{
                v=path.join(fp.v)
                deleteD(v);
            })
        }
        fs.rmdirSync(fp)
    }
    if(state.isFile()){
        fs.unlinkSync(fp)
    }
}
module.exports = deleteD;*/
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
