---
layout: default
title: requestAnimationFrame的用法
---

# {{page.title}}

今天是第一次接触requestAnimationFrame，该函数是针对动画效果的API，谷歌浏览器，火狐浏览器，IE10+都实现了这个函数。

## requestAnimationFrame有什么用？

* 浏览器可以优化并行的动画动作，更合理的重新排列动作序列，并把能够合并的动作放在一个渲染周期内完成，从而呈现出更流畅的动画效果。比如，通过requestAnimationFrame()，JS动画能够和CSS动画/变换或SVG SMIL动画同步发生。
* 另外，如果在一个浏览器标签页里运行一个动画，当这个标签页不可见时，浏览器会暂停它，这会减少CPU，内存的压力，节省电池电量。
* 用过setTimeout实现js动画的人一定知道，在显示器的刷新频率为60Hz的时候，如果将动画的刷新频率设置为每秒刷新60次以上，会出现掉帧的问题，导致动画不连贯。
* 简单一点理解requestAnimationFrame，它会按照你设置的刷新频率和显示器支持的最大刷新频率之间，取较小的那个值。

## requestAnimationFrame兼容IE8、IE9的写法

`
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());
`

## 参考

[CSS3动画那么强，requestAnimationFrame还有毛线用？-张鑫旭](http://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/)
[HTML5探秘：用requestAnimationFrame优化Web动画](http://www.webhek.com/post/requestanimationframe.html)