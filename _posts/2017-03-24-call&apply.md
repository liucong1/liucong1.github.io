---
layout: default
title: call()和apply()方法
---

# {{page.title}}

发现不少人对 `call()` 和 `apply()` 方法不太熟悉，所以今天抽出时间，结合 MDN 上的相关文档，向大家介绍下相关的用法。

其实，`call()`方法的作用和 `apply() `方法类似，区别就是`call()`方法接受的是参数列表，而apply()方法接受的是一个参数数组。

先来看下MDN上对于这两个方法的介绍。



## Function​.prototype​.call()

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

> fun.call(thisArg, arg1, arg2, ...)

### 参数

#### thisArg

在 `fun` 函数运行时指定的 `this` 值。需要注意的是，指定的 `this `值并不一定是该函数执行时真正的 `this` 值，如果这个函数在非严格模式下运行，则指定为 `null` 和 `undefined` 的 `this` 值会自动指向全局对象（浏览器中就是 `window`对象），同时值为原始值（数字，字符串，布尔值）的 `this` 会指向该原始值的自动包装对象。

#### arg1, arg2, ...

指定的参数列表。

### 返回值
使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。

### 描述
call() 允许为不同的对象分配和调用属于一个对象的函数/方法。

call() 提供新的 this 值给当前调用的函数/方法。你可以使用 call 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）。



## Function​.prototype​.apply()

`apply()` 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。

> func.apply(thisArg, [argsArray])

### 参数

#### thisArg

可选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

#### argsArray
可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。

### 返回值

调用有指定this值和参数的函数的结果。

### 描述

在调用一个存在的函数时，你可以为其指定一个 this 对象。 this 指当前对象，也就是正在调用这个函数的对象。 使用 apply， 你可以只写一次这个方法然后在另一个对象中继承它，而不用在新对象中重复写该方法。

apply 与 call() 非常相似，不同之处在于提供参数的方式。apply 使用参数数组而不是一组参数列表。apply 可以使用数组字面量（array literal），如 fun.apply(this, ['eat', 'bananas'])，或数组对象， 如  fun.apply(this, new Array('eat', 'bananas'))。

你也可以使用 arguments对象作为 argsArray 参数。 arguments 是一个函数的局部变量。 它可以被用作被调用对象的所有未指定的参数。 这样，你在使用apply函数的时候就不需要知道被调用对象的所有参数。 你可以使用arguments来把所有的参数传递给被调用对象。 被调用对象接下来就负责处理这些参数。

从 ECMAScript 第5版开始，可以使用任何种类的类数组对象，就是说只要有一个 length 属性和(0..length-1)范围的整数属性。例如现在可以使用 NodeList 或一个自己定义的类似 {'length': 2, '0': 'eat', '1': 'bananas'} 形式的对象。



## 用法

下面看几个常规的用法：

* 用 `apply` 或 `call`将数组添加到另一个数组

我们可以使用`push`将元素追加到数组中。并且，因为push接受可变数量的参数，我们也可以一次推送多个元素。但是，如果我们传递一个数组来推送，它实际上会将该数组作为单个元素添加，而不是单独添加元素，因此我们最终得到一个数组内的数组。如果那不是我们想要的怎么办？在这种情况下，`concat`确实具有我们想要的行为，但它实际上并不附加到现有数组，而是创建并返回一个新数组。 但是我们想要附加到我们现有的阵列......那么现在呢？ 写一个循环？当然不是吗？

```js
var array = ['a', 'b'];
var elements = [0, 1, 2];
//使用apply实现
array.push.apply(array, elements); 
//使用call实现
//array.push.call(array, ...elements); 
console.info(array); // ["a", "b", 0, 1, 2]
```

* 找出数组中的最大/最小值

怎么在一个由数字组成的数组中，找出最大/最小值呢？

除了使用各种循环遍历外，能不能使用 Math.max()/ Math.min() 来实现呢？

我们知道 `Math.max(value1[,value2, ...]) ` 的语法，但是这个函数并不支持使用数组作为参数。

除了` Math.max(...arr)`外，我们同样能使用 apply 实现。

```js
/* 找出数组中最大/小的数字 */
var numbers = [5, 6, 2, 3, 7];

/* 应用(apply) Math.min/Math.max 内置函数完成 */
var max = Math.max.apply(null, numbers); /* 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);

/* 代码对比： 用简单循环完成 */
max = -Infinity, min = +Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max)
    max = numbers[i];
  if (numbers[i] < min) 
    min = numbers[i];
}
```

* 使用 `call` 方法调用父构造函数

在一个子构造函数中，你可以通过调用父构造函数的 `call` 方法来实现继承，类似于 `Java` 中的写法。下例中，使用 `Food` 和 `Toy `构造函数创建的对象实例都会拥有在 `Product` 构造函数中添加的 `name` 属性和 `price` 属性,但 `category` 属性是在各自的构造函数中定义的。

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```

* 使用 `call` 方法调用匿名函数

在下例中的 `for` 循环体内，我们创建了一个匿名函数，然后通过调用该函数的 `call` 方法，将每个数组元素作为指定的 `this` 值执行了那个匿名函数。这个匿名函数的主要目的是给每个数组元素对象添加一个 `print` 方法，这个 `print` 方法可以打印出各元素在数组中的正确索引号。当然，这里不是必须得让数组元素作为 `this` 值传入那个匿名函数（普通参数就可以），目的是为了演示 `call` 的用法。

```
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}

```

* 使用 `call` 方法调用函数并且指定上下文的 '`this`'

在下面的例子中，当调用 `greet` 方法的时候，该方法的`this`值会绑定到 `obj` 对象。

```js
function greet() {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.call(obj);  // cats typically sleep between 12 and 16 hours
```



参考：
[MDN | Function​.prototype​.call()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
[MDN | Function​.prototype​.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)





