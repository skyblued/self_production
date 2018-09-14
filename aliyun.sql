SET NAMES UTF8;
DROP DATABASE if EXISTS aliyun;
CREATE DATABASE aliyun charset=utf8;
USE aliyun;
CREATE TABLE `users`(
 `uid` INT primary key auto_increment, 
 `uname` VARCHAR(16) NOT NULL , 
 `upwd` VARCHAR(16) NOT NULL ,
 `phone` char(11),
 `img` VARCHAR(156));
insert INTO users VALUES(1, 'liu', 123456, 13512345678, "img/login/1.jpg")
