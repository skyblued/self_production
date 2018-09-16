SET NAMES UTF8;
DROP DATABASE if EXISTS aliyun;
CREATE DATABASE aliyun charset=utf8;
USE aliyun;
-- -- -- -- -- -- --
-- 用户信息表 --
-- -- -- -- -- -- --
CREATE TABLE `users`(
 `uid` INT primary key auto_increment, 
 `uname` VARCHAR(16) NOT NULL , 
 `upwd` VARCHAR(16) NOT NULL ,
 `phone` char(11),
 `img` VARCHAR(156));
insert INTO users VALUES(1, 'liu', 123456, 13512345678, "img/login/1.jpg");
-- -- -- -- -- -- --
-- 商品信息表 --
-- -- -- -- -- -- --
CREATE TABLE products (
    pid INT primary key auto_increment,
    title VARCHAR(256),
    pirce INT,
    details VARCHAR(256),
    suggest VARCHAR(128),
    img1 VARCHAR(256),
    img2 VARCHAR(256)
);
-- 插入商品数据 --
insert INTO products VALUES(
    NULL,'全民云计算',394,'系列四云服务器，I/O优化性能更强低至','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);
insert INTO products VALUES(
    NULL,'高性能服务器',459,'全场实例首台5折支持高达450万pps','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);
insert INTO products VALUES(
    NULL,'全民云计算',394,'系列四云服务器，I/O优化性能更强低至','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);
insert INTO products VALUES(
    NULL,'高性能服务器',459,'全场实例首台5折支持高达450万pps','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);
insert INTO products VALUES(
    NULL,'全民云计算',394,'系列四云服务器，I/O优化性能更强低至','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);
insert INTO products VALUES(
    NULL,'高性能服务器',459,'全场实例首台5折支持高达450万pps','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);
insert INTO products VALUES(
    NULL,'全民云计算',394,'系列四云服务器，I/O优化性能更强低至','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);
insert INTO products VALUES(
    NULL,'高性能服务器',459,'全场实例首台5折支持高达450万pps','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);
insert INTO products VALUES(
    NULL,'全民云计算',394,'系列四云服务器，I/O优化性能更强低至','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);
insert INTO products VALUES(
    NULL,'高性能服务器',459,'全场实例首台5折支持高达450万pps','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);
insert INTO products VALUES(
    NULL,'全民云计算',394,'系列四云服务器，I/O优化性能更强低至','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);
insert INTO products VALUES(
    NULL,'高性能服务器',459,'全场实例首台5折支持高达450万pps','搭建网站/应用优选','img/details/detail-img1.png','img/details/detail-img2.png'
);

#创建大赛表
CREATE TABLE game (
    gid int primary key auto_increment,
    title VARCHAR(128),
    theme VARCHAR(128),
    subtop VARCHAR(128),
    statu VARCHAR(128),
    time date,
    bonus int
);
#插入大赛信息
insert INTO game VALUES(
    NULL,'suanfa','第四届阿里中间件性能挑战赛','阿里巴巴中间件，阿里云天池','进行中','2018/06/10',500000
);
insert INTO game VALUES(
    NULL,'suanfa','阿里聚安全攻防挑战赛','阿里安全','已结束','2016/12/31',217200
);
insert INTO game VALUES(
    NULL,'suanfa','中间件性能挑战赛','阿里巴巴集团','已结束','2016/07/11',300000
);
insert into game VALUES(
    NULL,'suanfa','阿里云 API 应用创新大赛','API 经济','进行中','2018/02/14',1365000
);
insert into game VALUES(
    NULL,'keshihua','【公益云图】数据可视化创新大赛','阿里巴巴公益基金会，公共气象服务中心','已结束','2016/09/25',360000
);
insert into game VALUES(
    NULL,'keshihua','中间件性能挑战赛','阿里巴巴集团','已结束','2016/07/11',300000
);
insert into game VALUES(
    NULL,'sheji','阿里云 API 应用创新大赛','API 经济','进行中','2018/02/14',1365000
);
insert into game VALUES(
    NULL,'sheji','阿里云 API 应用创新大赛','API 经济','进行中','2018/02/14',1365000
);
insert into game VALUES(
    NULL,'api','阿里云 API 应用创新大赛','API 经济','进行中','2018/02/14',1365000
);