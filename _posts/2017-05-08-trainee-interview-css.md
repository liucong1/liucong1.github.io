---
layout: default
title: 前端实习生面试题——CSS
---

`
    最近有个可爱的小师妹要参加前端实习生的面试，正巧最近比较闲，就给她整理、总结了一些前端面试中需要记住的知识点。
`


# CSS盒子模型

* 在W3C模型中: 总宽度 = margin-left + border-left + padding-left + width + padding-right + border-right + margin-right

* 在IE模型中: 总宽度 = margin-left + width + margin-right
    
# 怎么水平、垂直居中一个元素？

* 方法比较多，不同的方法局限性不同，一定得掌握

* 参考 [这儿](http://www.cnblogs.com/zhouhuan/p/vertical_center.html)

# css样式优先级

* CSS 优先级法则：

    * 选择器都有一个权值，权值越大越优先；
    
    * 当权值相等时，后出现的样式表设置要优于先出现的样式表设置；
    
    * 创作者的规则高于浏览者：即网页编写者设置的CSS 样式的优先权高于浏览器所设置的样式；
    
    * 继承的CSS 样式不如后来指定的CSS 样式；
    
    * 在同一组属性设置中标有“!important”规则的优先级最大；


# 谈谈对响应式的理解

* 响应式布局：简单点说，就是做一个网站同时能兼容多个终端，由一个网站转变成多个网站，为我们大大节省了资源（一套代码能在PC端、移动端等不同分辨率的设备上正常访问）。
  
* 优点：
  
    * 面对不同分辨率设备灵活性强
    
    * 2.能够快捷解决多设备显示适应问题

* 缺点：

    * 不能完全兼容所有浏览器，代码累赘，加载时间加长。
  
* 原理：简单点说响应式布局它是通过CSS中Media Query（媒介查询）@media功能，来判断我们的终端设备宽度在多少像素内，然后就执行与之对应的CSS样式。

# 文档定位机制

* css有三种基本定位机制：标准文流(Normal flow)，浮动(Floats)和绝对定位(Absolute positioning)。

* 标准文档流
 
    * （1）从左到右，从上到下，输出文档内容

    * （2）有会计元素（从做导游撑满页面，独占一行，触碰到页面边缘时自动换行的元素，div,ul,li,dl,dt,p）和行级元素组成（能在同一行内显示并且不会改变html文档结构，如span,input）


* 浮动

    * 设置为浮动的元素将会往左或者往右漂移，知道遇到阻碍-其他元素或者父级元素的边框。浮动元素不在标准文档流中占空间，但会随其后的浮动元素造成影响

* 绝对定位

    * 设置为绝对定位的元素将从标准文档流中删除，不占据空间，然后通过top,left,right,bottom属性对其相对父元素进行定位。
    
# 怎么清除浮动？

* 参考 [这儿](http://www.divcss5.com/jiqiao/j406.shtml)

# position有哪几种取值？分别代表什么意思？

* position的四种取值为：
  
    * static:静态位置，无特殊位置，对象遵循正常文档流，left right top bottom 无用。这个是默认值哦！
  
    * relative：相对定位，对象遵循正常文档流，以正常理应所在的位置为基础根据left right top bottom 值进行偏移。在没有设置属性为relative时，对象在文档中会有个位置，设置了此值后，在文档中的位置根据left right top bottom 值进行重新定位。相对定位，相对的是自己本身应该在的位置！
  
    * absolute：绝对定位，对象脱离正常文档流，以static之外的最近父元素为参考点进行left right top bottom 值进行偏移。若不存在此属性，则以body为参考点移动，即以窗口为参考点。
  
    * fixed：固定定位，对象脱离正常文档流，以窗口即body对象为参考点，参考left right top bottom 值进行偏移。
  
* 所以，static和relative的对象都遵循正常文档流，而absolute和fixed是脱离正常稳定流的，在正常文档流中不占位置，有漂浮在页面上的感觉。
  
* relative和absolute和fixed这三种属性的对象，设置left right top bottom 是有效的。

# CSS3 的新特性有哪些？

* 自己去查
