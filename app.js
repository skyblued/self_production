const express = require("express");
const bodyPaser = require("body-parser");
const pool = require("./pool.js")
var app = express();

app.listen(8080,()=>console.log("攻击开始"));
app.use(express.static("public"))
app.use(bodyPaser.urlencoded({extended: false}));
app.get("/login",(req,res)=>{
    res.send("你好啊");
    console.log("有人来了")
})