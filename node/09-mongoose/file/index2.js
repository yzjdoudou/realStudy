
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/xuexi",{useNewUrlParser:true})
    .then(()=>{console.log("数据库连接成功")})
    .catch((err)=>{console.log(err);})

const Schema = mongoose.Schema;
let xuexiSchema = new Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    sex:{type:String},
    status:{type:String,required:false,default:"zhen hao"}
},
{versionKey:false})

const xuexi = mongoose.model("xuexi",xuexiSchema)
/* xuexi.create({
    sex:"nv",
})
   name:"yang",
    age:22,
    sex:"nan",
    status:"zhen huai"
},
    {
        name:"li",
        age:15,

xuexi
    .find({name:"yang"})
    .then(i=>{console.log(i);})
    .catch(err=>{console.log(err);})*/
/*
xuexi
    .find({age:{$gte:20,$lte:60}})
    .then(i=>{
        console.log(i);})
    .catch(err=>{
        console.log(err);})
*/
/*
xuexi
    .find(
        {$or:[
                {age:{$gte:20}},
                {name:"yang"}
            ]
        })
    .then(i=>{
        console.log(i);})
    .catch(err=>{
        console.log(err);})
*/
/*xuexi.where("age").gt(20).lt(30).exec(function (err,data) {
    console.log(data);
})*/
xuexi
    .find({
 //       $where:"this.age===33"
       // $where:"this.name==='yang'||this.age>=22"
 //       $where:"this.name==='yang'&&this.age===22"
        name:/ya|l/,
        age:22
})
    .then(i=>{
        console.log(i);})
    .catch(err=>{
    console.log(err);})
