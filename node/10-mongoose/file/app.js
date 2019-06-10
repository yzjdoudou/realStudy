
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/text",{useNewUrlParser:true})
    .then(()=>{console.log("数据库连接成功")})
    .catch((err)=>{"数据库连接失败"});

let Schema = mongoose.Schema;
let stuInfoSchema = new Schema({
    name:{type:String,required:true},
    age:{type:Number},
    status:{type:String,required: false,default:"真是个好孩子"},
    hobby:{type:String,required:true},
    array:{type:Array,required:false,default: [1,2,3,6,3,7]}
},{versionKey:false})

let stuInfo = mongoose.model("stuInfo",stuInfoSchema)

/*stuInfo.create({
    name:"yang",
    age:15,
    status:"不喜欢你",
    hobby:"足球",
    array:[1,2,3,6,3,7]
},
    {
        name:"li",
        age:22,
        status:"不喜欢你",
        hobby:"足球",
        array:[1,2,3,6,3,7]
    },{
        name:"wu",
        age:33,
        status:"不喜欢你",
        hobby:"足球",
        array:[1,2,3,6,3,7]
    },{
        name:"he",
        age:44,
        status:"不喜欢你",
        hobby:"足球",
        array:[1,2,3,6,3,7]
    })*/
// stuInfo.deleteOne({name:"yang"}).then(i=>{})
/*
stuInfo
    .find({age: {$in:[44,33]}})
    .then((data)=>{
        console.log(data);})
    .catch((err)=>{
        console.log(err);})*/
/*stuInfo
    .find({name:{$exists:true}})
    .then((data)=>{
        console.log(data);})
    .catch((err)=>{
        console.log(err);})*/
/*stuInfo
    .find({array:{$size:6}})
    .then((data)=>{
        console.log(data);})
    .catch((err)=>{
    console.log(err);})*/
/*
stuInfo
    .find({array:{$all:[1,3]}})
    .then((data)=>{
        console.log(data);})
    .catch((err)=>{
        console.log(err);})
*/
/*
stuInfo
    .find({$where:"this.age===33"})
    .then((data)=>{
        console.log(data);})
*/
/*
stuInfo
    .find({name:/w/})
    .then((data)=>{
        console.log(data);})
*/
/*
stuInfo
    .find({name:"yang"},{name:1,age:1,_id:0},{skip:1,limit:4,sort:{age:1}})
    .then((data)=>{
        console.log(data);})
    .catch((err)=>{
        console.log(err);})*/
/*stuInfo
    .updateMany({age:{$gt:20}},{$set:{status: "我不想长大"}},{name:1,_id:0,age:1,status:1},)
    .then((data)=>{
        console.log(data);})*/
stuInfo
   // .updateMany({age:{$lt:30}},{$inc:{age:1}})
   // .updateMany({age:{$lt:30}},{$unset:{hobby:0}})
  // .updateMany({age:{$lt:30}},{$set:{hobby:1}})
    .updateMany({age:{$lt:30}},{$push:{array:333}})
    .then((data)=>{
    console.log(data);})