SET NAMES UTF8;
DROP DATABASE if EXISTS aliyun;
CREATE DATABASE aliyun charset=utf8;
USE aliyun;
CREATE TABLE `users`(
 `uid` INT NOT NULL , 
 `uname` VARCHAR(16) NOT NULL , 
 `upwd` VARCHAR(16) NOT NULL ,
 `phone` char(11) NOT NULL ,
 `img` VARCHAR(156) NOT NULL );
insert INTO users VALUES(1, 'liu', 123456, 13512345678, "img/login/1.jpg")
