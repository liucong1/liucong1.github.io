---
layout: default
title: Array的fill方法
---

# {{page.title}}

今天看到这样一种用法：

    const cards = Array(10).fill().map((_,i)=>i+1); //初始化一个 1~10 的数组

对于ES6的数组方法，也没认真研究过，顿时看的有点懵了。

那么这段话是什么意思呢？

`Array(10)`自然就是定义10个元素的数组

`fill()`方法将一个数组的所有元素从开始索引填充到具有静态值的结束索引，语法为：

    arr.fill(value) 
    arr.fill(value, start) 
    arr.fill(value, start, end)

`Array(10).fill()`就是声明一个值全为 **undefind** 的数组。

`map()`方法就比较熟悉了，用来创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数，语法为：

    const new_array = arr.map(callback[, thisArg])
    callback的三个参数为currentValue(数组中正在处理的当前元素)，index(数组中正在处理的当前元素的索引)，array(map 方法被调用的数组)。

所以文章开头的那段代码，就是用来创建一个`[1,2,...,11]`的数组。

## 参考

* [5分钟现场撸代码——谈总结会抽奖程序](https://75team.com/post/luckey-draw-in-5-minutes.html)
* [Array.prototype.fill()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
