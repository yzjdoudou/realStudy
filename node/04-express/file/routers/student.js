
const express= require("express");
const path = require("path");
let router = express.Router();

router.use("/yang",require(path.join(__dirname,"/info"))
);
router.get("/li",(req,res)=>{
    res.send("this is mr li")
});
router.get("/he",(req,res)=>{
    res.send("this is mr he")
});
router.get("/wu",(req,res)=>{
    res.send("this is mr wu")
});
router.get("/yang",(req,res)=>{
    res.send("this is mr yang")
});
module.exports = router;