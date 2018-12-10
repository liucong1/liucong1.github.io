---
layout: default
title: git拆分代码仓库
---

# {{page.title}}

## 背景

随着业务的增长，git仓库越来越臃肿，趁着本次升级 Node.js 版本的机会，准备对部分业务代码仓库进行拆分。

其实之前为了业务合规，做过一次拆分，当时就是拷贝代码，删掉了不相关的文件和文件夹，push到远端新仓库。但是所有的文件修改都变成了我的，没有历史commit，不方便从代码修改历史中，找到相关负责人。

所以本次升级的一个很重要的目标是，保留历史提交信息。

## 操作

网上一查，其实拆分git仓库的代码很多，流程基本都是：

* 从 master 上，使用 `git subtree` 将某个文件夹抽出来

```
cd big-repo
git subtree split --prefix dir-to-extract -b selective-history
```

* 新建一个仓库，从上述分支中拉取代码

```
mkdir slim-repo
cd slim-repo
git init
git pull ../big-repo selective-history:master
```

* 之后再提交代码就行了

```
cd big-repo
git subtree split --prefix dir-to-extract -b selective-history
git push git@github.com:cjohansen/my-new-slim-repo.git selective-history:master
```

这就完成了一个文件夹的抽取，就是这么简单。

但是如果想要抽取多个文件夹改怎么办呢？

这种情况就不能使用 `git subtree` 了，得使用 `git filter-branch`。

```
git clone git@github.com:cjohansen/some-fat-repo.git
cd some-fat-repo
git filter-branch \
    --tree-filter 'find . ! \( -path "./terraform*" -o \
                               -path "./packer*" -o \
                               -path "./.git*" -o \
                               -path "." \) \
                        -exec rm -fr {} +' \
    --prune-empty \
    HEAD
```

这样可以遍历所有的commit，删掉我们不想要的文件。使用 `--prune-empty` 参数可以将空分支给删掉。

## 参考
[Git Subtree for Multiple Directories](https://cjohansen.no/git-subtree-multiple-dirs/)
[Git 仓库拆拆拆](https://segmentfault.com/a/1190000002548731)