---
layout: default
title: git commit template 配置
---

# {{page.title}}

工作中，一个项目通常是由多个成员协作完成。但是每次提交代码，  `commit`的注释基本都是随心所欲的。有时为了查找问题，连写代码的人，都忘记这一次提交的主要修改点是什么。

为了规范`commit`信息，可以配置一个全局的`commit message template`，所有提交的`commit message`都按照这个配置来写。

首先新建模板文件：

在 xxx 目录下新建 `.gitmessage.txt`，填入以下模板：

```
# <类型>:(影响范围) <主题> <JIRA?>

# <body>

# <footer>

# 类型字段包含:
#     feat：新功能（feature）
#     fix：修复bug
#     doc：文档（documentation）
#     style： 格式化 ESLint调整等（不影响代码运行的变动）
#     refactor：重构（即不是新增功能，也不是修改bug的代码变动）
#     test：增加测试
# 影响范围：
#     用于说明 commit 影响的范围，比如修改的登录页、账户中心页等
# 主题：
#    commit目的的简短描述，不超过50个字符
# JIRA:
#    如果有对应的jira 请附上jira号
# Body 部分是对本次 commit 的详细描述，可以分成多行
# Footer用来关闭 Issue或以BREAKING CHANGE开头，后面是对变动的描述、
#       以及变动理由和迁移方法
```

然后通过以下命令添加配置：

```
git config --global commit.template xxx/.gitmessage.txt
```

之后再提交 `commit` 前，不使用 `git commit -m 'xxxx'`，而是使用 `git commit`，就会调起模板。

此外，还能通过以下命令来修改编辑工具：

```
git config --global core.editor vi
```
