

const fs = require("fs");
const path =require("path");

let del = path.join(__dirname,"../01-requre/02.txt");

let a =require("./03.js")
a(del)