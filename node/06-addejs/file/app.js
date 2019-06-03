
const  express = require("express");
const app = express();
const path = require("path");

app.listen(3654);
app.set("view engine","ejs");

app.get("/student",(req,res)=>{
    let data = {
        student:[
            {name:"yang",age:10},
            {name:"li",age:15},
            {name:"he",age:14},
            {name:"wu",age:12}
        ]
    }
    /*res.render(path.join(__dirname,"views/index"),data)
    });*/
    res.render("index",data)
})