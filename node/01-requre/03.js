
const path = require("path")
//console.log(path)
//let x = path.join("a","c","d")
//console.log(x)
//console.log(__dirname);
//console.log(__filename);
//let x = path.resolve("a","g")
//let x = path.resolve("a","/g")
let x = path.relative("a/b/c","g/f")
let y = path.parse(__filename);
console.log(y);
console.log(x);