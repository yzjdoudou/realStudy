
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/happy",{useNewUrlParser:true})
    .then((i)=>{console.log("数据库连接成功")})
    .catch((err)=>{console.log("数据库连接失败")});

const Schema = mongoose.Schema;
let stuSchema= new Schema({
    name:{type:String,required:true},
    age:{type:Number,required: true},
    sex:{type:String},
    status:{type:String,required:false,default:"zhen hao"}
},
    {versionKey:false}
);

let stu = mongoose.model("stu",stuSchema)

stu.create({
    name:"yang",
    age:"12"
})
stu
    .find({name:"yang"})
    .then((i)=>{console.log(i)})
    .catch((err)=>{console.log(err)})