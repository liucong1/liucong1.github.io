---
layout: default
title: linux安装npm包报`permissions`错误的问题
---

# {{page.title}}

执行`sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}`修改文件夹权限后，重新安装即可。


## 参考：

* [Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) 