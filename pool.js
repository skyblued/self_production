const mysql = require("mysql");
var pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "aliyun",
    connectionLimit: 10
})
module.exports = pool;