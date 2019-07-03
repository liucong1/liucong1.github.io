---
layout: default
title: CentOS安装Redis
---

# {{page.title}}

## 下载安装包

```
wget http://download.redis.io/releases/redis-4.0.2.tar.gz
```

## 解压安装包

```
tar xzf redis-4.0.2.tar.gz
```

## 校验安装包

```
cd redis-4.0.2
make test
```

## 安装

```
make
make install
```

如果在执行过程中遇到 `Hint: It's a good idea to run 'make test' ;)` 的提示，不用理会。

如果想在指定目录下安装，就执行以下命令： `make PREFIX=/redis install` （在 `/redis` 目录下安装）。

执行完后，会发现安装目录下多了一个 `bin` 目录。

该目录下，不同的文件分别代表：

```
redis-benchmark     ----> redis性能测试工具
redis-check-aof     ----> 检查aof日志工具，如果日志损坏能检查出来
redis-check-dump    ----> 检查rdb日志工具
redis-cli           ----> 连接用的客户端
redis-server        ----> redis服务区进程
```

## 后台启动

先将 `redis-4.0.2` 目录下的配置文件 `redis.conf` 拷贝到安装目录。

修改安装目录中的 `redis.conf` ，将 `daemonize no` 改为 `daemonize yes`。

在安装目录中执行 `./bin/redis-server ./redis.conf` 启动 redis。

## 测试

执行 `redis-cli` 进入 redis 命令模式。