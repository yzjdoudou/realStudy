
const express= require("express");

let router = express.Router();

router.get("/yang",(req,res)=>{
    res.send("this is mr yang")
});
router.get("/li",(req,res)=>{
    res.send("this is mr li")
});
router.get("/he",(req,res)=>{
    res.send("this is mr he")
});
router.get("/wu",(req,res)=>{
    res.send("this is mr wu")
});
module.exports = router;