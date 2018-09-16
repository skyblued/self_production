const express = require("express");
const bodyPaser = require("body-parser");
const pool = require("./pool.js")
var app = express();

app.listen(8080,()=>console.log("server success"));
app.use(express.static("public"));
app.use(bodyPaser.urlencoded({extended: false}));

// 注册
app.post("/user/register",(req,res)=>{
    var obj = req.body;
    console.log(obj);
    var uname = obj.uname;
    var upwd = obj.upwd;
    if(uname==null){
        res.send("不要皮啊!!!");
        return; 
    } 
    if(upwd==null){
        res.send("no zuo no die");
        return;
    }
    var sql = `insert into users values(NUll,?,?,NULL,NUll)`;
    pool.query(sql,[uname,upwd],(err,ressult)=>{
        if(err) throw err;
        res.send("注册成功");
    })
});
// 登录
app.post("/user/login",(req,res)=>{
    var obj = req.body;
    // console.log(obj);
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    console.log(uname,upwd)
    var sql = `select * from users where uname=? and upwd=?`;
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        console.log(result)
        if(result.length>0){
            res.send({"ok":true,"msg":"登录成功"});
        }else{
            res.send({"ok":false,"msg":"用户名或密码错误"})
        }
    })
})
// 查询产品信息
app.get("/products",(req,res)=>{
    var sql = `select * from products`;
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    })
})
// 查询game信息
app.get('/game',(req,res)=>{
    var title = req.query.title;
    console.log(title)
    var sql = `select * from game where title=?`;
    pool.query(sql,[title],(err,result)=>{
        if(err) console.log(err);
        res.send(result)
    })
})