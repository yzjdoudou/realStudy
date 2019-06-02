
const express = require("express");

let router = express.Router();
router.get("/info",(req,res)=>{
    res.send("yang is sb")
});
module.exports = router;