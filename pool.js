const mysql = require("mysql");
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "aliyun",
    connectionLimit: 10
})
module.exports = pool;