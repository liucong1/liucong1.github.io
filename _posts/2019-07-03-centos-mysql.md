---
layout: default
title: CentOS 安装 MySQL
---

# {{page.title}}

## 安装MySQL

安装 RPM

```
yum install -y rpm
```

安装 MySQL 前，我们可以检测系统是否自带安装 MySQL:
```
rpm -qa | grep mysql
```

如果你系统有安装，那可以选择进行卸载:
```
rpm -e mysql　　// 普通删除模式
rpm -e --nodeps mysql　　// 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除
```

下载并安装MySQL
```
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update
yum install -y mysql-server
```

权限设置：
```
chown mysql:mysql -R /var/lib/mysql
```

初始化 MySQL：
```
mysqld --initialize
```

启动 MySQL：
```
systemctl start mysqld
```

查看 MySQL 运行状态：
```
systemctl status mysqld
```

验证 MySQL 安装：
```
mysqladmin --version
```

## 创建数据库和数据表

首先执行 `mysql` 进入命令行模式。

创建数据库

```
create database test;
```
以上命令用来创建名为 test 的数据库。

查看所有数据库
```
show databases
```

使用 test 数据库
```
use test
```

创建数据表语法
```
CREATE TABLE table_name (column_name column_type);
```

创建数据表实例
```
CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `title` VARCHAR(100) NOT NULL,
   `author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

查看某数据库下所有的数据表：
```
show tables
```

## 创建用户

命令:
```
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```

说明：

* username：你将创建的用户名
* host：指定该用户在哪个主机上可以登陆，如果是本地用户可用localhost，如果想让该用户可以从任意远程主机登陆，可以使用通配符%
* password：该用户的登陆密码，密码可以为空，如果为空则该用户可以不需要密码登陆服务器

例子：
```
CREATE USER 'dog'@'localhost' IDENTIFIED BY '123456';
CREATE USER 'pig'@'192.168.1.101_' IDENDIFIED BY '123456';
CREATE USER 'pig'@'%' IDENTIFIED BY '123456';
CREATE USER 'pig'@'%' IDENTIFIED BY '';
CREATE USER 'pig'@'%';
```

## 用户授权

命令:
```
GRANT privileges ON databasename.tablename TO 'username'@'host'
```

说明:

* privileges：用户的操作权限，如SELECT，INSERT，UPDATE等，如果要授予所的权限则使用ALL
* databasename：数据库名
* tablename：表名，如果要授予该用户对所有数据库和表的相应操作权限则可用*表示，如*.*

例子:
```
GRANT SELECT, INSERT ON test.user TO 'pig'@'%';
GRANT ALL ON *.* TO 'pig'@'%';
GRANT ALL ON maindataplus.* TO 'pig'@'%';
```

注意:

用以上命令授权的用户不能给其它用户授权，如果想让该用户可以授权，用以下命令:
```
GRANT privileges ON databasename.tablename TO 'username'@'host' WITH GRANT OPTION;
```





