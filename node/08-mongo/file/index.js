
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose
    .connect("mongodb://localhost:27017/student",{useNewUrlParser:true})
    .then(()=>{console.log("数据库连接成功")})
    .catch(()=>{console.log("数据库连接失败")});

const studengtSchema =new Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    sex:{type:String},
    status:{type:String,required:false,default:"真是个好孩子"}
})

const student = mongoose.model("student",studengtSchema);
const info = mongoose.model("info",studengtSchema);
/*student.create({
    name:"yang",
    age:"10",
    sex:"nan"
})
info.create({
    name:"yang",
    age:"10",
    sex:"nan"
})*/
/*
student
    .deleteOne({name:"yang"})
    .then((i)=>{
        console.log(i)
    })
    .catch((err)=>{console.log(err)})
*/
info
    .deleteMany({name:"yang"})
    .then((i)=>{
        console.log(i)
    })
    .catch((err)=>{console.log(err)})