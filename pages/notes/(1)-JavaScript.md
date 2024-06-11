

## 为什么学习JS

- - 前端核心语言
	- 框架基础        

## JS可以做什么

- - 浏览器端
	- node(服务器端)n

​                 <img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225110750.png" alt="img" style="zoom:67%;" />        



## JS的历史

https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225112532.png

- - Nombas 的 ScriptEase

大概在 1992 年，一家称作 Nombas 的公司开发了一种叫做 C 减减（C-minus-minus，简称 Cmm）的嵌入式脚本语言。

- - Netscape 发明了 JavaScript

1995 年发行的 Netscape Navigator 2.0 开发一个称之为 LiveScript 的脚本语言，当时的目的是在浏览器和服务器（本来要叫它 LiveWire）端使用它。

- - 微软的JSript

 微软也决定进军浏览器，发布了 IE 3.0 并搭载了一个 JavaScript 的克隆版，叫做 JScript（这样命名是为了避免与 Netscape 潜在的许可纠纷）。

- - 标准化

1997 年，JavaScript 1.1 作为一个草案提交给欧洲计算机制造商协会（ECMA）。

版本为：ECMA-262	维护组织为：TC-39

- - ECMAScript和javaScript

当时有java语言了，又想强调这个东西是让ECMA规则，所以就这样一个神奇的东西诞生了，这个东西的名称就叫做ECMAScript。但注意他是一个标准

所以我们讲javaScript是ECMAScript的实现，ECMAscript是javaScript的标准

- - javaScript的组成

javaScript = ECMAScript + DOM + BOM

- - 关于ES6

 后面我们会学习ES6，当然这里指的是版本，我们可以说现在学习的是ES5，我们把ES2015之前的版本，统称为ES5。也就是现在我们即将学习的版本拉

- - JS社区

因为JS语言存在很多局限性，比如没有模块化，变量没有类型，没有块级作用域等。所以在JS社区中，存在一些其他的版本，比如：sea.js、require.js等



## JS的工作原理

![image-20211225112429856](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225112429.png)

在初期，JS的设定初衷就是在浏览器上运行的脚本语言（操作dom），所以避免不了需要采用单线程的模式。如果采用多线程，那么就会出现多个线程同时对同一个dom进行修改的情况，这样太复杂了。 

那么采用单线程，也就是说执行代码的线程的只有一个！但是也会出现一个问题，也就是如果任务比较多的情况下，任务是需要排队的。那么就会导致如果有一个任务比较耗时，我们会了解决这个问题，可以采用异步的方式去解决。

同步模式

​                 <img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225111436.jpeg" alt="img" style="zoom:80%;" />        

异步模式

​                 <img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225111436.jpeg" alt="img" style="zoom:80%;" />     

## JS的三大组成部分

JS由==`ECMAScript基本语法（简称ES`）、`DOM（文档对象模型）`和`BOM（浏览器对象模型）`==，图示如下： ![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211224210107.webp)

### WebAPI

#### 什么是API和WebAPI ？

👉：**API**——Application Programming Interface（应用程序接口），简单来说，就是一些程序（比如操作系统）提前封装好了一些函数和方法，提供给我们，我们不需要了解它是怎么封装的，只要调用，就可以实现相应的功能。

👉：**WebAPI**——就是浏览器用`js语法`提前封装好了一些函数和方法，给我们来调用。主要是针对`BOM` 和`DOM` 封装的一些方法。

### BOM和DOM的关系

👉：`BOM`——Browser Object Model （浏览器对象模型），其实就是把浏览器当做一个对象来进行操作，比如前进、后退、页面跳转、刷新等

👉：`DOM`——Document Object Model（文档对象模型），Document是文档，即整个WEB页面，所有的Dom元素都在Document整个文档里。简单来说，DOM就是把整个**文档页面**当做一个对象进行操作，其核心思路就是把网页上的任何内容都当做一个`对象`来处理

👉：二者的关系简单理解，就是==BOM包含DOM==，图示如下：

- 浏览器打开一个页面就会 **自动 创建** 一套 BOM 对象(window/document/.......)
- 其中 document 下 包含了 **根据 html 创建** 的 **`Dom 对象`**，这个DOM对象，以树形结构展示，即`DOM树`

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211224210319.webp)



接下来介绍的是ECMAScript语法，然后再介绍DOM和BOM



## JS的垃圾回收机制

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225112150.png" alt="image-20211225112150331" style="zoom:150%;" />

JS的垃圾回收机制是为了以防内存泄漏，内存泄漏的含义就是当已经不需要某块内存时这块内存还存在着，垃圾回收机制就是间歇的不定期的寻找到不再使用的变量，并释放掉它们所指向的内存。

JS执行环境中的垃圾回收器怎样才能检测哪块内存可以被回收有两种方式：标记清除（mark and sweep）、引用计数(reference counting)。

简单来说，有2种情况，会被视为垃圾。

- 没有被引用的对象
- 几个对象相互引用形成闭环

那什么情况不会被视为垃圾呢？

- 全局变量（时刻待命）

- 有具体引用关系的对象(闭包)

	```js
	function test(){
	    var a=1;
	    return function(){
	        console.log(++a);
	    } 
	}
	test();
	test();
	```



## JS代码如何延迟加载

js 的加载、解析和执行会阻塞页面的渲染过程，因此我们希望 js 脚本能够尽可能的延迟加载，提高页面的渲染速度。

我了解到的几种方式是：

1. 将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。
2. 给 js 脚本添加 defer 属性，有derer的话,加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成,并且多个defer会按照顺序进行加载。
3. 给 js 脚本添加 async属性，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）
4. 动态创建 DOM 标签的方式，我们可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。

defer和async的区别

简单来说：区别主要在于一个执行时间,defer会在文档解析完之后执行,并且多个defer会按照顺序执行,而async则是在js加载好之后就会执行,并且多个async,哪个加载好就执行哪个

## 变量声明之有var和没有var

==不用var声明的变量会被自动隐式的创建为全局变量==

```js
function fn(){
        a = 2
    }
fn()
console.log(a)  //2
//根据js的作用域，函数外面是无法获得函数里面的变量的（除非使用闭包），但是这里做到了，只是因为js会将没有使用var声明的变量自动的创建为全局变量。
```

从第一条也可以看出，没有使用var声明的变量是不会参与变量提升的，不然结果应该是undefined，看到最好的一个解释是：由于该变量没有使用var声明，就不会被放在预解析阶段的AO

上面说到不用var会被自动创建为全局变量

```js
 function fn(){
    console.log(a)  //a is not defined
    a = 2
}
fn()
//函数的执行分为代码预计解析阶段和执行阶段，在预解析阶段会进行变量提升，而不用var声明的变量不参与变量提升，因此进入执行阶段，执行阶段按照代码的顺序执行，先执行打印语句，发现a未定义，然后往下执行a=2，这个时候才会创建为全局变量，但因为上面报错，导致程序执行中止，所以这里也没能生产全局变量
```
严格模式下是不允许自动隐式的创建为全局变量

```js
  `use strict`
    function fn(){
        a = 2
    }
    fn()
    console.log(a)  //a is not define
```

​    

```js
//用var 和不使用var 还有个区别
var a = 1
b = 2
console.log(Object.getOwnPropertyDescriptor(window, 'a'))  
//{value: 1, writable: true, enumerable: true, configurable: false}
console.log(Object.getOwnPropertyDescriptor(window, 'b'))
//{value: 2, writable: true, enumerable: true, configurable: true}
-----------------------------------------------
//通过结果的比较可以发现，未使用 var 声明的全局变量的configurable 属性是 true(同样，直接通过window全局对象添加的变量，改属性也是true)，而使用var声明的变量，该属性是默认为false，也就是说，未通过 var 声明的变量是可以删除的，如下：
delete a
// false
delete b
// true
```


```js
var name = '小王',
    age = 17;
var obj = {
    name: '小张',
    age: 19,
    myfun: function() {
        console.log(this.name + '年龄' + this.age)
    }
}
console.log(obj.age) //19
obj.myfun() //小张年龄19

// ----------------------------------
fav = '盲僧'
function shows() {
    console.log(this.fav)
}
shows() //盲僧 
// -----------------------------------
var favq = '盲僧加var'

function shows1() {
    console.log(this.favq)
}
shows1() //undefined
```



## 变量的作用域

全局变量和局部变量。javascript的作用域是相对函数而言的，可以称为函数作用域

- 全局作用域： 最外层函数定义的变量拥有全局作用域，即对任何内部函数来说，都是可以访问的
- 局部作用域： 局部作用域一般只在固定的代码片段内可访问到，而对于函数外部是无法访问的

## 理解js的作用域和作用链

### 什么是作用域

作用域是在运行时代码中的某些特定部分中变量，函数和对象的可访问性。换句话说，作用域决定了代码区块中变量和其他资源的可见性。可能这两句话并不好理解，我们先来看个例子：

```javascript
function outFun2() {
    var inVariable = "内层变量2";
}
outFun2();//要先执行这个函数，否则根本不知道里面是啥
console.log(inVariable); // Uncaught ReferenceError: inVariable is not defined
```

 **作用域就是一个独立的地盘，让变量不会外泄、暴露出去**。也就是说**作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。**

**ES6 之前 JavaScript 没有块级作用域,只有全局作用域和函数作用域**。ES6 的到来，为我们提供了‘块级作用域’,可通过新增命令 let 和 const 来体现。

- 最外层函数 和在最外层函数外面定义的变量拥有全局作用域

```javascript
var outVariable = "我是最外层变量"; //最外层变量
function outFun() { //最外层函数
    var inVariable = "内层变量";
    function innerFun() { //内层函数
        console.log(inVariable);
    }
    innerFun();
}
console.log(outVariable); //我是最外层变量
outFun(); //内层变量
console.log(inVariable); //inVariable is not defined
innerFun(); //innerFun is not defined
```

- 所有末定义直接赋值的变量自动声明为拥有全局作用域

```javascript
function outFun2() {
    variable = "未定义直接赋值的变量";
    var inVariable2 = "内层变量2";
}
outFun2();//要先执行这个函数，否则根本不知道里面是啥
console.log(variable); //未定义直接赋值的变量
console.log(inVariable2); //inVariable2 is not defined
```

- 所有 window 对象的属性拥有全局作用域

- 函数作用域,是指声明在函数内部的变量，和全局作用域相反，局部作用域一般只在固定的代码片段内可访问到，最常见的例如函数内部。

	```javascript
	function doSomething(){
	    var blogName="浪里行舟";
	    function innerSay(){
	        alert(blogName);
	    }
	    innerSay();
	}
	alert(blogName); //脚本错误
	innerSay(); //脚本错误
	```

> ***\*作用域是分层的，内层作用域可以访问外层作用域的变量，\**反之则不行**。我们看个例子，用泡泡来比喻作用域可能好理解一点：
>
> ![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226213531.png)
>
> 最后输出的结果为 2, 4, 12
>
> - 泡泡 1 是全局作用域，有标识符 foo；
> - 泡泡 2 是作用域 foo，有标识符 a,bar,b；
> - 泡泡 3 是作用域 bar，仅有标识符 c。

### 块级作用域

块级作用域可通过新增命令 let 和 const 声明，所声明的变量在指定块的作用域外无法被访问。块级作用域在如下情况被创建：

1. 在一个函数内部
2. 在一个代码块（由一对花括号包裹）内部

let 声明的语法与 var 的语法一致。你基本上可以用 let 来代替 var 进行变量声明，但会将变量的作用域限制在当前代码块中。块级作用域有以下几个特点：

- 声明变量不会提升到代码块顶部

let/const 声明并不会被提升到当前代码块的顶部，因此你需要手动将 let/const 声明放置到顶部，以便让变量在整个代码块内部可用。

**无论 fn 函数将在哪里调用**。

所以，不要在用以上说法了。相比而言，用这句话描述会更加贴切:**要到创建这个函数的那个域”。
作用域中取值,这里强调的是“创建”，而不是“调用”**，切记切记——其实这就是所谓的"静态作用域"

```javascript
var a = 100
function fn() {
    var b = 200
    console.log(a) // 这里的a在这里就是一个自由变量
    console.log(b)
}
fn()
```

 

```js
var a = 100
function F1() {
    var b = 200
    function F2() {
        var c = 300
        console.log(a) // 自由变量，顺作用域链向父作用域找
        console.log(b) // 自由变量，顺作用域链向父作用域找
        console.log(c) // 本作用域的变量
    }
    F2()
}
F1()
```



```js
var x = 10
function fn() {
  console.log(x)
}
function show(f) {
  var x = 20
  (function() {
    f() //10，而不是20
  })()
}
show(fn)//调用fn（）在全局作用域调用，所以是10
```



```js
var a = 10
function fn() {
  var b = 20
  function bar() {
    console.log(a + b) //30
  }
  return bar
}
var x = fn(),
  b = 200
x() //bar()
```

[深入理解JavaScript作用域和作用域链 - Fundebug - 博客园](https://www.cnblogs.com/fundebug/p/10535230.html)

## 变量的提升

当我们使用未定义的变量时，存在变量提升的情况。

1.所有的声明都会提升到作用域的最顶上去。

2.同一个变量只会声明一次，其他的会被忽略掉或者覆盖掉。

3.函数声明的优先级高于变量声明的优先级，并且函数声明和函数定义的部分一起被提升。

## JS的数据类型



<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225162142.png" alt="image-20211225162142829" style="zoom:67%;" />**8种基本数据类型：**
		Undefined、Null、Boolean、Number、String、Symbol(es6新增，表示独一无二的值)和BigInt(es10新增，是指安全存储、操作大整数。但是很多人不把这个做为一个类型)
**1种引用数据类型**
			Object（Object本质上是由一组无序的名值对组成的）。里面包含 function、Array、Date等。
JavaScript不支持任何创建自定义类型的机制，而所有值最终都将是上述 8 种数据类型之一。
**原始数据类型**：直接存储在栈（stack）中，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。
**引用数据类型**：同时存储在栈（stack）和堆（heap）中，占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

## NULL和undefined区别

当我们对两种类型使用 

typeof 进行判断的时候，Null 类型化会返回 “object”，这是一个历史遗留的问题。

当我们使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

```js
console.log(typeof(undefined))//undenfined
console.log(typeof(null))//object
console.log(null===undefined)//false
console.log(null==undefined)//true
```

## JS关键字typeof、instanceof、constructor判断类型

### 1.typeof返回的是类型名包括以下 7 种：

number、boolean、symbol、string、object、undefined、function 等，(array,null除外)

```js
typeof ''; // string 有效
typeof 1; // number 有效
typeof Symbol(); // symbol 有效
typeof true; //boolean 有效
typeof undefined; //undefined 有效
--------------------------------
typeof null; //object 无效
typeof [] ; //object 无效
-----------------------------
typeof new Function(); // function 有效
typeof new Date(); //object 无效
typeof new RegExp(); //object 无效
```

###  2.instanceof返回值真则返回true,否则返回 false

```js
[] instanceof Array; //true
{} instanceof Object;//true
new Date() instanceof Date;//true
------------------------------------
[] instanceof Object; //true   //也认为是Object的实例
-----------------------------------
var num=123;
document.write(num instanceof Number); //false
document.write(typeof str2)  //true
var num=new Number(123);
document.write(num instanceof Number); //true
我们发现，虽然 instanceof 能够判断出 [ ] 是Array的实例，但它认为 [ ] 也是Object的实例
```

### 3.constructor  默认返回的是类型（三者中最好的

> let str="abcd";
>
> str.constructor    //返回值：function String() { [native code] }
>

```js
1 ''.constructor == String    //true
 2 new Number(1).constructor == Number   //true
 3 new Function().constructor == Function  //true
 4 true.constructor == Boolean   //true
 5 new Date().constructor == Date  //true
 6 
 7 new Error().constructor == Error    //true
 8 [].constructor == Array    //true
 9 document.constructor == HTMLDocument    //true
10 window.constructor == window  //false
console.log('abc'.constructor) ƒ String() { [native code] }
console.log([].constructor)ƒ Array() { [native code] }
//可以通过截取字符串拿到类型关键字进行判断
```

### 4.toString 

toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。

对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。

```js
Object.prototype.toString.call('') ;   　　　　// [object String]
Object.prototype.toString.call(1) ;   　　 　　// [object Number]
Object.prototype.toString.call(true) ;　　 　　// [object Boolean]
Object.prototype.toString.call(Symbol()); 　　//[object Symbol]
Object.prototype.toString.call(undefined) ;  // [object Undefined]
Object.prototype.toString.call(null) ; 　　　　// [object Null]
Object.prototype.toString.call(new Function()) ; // [object Function]
Object.prototype.toString.call(new Date()) ; 　　// [object Date]
Object.prototype.toString.call([]) ; 　　　　　　　　// [object Array]
Object.prototype.toString.call(new RegExp()) ; 　　// [object RegExp]
Object.prototype.toString.call(new Error()) ; 　　// [object Error]
Object.prototype.toString.call(document) ; 　　// [object HTMLDocument]
Object.prototype.toString.call(window) ;//[object global] window 是全局对象 global 的引用
```

### 5.原生原型扩展函数

     接下来我们就用到另外一个利器：return Object.prototype.toString.call(arr);
     这是对象的一个原生原型扩展函数,用来更精确的区分数据类型。
```js
var   gettype=Object.prototype.toString
gettype.call('aaaa')        输出      [object String]
gettype.call(2222)         输出      [object Number]
gettype.call(true)          输出      [object Boolean]
gettype.call(undefined)  输出      [object Undefined]
gettype.call(null)                  输出   [object Null]
gettype.call({})                   输出   [object Object]
gettype.call([])                    输出   [object Array]
gettype.call(function(){})     输出   [object Function]
```

## 深拷贝与浅拷贝

主要针对于引用数据类型参数说的，浅拷贝表示仅拷贝引用地址，深拷贝表示对于对象的克隆

> 实现深拷贝的方法：
>
> 1. 我们怎么去实现深拷贝呢，这里可以递归递归去复制所有层级属性。这里再次强调，深拷贝，是拷贝对象各个层级的属性   封装一个函数，然后递归复制
>
> 2. 除了递归，我们还可以借用JSON对象的parse和stringify
>
> 			JSON.stringify与JSON.parse除了实现深拷贝，还能结合localStorage实现对象数组存储
>
> 3. 除了上面两种方法之外，我们还可以借用JQ的extend方法
>
> 	```js
> 	$.extend( [deep ], target,  object1 [, objectN ] )
> 	//deep表示是否深拷贝，为true为深拷贝，为false，则为浅拷贝
> 	```
>
> 4. Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。但是     Object.assign() 进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身 当为一层的时候可以
>
> 5. 使用Object.create()方法 
>
> 			直接使用var newObj = Object.create(oldObj)，可以达到深拷贝的效果。
>
> 6.  es6的扩展符号

## JavaScript 的装箱与拆箱

所谓装箱，就是把基本数据类型转换为对应的引用类型的过程。而拆箱与装箱相反，即把引用类型转换为基本的数据类型。

```js
const str = "Uni";
console.log(str.length);
//这个是很常用的一个东西，但是我们想一想，str的类型是string的一个基本类型，它的值是存在栈里面的，栈内存的空间是固定的，那为什么可以进行.length这种获取对象属性的操作呢？str并不是一个对象啊！
```

### 装箱

简单来说就是将基本数据类型转换为对应的引用类型的操作

#### 显示装箱

显示装箱非常简单，就是通过内置对象或者说基本包装类型对基本数据类型进行操作。

```js
 const name = new String("Uni");
 String.prototype.age = "20";
 console.log(name.age);
 //这时候我们的name是一个对象，能够调用相应的方法或者原型链上的方法。比如：
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225172652.webp)

其中`length`是一个不可枚举属性。

#### 隐式装箱

刚刚我们看了`显示装箱`的例子，知道`length`是`String`类型实例化后不可枚举的属性（当然`String`自身也有`length`属性）。那我们普通字面量形式声明的字符串，为什么也能调用`length`属性呢？

对于这段代码：

```js
  const name = "Uni";
  const len = name.length;
```

在JS引擎中其实是这样的：

```js
  const name = "Uni";
  let newName = new Object(name);
  const len = newName.length;
  newName = null;
```

只不过上述的一切都是在访问`name.length`的一瞬间完成的，访问结束便立马销毁为获取`length`而生成的实例。

> 总结一下隐式装箱的步骤便是：
>
> - 创建一个对应类型的实例
> - 在实例中调用需要的方法或属性
> - 销毁这个实例



由于经常打算法，获取某个字符串的长度这种场景经常发生。我突然就想，我们每次访问某个字符串字面量的`length`属性时，都会这样隐式装箱，会不会非常耗费性能？比如：

```js
  const str = "abc";
  
  for (let i = 0; i < str.length; ++i) {
    console.log(str[i]);
  }
```

每次去判断`i`的时候都要隐式装箱获取`str`的长度。那我是不是先显示装箱讲长度取出来，存好就能够降低性能了？比如这样：

```js
  const str = "abc";
  const len = new String(str);//这种方式在编程我常见，就很奇怪
  for (let i = 0; i < len; ++i) {
    console.log(str[i]);
  }
```

为了验证我的想法，上网搜集资料后发现，我这样做反而会降低性能！原来是浏览器对于这些常用的一些隐式装箱有着一定的预先处理，为的就是减少性能损耗。所以我们这样操作反而会聪明反被聪明误，会降低JS的执行效率...

### 拆箱

拆箱，就是装箱的反向操作，指的是将引用类型转换为对应的基本类型。常用的就是引用类型的`valueOf`和`toString`两个方法。

```js
var objNum = new Number(64);
var objStr = new String('64');
console.log(typeof objNum); // object
console.log(typeof objStr); // object
# 拆箱
console.log(typeof objNum.valueOf()); // number 基本的数字类型，想要的
console.log(typeof objNum.toString()); // string 基本的字符类型，不想要的
console.log(typeof objStr.valueOf()); // string 基本的数据类型，不想要的
console.log(typeof objStr.toString()); // string 基本的数据类型，想要的
```

所以，在进行拆箱操作的过程中，还得结合下实际的情况进行拆箱，别盲目来 -- 吃力不讨好就很尴尬了

## 理解valueOf和toString

- 这两个方法都为对象的原始方法
- valueof为对象的原始值,通常不会显示的调用,通常由Js自动在后台进行调用
- toStrting本身的一个作用是做字符串的转换,也会进行自动调用
- 如果我们重写了这两个方法,在进行运算时,优先调用valueof,在进行显示时,优先调用toString
- 比如我们只量写了一个方法,那么无论是运算还是显示,都会调用该方法

```js
var obj = {
    num: 1,
    toString: function() {
        console.log('调用了toString方法');
        return this.num + 2;
    },
    valueOf: function() {
        console.log('调用了valueOF方法');
        return this.num++;
    },
}
console.log(obj == 2); //两个都重写，优先调用valueOf,返回原值1，然后原值执行valueOf方法加一
console.log(obj == 2);
console.log(obj);
// alert(obj);//值为5，执行了两次valueOf
```

可以通过valueof实现一个累加的实例,每次调用obj时, valueof方法都会被调用因为num在value0f中被引用,所以不会被垃圾回收机制回收

```js
var obj = {
    num: 1,
    toString: function() {
        return this.num + 100;
    },
    valueOf: function() {
        return this.num++;
    }
}
console.log(obj == 1)
console.log(obj == 2)
console.log(obj == 3)
console.log(Number(obj))
```

运行结果：

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225174318.png)

 当没有重写valueOf方法的时候

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225174327.png)



## 类型转换

### 自动装箱（隐式装箱）

ECMAScript还提供了三个特殊的引用类型，基本包装类型，String、Boolean、Number。

自动装箱就是临时创建一个包装对象，将原始类型的值包装起来，以便可以调用包装对象的函数，但是原来那个变量的值不会进行改变。

```js
var s1 = "some text";
var s2 = s1.substring(2);
------------------------------------
//等价于
var s1 = new String("some text");
var s2 = s1.substring(2);
s1 = null;
```

### 手动装箱

当然，你可以将Boolean 、Number 、String 这三个函数当作构造函数来使用，通过手动new包装类来装箱（得到包装对象）：

```js
// 手动装箱
var s1 = new String("some text");  
s1.toUpperCase();
typeof s1;  
// "object"
```

### 类型转换的规则

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225221603.webp)

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225221717.webp" alt="img" style="zoom:80%;" />

### 内部类型转换的四个函数

#### 4.1ToPrimitive(转换为原始值)

```js
/**
* @obj 需要转换的对象
* @type 期望转换为的原始数据类型，可选
*/
ToPrimitive(obj,type)
```

type可以为number或者string，两者的执行顺序有一些差别
 	**string:**

1. 调用obj的toString方法，如果为原始值，则返回，否则下一步

2. 调用obj的valueOf方法，后续同上

3. 抛出TypeError 异

	**number:**

1. 调用obj的valueOf方法，如果为原始值，则返回，否则下一步
2. 调用obj的toString方法，后续同上
3. 抛出TypeError 异常

其实就是调用方法先后，毕竟期望数据类型不同，如果是string当然优先调用toString。反之亦然。
 当然type参数可以为空，这时候type的默认值会按照下面的规则设置

1. 该对象为Date，则type被设置为String
2. 否则，type被设置为Number

对于Date数据类型，我们更多期望获得的是其转为时间后的字符串，而非毫秒值，如果为number，则会取到对应的毫秒值，显然字符串使用更多。 其他类型对象按照取值的类型操作即可。

概括而言，ToPrimitive转成何种原始类型，取决于type，type参数可选，若指定，则按照指定类型转换，若不指定，默认根据实用情况分两种情况，Date为string，其余对象为number。那么什么时候会指定type类型呢，那就要看下面两种转换方式了。

#### 4.2 ToBoolean ( argument )

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/8/16e469ab9900f5b0~tplv-t2oaga2asx-watermark.awebp)

#### 4.3 ToNumber( argument )



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/8/16e469f075863dd1~tplv-t2oaga2asx-watermark.awebp)

#### 4.4 ToString( argument )![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/8/16e46a014b25ba35~tplv-t2oaga2asx-watermark.awebp)

### 显示类型转换(包装器)

手动调用Boolean(value)、Number(value)、String(value)完成的类型转换。

```js
Boolean('some text');  //  true
Number("2019");  //  2019
String({a: 1});  //  "[object Object]"
```

前面两个类型转换没有什么好解释的，我们看看最后一个String({a: 1});在内部发生的时候

1. 执行转换String({a: 1})。

2. 执行内部的ToString({a: 1})。

3. {a: 1}不是原始类型，执行ToPrimitive({a: 1}, hint string)。

4. 调用toString方法，返回"[object, object]"。

5. 执行ToString("[object, object]")，返回"[object, object]"。

	![image-20211226000010746](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226000010.png)

### 隐式类型转换（调用四个函数）

在执行过程中当js内部期望得到某种类型的值，而实际在那里的值是其他的类型，就会发生隐式类型转换。系统内部会自动调用我们前面说ToBoolean ( argument )、ToNumber ( argument )、ToString ( argument )，尝试转换成期望的数据类型。

#### 5.1 期望得到boolean的值

```js
if ( !undefined && !null && !0 && !NaN && !'') {
  // xxxx
} 
```

因为在if的括号中，js期望得到boolean的值，所以对括号中每一个值都使用ToBoolean ( argument )，将它们转化成boolean。

#### 5.2 期望得到number的值

```js
3 * { valueOf: function () { return 5 } }; 
```

因为在乘号的两端，js期望得到number类型的值，所以对右边的那个对象使用ToNumber ( argument )，得到结果5，再与乘号左边的3相乘。

#### 5.3运算隐式转换

##### +运算

- 如果有一边是字符串，就把另外一边也转换为字符串
- 如果一方不是字符串或者数据，就转换为数据或者字符串

除了加号运算符，其他运算符，只要其中一方数据，那么另一方就被转换为数字

> **规则如下：**
>
> +号左右分别进行取值，进行ToPrimitive()操作
>
> 分别获取左右转换之后的值，如果存在String，则对其进行ToString处理后进行拼接操作。
>
> 其他的都进行ToNumber处理
>
> 在转换时ToPrimitive，除去Date为string外都按照ToPrimitive type为Number进行处理 说的自己都迷糊了快，一起结合代码来看一下

> 例子1：
>
> ```js
> 1+'2'+false
> ```
>
> 1. 左边取原始值，依旧是Number
>
> 2. 中间为String，则都进行toString操作
>
> 3. 左边转换按照toString的规则，返回'1'
>
> 4. 得到结果temp值'12'
>
> 5. 右边布尔值和temp同样进行1步骤
>
> 6. temp为string，则布尔值也转为string'false'
>
> 7. 拼接两者 得到最后结果 '12false'
>
> 	---------------------------------------------------------------------------------------------------------------------------
>
> 例子2：
>
> ```js
> var obj1 = {
>     valueOf:function(){
>         return 1
>     }
> }
> var obj2 = {
>     toString:function(){
>         return 'a'
>     }
> }
> //2
> console.log(1+obj1)
> //1a
> console.log(1+ obj2)
> //1a
> console.log(obj1+obj2)
> ```
>
> 不管多复杂，按照上面的顺序来吧。
>
> - 1+obj1
>
> 	1. 左边就不说了，number
> 	2. 右边obj转为基础类型，按照type为number进行
> 	3. 先调用valueOf() 得到结果为1
> 	4. 两遍都是number，则进行相加得到2
> - 1+obj2
>
> 	1. 左边为number
> 	2. 右边同样按照按照type为number进行转化
> 	3. 调用obj2.valueOf()得到的不是原始值
> 	4. 调用toString() return 'a'
> 	5. 依据第二条规则，存在string，则都转换为string进行拼接
> 	6. 得到结果1a
> - obj1+obj2
>
> 	1. 两边都是引用，进行转换 ToPrimitive 默认type为number
> 	2. obj1.valueOf()为1 直接返回
> 	3. obj2.valueOf()得到的不是原始值
> 	4. 调用toString() return 'a'
> 	5. 依据第二条规则，存在string，则都转换为string进行拼接
> 	6. 得到结果1a




##### == 抽象相等比较

这种比较分为两大类，

- 类型相同
- 类型不同 相同的就不说了,隐式转换发生在不同类型之间。规律比较复杂，规范比较长，这里也不列举了，[大家可以查看抽象相等算法](https://link.juejin.cn?target=http%3A%2F%2Fyanhaijing.com%2Fes5%2F%23104)。简单总结一句，相等比较就不想+运算那样string优先了，是以number优先级为最高。概括而言就是，都尽量转成number来进行处理，这样也可以理解，毕竟比较还是期望比较数值。那么规则大概如下：

	 对于x == y

1. 如果x,y均为number，直接比较

	```js
	 没什么可解释的了
	 1 == 2 //false
	```

2. 如果存在对象，ToPrimitive() type为number进行转换，再进行后面比较

	```js
	var obj1 = {
	    valueOf:function(){
	        return '1'
	    }
	}
	1 == obj1  //true
	//obj1转为原始值，调用obj1.valueOf()
	//返回原始值'1'
	//'1'toNumber得到 1 然后比较 1 == 1
	[] == ![] //true
	//[]作为对象ToPrimitive得到 ''  
	//![]作为boolean转换得到0 
	//'' == 0 
	//转换为 0==0 //true
	```

3. 存在boolean，按照ToNumber将boolean转换为1或者0，再进行后面比较

	```js
	//boolean 先转成number，按照上面的规则得到1  
	//3 == 1 false
	//0 == 0 true
	3 == true // false
	'0' == false //true 
	```

4. 如果x为string，y为number，x转成number进行比较

	```js
	//'0' toNumber()得到 0  
	//0 == 0 true
	'0' == 0 //true 
	```

## 循环控制语句

### break终止循环

​        当j为5的时候，终止标签为j1的循环，即，j1循环只会执行到j=4的时候

```js
i1: for (var i = 1; i < 10; i++) {undefined
    j1: for (var j = 1; j < 20; j++) {undefined
        if (j == 5)
            break j1;
        console.log("i为" + i + "，j为" + j);
    }
    console.log("-----")
}
```

 <img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225230135.png" alt="img" style="zoom: 67%;" />

###  contiune退出当前循环

​      当j为5的时候，终止标签为j1的当前循环，即，j1标签除了j=5不执行，其余全部执行

```js
i1: for (var i = 1; i < 10; i++) {undefined
    j1: for (var j = 1; j < 20; j++) {undefined
        if (j == 5)
            continue j1;
        console.log("i为" + i + "，j为" + j);
    }
    console.log("-----")
}
```

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225230158.png" alt="img" style="zoom:67%;" />

### Label语句

使用label语句可以在代码中添加标签，以便将来使用  就是上面代码的**i1  j1**

## 对象

![image-20211225231055757](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225231055.png)

## JS创建对象的几种方法

我们一般使用字面量的形式直接创建对象，但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。但 js和一般的面向对象的语言不同，在 ES6 之前它没有类的概念。但是我们可以使用函数来进行模拟，从而产生出可复用的对象创建方式，我了解到的方式有这么几种：

### 一、工厂模式

第一种是工厂模式，工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226201926.png)

```js
// 1.工厂模式
// 区分不清对象和原型的联系
function Dog(name, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    return obj;
}
var d1 = Dog('xiaobai', 2);
var d2 = Dog('xiaohei', 1);
console.log(d1, d2);//{ name: 'xiaobai', age: 2 } { name: 'xiaohei', age: 1 }
```

缺点：类型无法区分，所有通过该方式创造的对象的构造函数都是Object.

### 二、构造函数模式

第二种是构造函数模式。js 中每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的，那么我们就可以把它称为构造函数。构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此我们可以通过原型来识别对象的类型。

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226202042.png)

```js
// 2、构造函数
function Dog1(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
            console.log(this.name);
        } //每次创建对象，都会创建一个新的函数，可以单独拿出来，但是封装性变差了
```

缺点：造成了不必要的函数对象的创建

### 三、原型模式

第三种模式是原型模式，因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此我们可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么

所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226202148.png)        

```js
// 3.原型模式
console.log('原型模式');
 
function Dog2() {}
// 在prototype中定义的属性和方法，所有的实例都共享
Dog2.prototype.name = 'xiaobai';
Dog2.prototype.age = 2;
Dog2.prototype.sayName = function() {
    console.log(this.name);
}
var dog1 = new Dog2();
console.log(dog1);
dog1.sayName();
dog1.name = 'lisi';
dog1.sayName();
console.log(dog1);
```

### 四、构造函数模式和原型模式

第四种模式是组合使用构造函数模式和原型模式，这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此我们可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，

因为使用了两种不同的模式，所以对于代码的封装性不够好。

​                 ![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226202305.png)        

```js
// 4.组合模式
// ES5中比较完美的
function Dog4(name, age) {
    this.name = name;
    this.age = age;
    this.arr = []; //重复创建，不会出现影响
}
Dog4.prototype.sayName = function() {
    console.log(this.name);
}
```

## prototype、proto、constructor三者的关系

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226101227.png" alt="img" style="zoom:67%;" />

### 一、prototype

在JavaScript中，每个函数都有一个prototype属性，这个属性指向函数的原型对象。

### 二、__proto__

这是每个对象(除null外)都会有的属性，叫做__proto__，这个属性会指向该对象的原型。

### 三、constructor

每个原型都有一个constructor属性，指向该关联的构造函数。

### 四、实例与原型

 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

## 原型链

 简单的回顾一下构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么假如我们让==原型对象等于另一个类型的实例==，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念。——摘自《javascript高级程序设计》

**子构造函数的原型指向父构造函数的实例**

### 总结：

当我们创建一个构造函数的时候这个构造函数自带了一个prototype属性，而这个属性指向一个对象，也就是原型对象。 这个原型对象里面有一个constructor构造器，它的作用是指向创建自己的构造函数。

除此之外 prototype还可以存放公共的属性和方法。 

当我们实例化一个对象的时候(被new调用的时候)，这个对象自带了一个 proto 属性，

这个proto 指向创建自己的构造函数的原型对象。可以使用这个原型对象里面的属性和方法



## js继承方式及其优缺点

**所有的对象都直接或是间接继承Object**

### 一、原型继承

每个构造函数都有一个原型对象，原型对象中都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。当原型对象等于另外一个类型的实例即继承。

**核心**：将父类的实例作为子类的原型(并不是把父类中的属性和方法克隆一份一模一样的给子类，而是让子类父类之间增加了原型链接)
    **特点**：父类中私有的和公有的都继承到了子类原型上(子类公有的)
    **缺点**：如果某一个构造函数实例对象修改了原型对象上的属性值和方法,则也会影响其他实例对象

```js
//定义父构造函数类型
	function Animal(){
     this.name = "animal"	
	}
	Animal.prototype = {
     sayName : function(){
         console.log(this.name);
     }
	}
//定义子类类型
function Dog(){
 this.color = "灰色"
}
	//通过将子对象的原型对象指向父对象的一个实例来完成继承
	Dog.prototype = new Animal();
	Dog.prototype.constructor = Dog;
```

> 子构造函数的原型指向父构造函数的实例
>
> 子构造函数Dog的原型指向父构造函数Animal的实例
>
> Dog.prototype = new Animal();//嫁给有钱人家的孩子
>
> Dog.prototype.constructor = Dog;//建立起夫妻关系

### 二、经典继承

也称 "伪造对象" 或 ”借用构造函数",在子类型构造函数的内部调用超类型构造函数。函数不过是在特定环境中执行代码的对象，因此通过apply(),call()方法可以在（将来）新建对象上执行构造函数,即在子类型对象上执行父类型函数中定义的所有对象初始化的代码。结果每个子类实例中都具有了父类型中的属性以及方法

==**核心：**==使用父类的构造函数来增强子类实例
    ==**特点**：==把父类私有的属性和方法，克隆一份一样的给子类私有的属性，Father执行的时候，把Father的中的this换成Son的实例，由于并不是new Father，所以Father.prototype上的属性无关
    ==**缺点**==：但没有原型,则复用无从谈起

```js
function Animal(name){
  	this.name = name;
  	this.colors = ["red","gray"];
}
function Dog(name){
  //继承了Animal（执行构造函数,换成这里的对象）
  	Animal.call(this,name);
  	this.color = "gray";
}
Animal.prototype.sayName = function(){
  alert(this.name);
}
```

### 三、组合函数（原型链继承+经典继承）

组合函数(原型链继承+经典继承)

也称“伪经典继承”，将原型链和借用构造函数的技术组合在一起。原理是：使用原型链实现对原型属性和方法的继承，而通过借用构造函数实现对实例属性的继承。

==**核心：**==通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
    ==**特点：**==把父类私有的和公有的都变成了子类共有的，但是调用了【两次父类构造函数】，生成了两份实例
    原型链实现对原型属性和方法的继承,而通过借用构造函数来实现对实例属性的继承

```js
function Animal(name){
  	this.name = name;
  	this.colors = ["red","gray"];
}
Animal.prototype.sayName = function(){
  	alert(this.name);
}

function Dog(name){
  	//经典继承，继承了Animal（属性）
  	Animal.call(this,name);
  	this.color = "gray";
}
//原型链继承，继承了方法
Dog.prototype = new Animal();
Dog.prototype.constructor = Animal;
//原理是：使用原型链实现对原型属性和方法的继承，而通过借用构造函数实现对实例属性的继承
```

### 四、原型式继承

创建一个函数，将参数作为一个对象的原型对象

```js
function fun(obj) {
    function Son4() {}; //构造函数
    Son4.prototype = obj; //对象的原型对象
    return new Son4(); //
}
var son4_1 = fun(Father);
var son4_2 = fun(Father);
console.log(son4_1) //Function {}
console.log(Father.prototype.isPrototypeOf(son4_1)) //false 
console.log(son4_1 instanceof Father) //false
console.log(son4_1 instanceof fun) //false
    // 创建一个函数fun，内部定义一个构造函数Son
    // 将Son的原型对象设置为参数，参数是一个对象，完成继承
    // 将Son实例化后返回，即返回的是一个实例化对象
    // 优缺点：跟原型链类似
```

### 五、寄生继承

1. 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。*

2.  可以理解为在原型式继承的基础上新增一些函数或属性*

	```js
	// (1)原型式继承
	function Createobj(obj) {
	    function Son5() {};
	    Son5.prototype = obj;
	    return new Son5();
	}
	// 上面CreateObj函数 在ECMAScript5 有了一新的规范写法，Object.create(ob) 效果是一样的 , 看下面代码
	var son5_1 = Createobj(Father);
	var son5_2 = Object.create(Father);
	console.log(son5_1.name); // Father
	console.log(son5_2.name); // Father
	// (2)开始寄生继承
	function Jicheng(obj) {
	    // var newobj = Createobj(obj); 两种方式都可以
	    var newobj = Object.create(obj); //写了这个就可以不用上面的了
	    newobj.sayName = function() {
	            console.log("我的名字" + this.name);
	        } //增强对象
	    return newobj; //指定对象
	}
	 
	var son5_3 = Jicheng(Father);
	son5_3.sayName()
	```

### 六、寄生组合

详细可参考博客**https://blog.csdn.net/weixin_44211097/article/details/120668011?spm=1001.2014.3001.5501**



## 对象的检测属性

==**in**== 检测某属性是否是某对象的自有属性或者是继承属性

==**Object.prototype.hasOwnProperty()**==检测给定的属性是否是对象的自有属性，对于继承属性将返回false

==**Object.prototype.propertyIsEnumerable()**== 检测给定的属性是否是该对象的自有属性，并且该属性是可枚举的。通常由JS代码创建的属性都是可枚举的，但是可以使用特殊的方法改变可枚举性。

```js
var obj={
    name:'zhangsan'
}
console.log('toString' in obj);//true
console.log(obj.hasOwnProperty('toString'));//false
console.log(obj.propertyIsEnumerable('toString'));//false
```

## 检测对象是否为一个家族

==**isPrototypeOf**== 方法用于测试一个对象是否存在于另一个对象的原型链上。(原型指向)

==**instanceof**== 运算符用来检测一个对象是否是某个构造函数(类型)的实例(new)

```js
function Animal(){}
var o1 = new Animal();
function dog(){}
dog.prototype = new Animal();
var o2= new dog();
// console.log(Object.prototype.isPrototypeOf());
console.log(Animal.prototype.isPrototypeOf(o2));//true
console.log(o1 instanceof Animal);//true
```

## 如何为对象的属性进行描述

![image-20211226000101162](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226000101.png)

### 数据属性

==**Object.defineProperty()**== 设置属性

==**Object.getOwnPropertyDescriptor(obj,’xx’)**==知道某个属性的原始属性

==**Object.defineProperties(obj,{xx:{},xx:{}})**==一次性设置多个属性

```js
var obj = {
        name: 'zs',
        age: 12,
        sex: '男'
    }
    // 只能设置某一个对象中的【某一个】属性的原始属性
Object.defineProperty(obj, 'name', {
    configurable: false,
    enumberable: false,
    writable: false,
    value: 'lisi'
})
console.log(obj); //运行结果：{ name: 'lisi', age: 12, sex: '男' }
delete obj.name; //不可被删除
obj.name = 'xm'; //不可以被修改
------------------------------------------
// 知道某个属性的原始属性Object.getOwnPropertyDescriptor
var res = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(res);
// 运行结果：
// {
//     value: 'lisi',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   }
// ------------------------------------
// 一次设置对象的多个属性的原始属性
Object.defineProperties(obj, {
    age: {
        configurable: false
    },
    sex: {
        configurable: false
    }
})
```

### 构造器属性

```js
// 构造器属性
//在对象中,我们可能会设置一些比较奇怪的属性num,这种属性我们称为构造器属性.
// 这种属性我们不希望直接去通过外部访问 obj._num
//我们希望首已去控制这个鼠性的访问逻辑 obj. num可以访问到然后对它进行一些逻辑改变
var obj = {
        _num: 0
    }
    // obj.num可以访问到，返回数字：0
Object.defineProperty(obj, 'num', {
    // 当我们没有设置这2个属性的时候，默认是隐式调用，如果设置了，会调用你设置的方法
    set(num) {
        this._num = num;
    },
    get() {
        return '数字：' + this._num
    }
})
console.log(obj.num);//运行结果：数字：0
```

## 对象的序列化JSON

### 什么是JSON？

JSON（JavaScript Object Notation）是一种轻量级，完全独立于语言的数据交换格式。目前被广泛应用在前后端的数据交互中。在JavaScript中的应用随处可见，灵活性、扩展性、可读性也是最强的！对应的`JSON.parse`与`JSON.stringify`就可以看做是对象的序列化和反序列化，将对象与字符串之间相互转换。

### 序列化与反序列化

> 互联网的产生带来了机器间通讯的需求，而互联通讯的双方需要采用约定的协议，序列化和反序列化属于通讯协议的一部分。通讯协议往往采用分层模型，不同模型每层的功能定义以及颗粒度不同，例如：TCP/IP 协议是一个四层协议，而 OSI 模型却是七层协议模型。在 OSI 七层协议模型中展现层（Presentation Layer）的主要功能是把应用层的对象转换成一段连续的二进制串，或者反过来，把二进制串转换成应用层的对象 -- 这两个功能就是序列化和反序列化。一般而言，TCP/IP 协议的应用层对应与 OSI 七层协议模型的应用层，展示层和会话层，所以序列化协议属于 TCP/IP 协议应用层的一部分。本文对序列化协议的讲解主要基于 OSI 七层协议模型。

- 序列化： 将数据结构或对象转换成二进制串的过程。
- 反序列化：将在序列化过程中所生成的二进制串转换成数据结构或者对象的过程。

简单来说，序列化是将对象转换成字节流的过程，而反序列化的是将字节流恢复成对象的过程。两者的关系如下：

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225233344.webp)



不同的计算机语言中，数据结构、对象以及二进制串的表示方式并不相同。如Java/JavaScript中使用的是对象（Object），来自类的实例化。而C是用struct去表示数据解构，或根据指针的偏移量在内存中读取数据。C++则是Java方式或C方式均可，因为C++比C强化了class的概念。

### JSON的parse与stringify

`JSON.stringify(value[, replacer [, space]])`：用来将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串，如果指定了 replacer 是一个函数，则可以选择性地替换值，或者如果指定了 replacer 是一个数组，则可选择性地仅包含数组指定的属性。

`JSON.parse(text[, reviver])`：用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换(操作)。

```js
var json_str = '{"name":"zhangsan","sex":"男"}'
console.log(JSON.parse(json_str))//{ name: 'zhangsan', sex: '男' }
JSON.stringify()//将对象序列化为Json字符串,只能序列化对象可枚举的自有属性
```

你可能已注意到，JSON的stringify比parse多了一段[描述](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FJSON%2Fstringify%23%E6%8F%8F%E8%BF%B0)：

> - 转换值如果有toJSON()方法，该方法定义什么值将被序列化。
> - 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
> - 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
> - undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。函数、undefined被单独转换时，会返回undefined，如JSON.stringify(function(){}) or JSON.stringify(undefined).
> - 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
> - 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
> - Date日期调用了toJSON()将其转换为了string字符串（同Date.toISOString()），因此会被当做字符串处理。
> - NaN和Infinity格式的数值及null都会被当做null。
> - 其他类型的对象，包括Map/Set/weakMap/weakSet，仅会序列化可枚举的属性。

这段描述说明了，在JSON.stringify序列化时哪些数据会被保留、转换、忽略。所以前端项目里一定会在接口请求层里对undefined和null进行屏蔽：

```js
const body = JSON.stringify(params, (k, v) => {
    if (v !== null && v !== undefined) {
      return v;
    }
});
```

同样在axios请求响应后，对response data里的undefined和null进行屏蔽：

```js
import axios from 'axios';
import { ResponseData } from '../defines';

// axios.defaults.timeout = 10000;

const parseJSON = (response: any) => {
  // 先对Object进行序列化，再有条件的反序列化
  const dataString = JSON.stringify(response);
  const dataObj = JSON.parse(dataString, (k: any, v: any) => {
    if (v === null) {
      return undefined;
    }
    return v;
  });
  return dataObj;
};

const parseResponse = (response: any) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  return {};
};

export const request = async (options: any): Promise<ResponseData> => {
  try {
    const resp = await axios(options);
    const data = await parseResponse(resp);
    return parseJSON(data);
  } catch (err) {
    return Promise.resolve({
      code: 999,
      msg: '网络超时',
    });
  }
```

可参考[掘金](https://juejin.cn/post/6844904048701751303)



### qs的parse()和stringify()

一、qs.parse()将URL解析成对象的形式

```javascript
const Qs = require('qs');
let url = 'method=query_sql_dataset_data&projectId=85&appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0';
Qs.parse(url);
console.log(Qs.parse(url));
```

如上面代码所示,输出结果如下: 

![这里写图片描述](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225235146.png) 

二、qs.stringify()将对象 序列化成URL的形式，以&进行拼接

```javascript
const Qs = require('qs');
let obj= {
     method: "query_sql_dataset_data",
     projectId: "85",
     appToken: "7d22e38e-5717-11e7-907b-a6006ad3dba0",
     datasetId: " 12564701"
   };
Qs.stringify(obj);
console.log(Qs.stringify(obj));
```

 如上面代码所示,输出结果如下:

![这里写图片描述](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225235146.png)

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225235305.png" alt="img" style="zoom:80%;" />



## 数组检测

```js
arr instanceof Array  //结果为true，在同一个全局作用域下可以这么判断
Array.isArray(arr);  //结果为true，判断arr是否是数组类型
```

## 数组序列化(反序列化)

```js
var arr = ["terry","larry","boss"];    
arr.toString()  //terry,larry,boss 
var str = arr.join("|");  //terry|larry|boss  
var arr = str.split("|"); ["terry","larry","boss"];  //反序列化
```

## 数组排序方式

详细可以参考**https://juejin.cn/post/6844903878262177805**

### 普通数组排序

js中用方法sort()为数组排序。可以传入一个比较的函数(函数做为参数)，会改变原数组  原生的sort排序不定

```js
arr.sort(function(v1,v2){
			if(v1<v2)
				return -1
			else
				return 1
			})
```

### 冒泡排序

```js
for(var i=0; i<arr.length-1;i++){//排几次
        for(var j=0;j<arr.length-i-1;j++){//每轮排序的项的索引
            //如果前面比后面小，则交换2个数的位置
            if(arr[j]<arr[j+1]){//比如第一轮的arr[0]和arr[1]
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
```

### 快速排序

设置一个函数，获取一个数组的中间值，与这个数进行比较，设置2个数组，比它小放入left数组，比它大，放入right；然后把left和right再放到这个函数中，直到数组个数为1（递归）

### 插入排序

- 从第一个元素开始，该元素可以认为已经被排序； 
- 取出下一个元素，在已经排序的元素序列中从后向前扫描； 
- 如果该元素（已排序）大于新元素，将该元素移到下一位置； 
- 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置； 
- 将新元素插入到该位置后； 
- 重复步骤2~5。

### 选择排序

设置一个max索引为0，第一轮跟其他元素进行比较，确定最大的值，把索引赋值给max，然后将arr[max]和arr[0]交换。然后第二轮max为1，在跟他们元素比较，确定最大的值，把索引赋值给max，然后将arr[max]和arr[1]交换。

## 数组去重

```js
let arr = [1, 1, 2, 3, 4, 4, 4, 3, 3, 6, 5]
 
// 1.Set去重
function unique(arr) {
    console.log(Array.from(new Set(arr)))
}
unique(arr) //[ 1, 2, 3, 4, 6, 5 ]
    // ------------------------------------
    // 2. indexOf()去重
function unique1(arr) {
    let arr1 = [];
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr1.indexOf(arr[i]) === -1) {
            arr1.push(arr[i])
        }
    }
    console.log(arr1)
}
unique1(arr) //[ 1, 2, 3, 4, 6, 5 ]
    // ---------------------------------------
    // 3.利用数组的includes去重
function unique2(arr) {
    let arr_temp = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (!arr_temp.includes(arr[i])) {
            arr_temp.push(arr[i]);
        }
    }
    console.log(arr_temp)
}
unique2(arr) //[ 1, 2, 3, 4, 6, 5 ]
    // ------------------------------------------
    // 4.利用数组的filter方法去重
function unique3(arr) {
    // 如果新数组的当前元素的索引值 == 该元素在原始数组中的第一个索引，则返回当前元素
    let arr_temp = arr.filter((item, index) => {
        return arr.indexOf(item, 0) === index;
    })
    console.log(arr_temp)
}
unique3(arr) //[ 1, 2, 3, 4, 6, 5 ]
```

## 数组的深浅拷贝

浅拷贝(数组): (会改变原数组)

就是数组A重新赋值给数组B,数组B里的属性值被改变,则数组A里的值也会跟着发生改变。

深拷贝(数组): (不会改变原数组)

（1）使用slice() 和 concat()方法来实现深拷贝

（2）利用循环实现

## 可迭代或类数组转换为真数组

在我们开发过程中很多情况下能获取到类似数组的对象,有时候我们需要对这类数组进行操作（去调用数组的方法）此时我们就需要将类数组转换为真正的数组，以下提供几种转换方法

### 1.使用es6中的 Array.from()方法转换

```js
let list = {
    0 : 1,
    1 : 2,
    2 : 3,
    length : 3
}
let arr = Array.from(list);
console.log(arr);  // [1, 2, 3]
```

### 2.使用es6+ 扩展运算符

```js
// HTMLcontrion 伪数组集合  NodeList 伪数组集合
let arr = [...HTMLcontrion]
```

### 3.使用apply或者call

```js
let list = {
    0 : 1,
    1 : 2,
    2 : 3,
    length : 3
}

// apply
let arr = [].concat.apply([],list)
// call
let arr = Array.prototype.slice.call(list)
console.log(arr)
```

### 4.遍历类数组，将类数组元素依次放入一个新数组

```js
let list = {
    0 : 1,
    1 : 2,
    2 : 3,
    length : 3
}

let arr = [];

for(let item of list ){    arr.push(item)
}

console.log(arr); // [1,2,3]
```

## 可迭代（iterable）和类数组（array-like）

有两个看起来很相似，但又有很大不同的正式术语。请你确保正确地掌握它们，以免造成混淆。

Iterable 如上所述，是实现了 Symbol.iterator 方法的对象。

Array-like 是有==**索引**==和 ==**length 属性**==的对象，所以它们看起来很像数组。

```js
var obj = {
    0:'zhangsan',
    1:'lisi',
    2:'wangwu',
    length:3
}
```



## ==数组方法总结==

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226202715.png" alt="img" style="zoom:150%;" />

### 栈和队列的方法（改变原数组）

1. 栈  LIFO (Last-In-First-Out)

	==**pop()**==	移除数组中的最后一个项并且**返回该项**，同时将数组的长度减一，如果数组为空，则不改变数组，返 				undefined
	
	==**push()**==  可接受任意类型的参数，将它们逐个添加到数组的末尾，并**返回数组的长度**

2. 队列   FIFO (First-In-First-Out)

	==**shift()**==   移除数组中的第一个项并且**返回该项**，同时将数组的长度减一
	
	==**unshift()**==  在数组的前端添加任意个项，并**返回数组的长度**


​	

```js
//【pop()】 返回的是删除的元素
const arr = [1, 2, 3, 4];
const arr1 = [];

console.log(arr.pop()); // 4
console.log(arr1.pop()); // undefined
console.log(arr); // [ 1, 2, 3 ]
console.log(arr1); // []
--------------------------------
//【push()】 返回的是新增后数组的长度
const arr = [1, 2, 3, 4];

console.log(arr.push(5)); // 5
console.log(arr.push([1, 2])); // 6
console.log(arr); // [ 1, 2, 3, 4, 5, [ 1, 2 ] ]
--------------------------------
//【shift()】 返回的是删除的元素
const arr = [1, 2, 3, 4];

console.log(arr.shift()); // 1
console.log(arr); // [ 2, 3, 4 ]
----------------------------------
//【unshift()】返回的是新增后的数组长度
const arr = [1, 2, 3, 4];

console.log(arr.unshift(5, 6)); // 6
console.log(arr.unshift([1, 2])); // 7
console.log(arr); // [ [ 1, 2 ], 5, 6, 1, 2, 3, 4 ]
```

### 排序的方法（改变原数组）

==**sort()**==:对数组的元素进行排序，**并返回数组**。排序不一定是稳定的。默认排序顺序是根据字符串 Unicode 码点。

==**reverse()**==:颠倒数组中元素的位置，返回该数组的引用。

```js
//【sort()】
const arr = [1, 2, 3, 4, 10, 12, 22];
console.log(arr.sort()); // [ 1, 10, 12, 2, 22, 3, 4];
--------------------------------------
//【reverse()】返回该数组引用
var arr=[1,2,3,4]
arr.reverse()
console.log(arr)//[ 4, 3, 2, 1 ]
```

### 数组截取拼接（只有splice()改变数组）

==**concat()**==：数组拼接，先创建当前数组的一个副本，然后将接收到的参数添加到这个副本的末尾 

==**slice()**==:接收2个参数(start_index,end_index),返回该截取返回的元素。不会改变原数组

==**splice()**==:接收3个参数(start_index,length,替换或追加的元素)。会【改变原数组】,返回选中的元素。

```js
//【concat()】返回拼接后的数组副本，不改变原数组
var arr=[1,2,3,4]
arr.concat(5,6)
console.log(arr)//[1,2,3,4]
console.log(arr.concat(5,6))//[ 1, 2, 3, 4, 5, 6 ] 
--------------------------------
//【splice()】返回截取的元素
var arr=[13,1,15,7,52,34,27,21];
var arr3 = new_arr.slice(0,3);//13,1,15
--------------------------------
//【splice()】 返回截取的元素
var arr=[13,1,15,7,52,34,27,21];
console.log(arr.splice(2,3,8,8,8));//[ 15, 7, 52 ]
console.log(arr)//[ 13,1,8,8,8,34,27,21]
```

### 数组的迭代方法（不改变原数组）

==**every**== 全部成员都满足，才会返回true,**返回布尔值**

==**some**== 如果有一个元素满足条件，则表达式返回 `true`, 剩余的元素不会再执行检测;如果没有满足条件的元素，则返回 `false`;  **返回布尔值**

==**filter**== 过滤器 创建一个新的数组，新数组中的元素是通过检查符合条件的所有元素。

==**map**==：创建一个新数组并返回，新数组的每个元素由原数组中的每一个元素执行提供的函数而来，其中原始数组不会发生改变。

==**foreach**==方法，无返回值  用于调用数组的每个元素，并将元素传递给回调函数，返回 `undefiend`。

==**reduce()**==:接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。若是空数组是不会执行回调函数的;

```js
//【every()】 返回布尔值
const arr = [1, 2, 3, 4];
console.log(arr.every(i => i > 2)); // false
console.log(arr.every(i => i > 0)); // true
------------------------------------------
//【some()】 返回布尔值
const arr = [1, 2, 3, 4];
console.log(arr.some(i => i > 4)); // false
console.log(arr.some(i => i > 0)); // true
-----------------------------------------
//【filter】 返回符合条件的 新数组
const arr = [1, 2, 3, 4];
console.log(arr.filter(i => i > 2)); // [3, 4]
------------------------------------------
//【map】 返回新数组
const arr = [1, 2, 3, 4];
console.log(arr.map(i => i * 10 - 5)); // [ 5, 15, 25, 35 ]
-------------------------------------------
//【forEach()】 无返回值
const arr = [1, 2, 3, 4];
const copy = [];
console.log(arr.forEach(i => {
    copy.push(i * 2);
}));
console.log(copy); // [ 2, 4, 6, 8 ]
console.log(arr); // [ 1, 2, 3, 4 ]
------------------------------------------------
//【reduce()】  返回累加的值
const arr = [1, 2, 3, 4];
console.log(arr.reduce((prev, cur) => prev + cur, 0)); // 10
```

### 补充一些方法：

**==ES6: fill()==** 填充数组

定义:  使用给定值，填充一个数组。

参数:

第一个元素(必须): 要填充数组的值

第二个元素(可选): 填充的开始位置,默认值为0

第三个元素(可选)：填充的结束位置，默认是为`this.length`

```js
    ['a', 'b', 'c'].fill(7)
    // [7, 7, 7]
    ['a', 'b', 'c'].fill(7, 1, 2)
    // ['a', 7, 'c']
```

==**ES6: copyWithin()**== 指定位置的成员复制到其他位置

定义: 在当前数组内部，将指定位置的成员复制到其他位置,并返回这个数组。

```js
 array.copyWithin(target, start = 0, end = this.length)

var a=[0,1,2,3,4,5,6,7,8,9]
// 2位置开始被替换,3位置开始读取要替换的 5位置前面停止替换
a.copyWithin(2,3,5)
console.log(a)//[0, 1, 3, 4, 4,5, 6, 7, 8, 9]
//从第二个位置开始，然后把3位置到5位置的内容放到2位置以后
```

==**toLocaleString()**== 数组转字符串

定义: 返回一个表示数组元素的字符串。该字符串由数组中的每个元素的 toLocaleString() 返回值经调用 join() 方法连接（由逗号隔开）组成。

```js
let a=[{name:'OBKoro1'},23,'abcd',new Date()];
let str=a.toLocaleString(); // [object Object],23,abcd,2018/5/28 下午1:52:20 
```

### 改变数组和不改变数组方法总结：

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226193952.png" alt="数组" style="zoom: 67%;" />

## 可迭代对象

**可迭代（Iterable）** 对象是数组的泛化。这个概念是说任何对象都可以被定制为可在for..of循环中使用的对象。

很多其他内建对象也都是可迭代的。例如字符串也是可迭代的。

如果我们希望一个对象是可以迭代（也可以是自定义对象）,我们必须为对象添加一个Symbol.iterator方法，这个方法必须返回一个 **迭代器（iterator）** —— 内部一个有next方法的对象。

原始就具有迭代器接口的数据类型有：Array、Map、Set、String、TypedArray、arguments、NodeList 

详细的可以看ES6总结

## ==数组和对象的遍历==

### 数组的遍历

回调函数的参数依次为处于当前循环的元素（item）、该元素的索引(index)、数组本身（arr），三者均可选。

#### 一、forEach方法：

遍历数组的每一个元素，默认没有返回值。

```JavaScript
<script>
    let arr = ['a', 'b', 'c', 'd']
    arr.forEach((item, index) => {
        console.log(item + '-----' + index);
    })
</script>
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226210853.webp)

#### 二、filter方法：

对数组元素进行条件筛选。返回一个数组，将原数组符合条件的元素放入数组中。(filter方法不改变原数组)

```JavaScript
<script>
    let arr = [{
        id: 1,
        name: 'zhangsan'
    }, {
        id: 2,
        name: 'lisi'
    }, {
        id: 3,
        name: 'wangwu'
    }]
    const newArr = arr.filter(item => {
        return item.id === 2
    })
    console.log(newArr);
</script>
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226211102.webp)

#### 三、map方法：

返回一个数组，这个新数组的每一个元素都是原数组元素执行了回调函数之后的返回值。(map方法不改变原数组。)

```JavaScript
<script>
    let arr = [1, 2, 3, 4, 5]
    const newArr = arr.map(item => {
        return value + 10;
    })
    console.log(newArr);
</script>
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226211130.webp)

#### 四、some、every方法(返回布尔值)：

some和every的用法类似，数组的每一个元素都会执行回调函数。当返回值全为true时，every方法返回true，否则返回false。当返回值全为false时，some方法返回false，否则返回true。(some、every方法不改变原数组)

```JavaScript
<script>
    let arr = [1, 2, 3, 4, 5]
    const flag1 = arr.some((value, index) => {
        return value > 3;
    })
    console.log(flag1);
    console.log('---------');
    const flag2 = arr.every((value, index) => {
        return value > 3;
    })
    console.log(flag2);
</script>
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226211213.webp)

#### 五、reduce方法：

reduce(callback(total,item,index,arr),initial)方法有两个参数，第一个参数是一个回调函数（必须），第二个参数是初始值（可选）。数组将上一次的返回值作为下一次循环的初始值，最后将这个结果返回。如果没有初始值，则reduce会将数组的第一个元素作为循环开始的初始值。

total： 累计值；  item： 当前循环的元素(必须)； inedx： 该元素的索引(可选)； arr：数组本身(可选)
 常用于数组元素的累加、累乘。（reduce方法不改变原数组）

```JavaScript
<script>
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const sum = arr.reduce((total, value, index) => {
        console.log(total);
        return total + value
    }, 100)
    console.log('sum=' + sum);
    
    let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const sum_2 = arr2.reduce((total_2, value, index) => {
    	console.log(total_2);
    	return total_2 + value
	})
	console.log('sum_2=' + sum_2);
</script>
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226211210.webp)   ![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/416da279d0ed4a6283a4b88c1d0657dc~tplv-k3u1fbpfcp-watermark.awebp)

#### 六、reduceRight： 

reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。

#### 七、for of方法：

- 只遍历出value,不能遍历出下标,可遍历出Symbol数据类型的属性,此方法作为遍历所有数据结构的统一的方法

- 具有interator接口的数据，都可以使用 for of 进行遍历。常见的有数组、类数组、Set、Map等（不包含对象）。如果想用for of的方法遍历数组并使用索引 Index，可以用 for of 遍历arr.entries()方法

```JavaScript
<script>
    let arr = ['a', 'b', 'c', 'd']
    for (let [index, value] of arr.entries()) {
        console.log(index + '------' + value);
    }
</script>
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226211301.webp)

```js
for (var value of arr) {
    console.log('value', value)
}
// 运行结果：
// value a
// value b
// value c
// value d
```

#### 八、for循环遍历

```js
var arr=['a','b','c','d']
for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i])
}
```

#### 九、for  in

```js
for (var i in arr) {
    console.log('index:', i, 'value:', arr[i])
}
// 运行结果：
// index: 0 value: a
// index: 1 value: b
// index: 2 value: c
// index: 3 value: d
```



### 对象的遍历

#### 一、for...in：

循环遍历对象自身的和继承的可枚举的属性（不含 Symbol 属性）。

```javascript
<script>
    let pStr = Symbol('pStr');
    let subStr = Symbol('subStr');
    let pObj = {
        pId: 1,
        [pStr]: '父级的Symbol类型',
        pName: 'zhangsan',
    }
    let obj = {
        subId: 100,
        [subStr]: '子级的Symbol类型',
        subName: '',
        subAge: 20,
        addr: '北京市朝阳区'
    }
    Object.setPrototypeOf(obj, pObj)
    for (const key in obj) {
        console.log(key + ' --- ' + obj[key]);
    }
</script>
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226212447.webp)

#### 二、Object.keys(obj)：

返回一个数组，包括对象自身的所有可枚举属性（不含继承的和Symbol 属性）。

```javascript
<script>
    let pStr = Symbol('pStr');
    let subStr = Symbol('subStr');
    let pObj = {
        pId: 1,
        [pStr]: '父级的Symbol类型',
        pName: 'zhangsan',
    }
    let obj = {
        subId: 100,
        [subStr]: '子级的Symbol类型',
        subName: 'xiaoliu',
        subAge: 20,
        addr: '北京市朝阳区'
    }
    Object.setPrototypeOf(obj, pObj)
    for (const key of Object.keys(obj)) {
        console.log(key + ' --- ' + obj[key]);
    }
</script>
```

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8c12f5b6a2b4ae788c2625495c66c45~tplv-k3u1fbpfcp-watermark.awebp)

#### 三、Object.getOwnPropertyNames(obj)：

返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但包含不可枚举属性）。

```javascript
<script>
    let pStr = Symbol('pStr');
    let subStr = Symbol('subStr');
    let pObj = {
        pId: 1,
        [pStr]: '父级的Symbol类型',
        pName: 'zhangsan',
    }
    let obj = {
        subId: 100,
        [subStr]: '子级的Symbol类型',
        subName: 'xiaoliu',
        subAge: 20,
        addr: '北京市朝阳区'
    }
    Object.setPrototypeOf(obj, pObj)
    for (const key of Object.getOwnPropertyNames(obj)) {
        console.log(key + ' --- ' + obj[key]);
    }
</script>
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226212521.webp)

#### 四、Object.getOwnPropertySymbols(obj)：

返回一个数组，包含对象自身的所有 Symbol 属性。

```javascript
<script>
    let pStr = Symbol('pStr');
    let subStr = Symbol('subStr');
    let pObj = {
        pId: 1,
        [pStr]: '父级的Symbol类型',
        pName: 'zhangsan',
    }
    let obj = {
        subId: 100,
        [subStr]: '子级的Symbol类型',
        subName: 'xiaoliu',
        subAge: 20,
        addr: '北京市朝阳区'
    }
    Object.setPrototypeOf(obj, pObj)
    console.log(Object.getOwnPropertySymbols(obj));
</script>
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226212542.webp)

#### 五、Reflect.ownKeys(obj)：

返回一个数组，包含对象自身的所有属性（不含继承的）。

```javascript
<script>
    let pStr = Symbol('pStr');
    let subStr = Symbol('subStr');
    let pObj = {
        pId: 1,
        [pStr]: '父级的Symbol类型',
        pName: 'zhangsan',
    }
    let obj = {
        subId: 100,
        [subStr]: '子级的Symbol类型',
        subName: 'xiaoliu',
        subAge: 20,
        addr: '北京市朝阳区'
    }
    Object.setPrototypeOf(obj, pObj)
    console.log(Reflect.ownKeys(obj));
</script>
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226212602.webp)

这几种方法遍历对象的键名，都遵守以下次序规则。
 首先遍历所有数值键，按照数值升序排列。 其次遍历所有字符串键，按照加入时间升序排列。 最后遍历所有 Symbol 键，按照加入时间升序排列。 例如：

```javascript
Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
// ['2', '10', 'b', 'a', Symbol()]
```

#### demo:

```js

// 1.for...in
// 遍历输出的是对象自身的属性以及原型链上可枚举的属性(不含Symbol属性),原型链上的属性最后输出说明先遍历的是自身的可枚举属性,后遍历原型链上的
var obj = {
    'name': '小李',
    'age': '18',
    'sex': '男',
    'nation': '地球',
};
Object.prototype.pro1 = function() {}; //在原型链上添加属性
 
Object.defineProperty(obj, 'nation', {
    enumerable: false //不可枚举      【【遍历不出来】
})
obj.country = '中国';
for (var index in obj) {
    console.log('key=', index, 'value=', obj[index])
}
// --------------------------------------
// 运行结果：
// key= name value= 小李
// key= age value= 18
// key= sex value= 男
// key= country value= 中国
// key= pro1 value= [Function (anonymous)]    最后遍历原型链
// -------------------------------------------------------------
// 2.Object.keys()
// 遍历对象返回的是一个包含对象自身可枚举属性的数组(不含Symbol属性).
var obj2 = {
    name: '小张',
    age: '18',
    sex: '女'
}
Object.prototype.pro2 = function() {}
Object.defineProperty(obj2, 'country', {
    enumerable: true,
    value: '德国' //设置为可枚举了
});
Object.defineProperty(obj2, 'nation', {
    enumerable: false
})
Object.keys(obj2).forEach(function(index) {
        console.log("index=", index, 'value=', obj2[index])
    })
    // 运行结果：
    //index= name value= 小张
    // index= age value= 18
    // index= sex value= 女
    // index= country value= 德国
    // ---------------------------------------------------------
    // 3. Objcet.getOwnPropertyNames()
    // 输出对象自身的可枚举和不可枚举属性的数组,不输出原型链上的属性
var obj3 = { 'name': "yayaya", 'age': '12', 'sex': 'female', 'Symbol(birth)': '19991010', };
Object.prototype.pro3 = function() {}
Object.defineProperty(obj3, 'country', {
    Enumerable: true,
    value: '法国'
});
Object.defineProperty(obj3, 'nation', {
    Enumerable: false //不可枚举
})
obj.contry = 'china';
Object.getOwnPropertyNames(obj3).forEach(function(index) {
    console.log(index, obj3[index])
});
// 运行结果：
// name yayaya
// age 12
// sex female
// Symbol(birth) 19991010
// country 法国
// nation undefined
 
// ----------------------------------------------------
// 4.Reflect.ownKeys()
// 返回对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举.
Reflect.ownKeys(obj3).forEach(function(index) {
    console.log(index, obj3[index])
});
```

## JS的函数

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226210241.png)

## IIFE

### 为什么需要IIFE？

如果只是为了立即执行一个函数，显然IIFE所带来的好处有限。实际上，IIFE的出现是为了弥补JS在scope方面的缺陷：JS只有全局作用域（global scope）、函数作用域（function scope），从ES6开始才有块级作用域（block scope）。对比现在流行的其他面向对象的语言可以看出，JS在访问控制这方面是多么的脆弱！那么如何实现作用域的隔离呢？在JS中，只有function，只有function，只有function才能实现作用域隔离，因此如果要将一段代码中的变量、函数等的定义隔离出来，只能将这段代码封装到一个函数中。
在我们通常的理解中，将代码封装到函数中的目的是为了复用。在JS中，当然声明函数的目的在大多数情况下也是为了复用，但是JS迫于作用域控制手段的贫乏，我们也经常看到只使用一次的函数：这通常的目的是为了隔离作用域了！**既然只使用一次，那么立即执行好了！既然只使用一次，函数的名字也省掉了！这就是IIFE的由来。**

### IIFE原理

==[注意]javascript引擎规定，如果function关键字出现在行首，一律解释成函数声明语句；而函数声明后面是不能跟圆括号的（匿名函数是函数声明的一种）。然而，函数表达式的后面可以跟圆括号。所以可以将函数声明转换成函数表达式。==

==所以，解决方法就是不要让function出现在行首，让引擎将其理解成一个表达式==
最常用的两种办法

```js
(function(){ 
    console.log(123);
}()); 
 
(function(){
    console.log(123);
 })(); 
 
(function keith() {
    console.log(123);
})()
```

### 总结IFEE的优点：

- 创建块级（私有）作用域，避免了向全局作用域中添加变量和函数，因此也避免了多人开发中全局变量和函数的命名冲突；
- IIFE中定义的任何变量和函数，都会在执行结束时被销毁。这种做法可以减少闭包占用的内存问题，因为没有指向匿名函数的引用。只要函数执行完毕，就可以立即销毁其作用域链了；



## arguments

### 前言：

==1、在函数调用的时候，浏览器每次都会传递进两个隐式参数：==

==一个是函数的上下文对象`this`，另一个则是封装实参的类数组对象`arguments`。==

2、与其他程序设计语言不同，`ECMAScript`不会验证传递给函数的参数个数是否等于函数定义的参数个数。开发者定义的函数都可以接受任意个数的参数（但根据`Netscape`的文档，最多可接受255个），而不会引发任何错误。任何遗漏的参数都会以`undefined`传递给函数，多余的函数将忽略。

即参数从左向右进行匹配，如果实参个数少于形参，后面的参数对应赋值为`undefined`。如：

```js
function fn (a, b, c) {
    console.log(a, b, c); // 1 2 undefined
    // 函数对象的length属性就是函数形参的个数
    console.log(fn.length); // 3
}
fn(1, 2);
```

### arguments

#### 1、定义

`arguments`的定义是对象，但是因为对象的属性是无序的，而`arguments`是用来存储实参的，是有顺序的，它具备和数组相同的访问性质及方式，并拥有数组长度属性`length`，所以`arguments`是特殊的对象，又叫类数组对象，当我们听到类数组时就可以知道说的是`arguments`。

**即`arguments`是一个类数组对象，用来存储实际传递给函数的参数**，使调用函数时不局限于函数声明所定义的参数列表。

```
function fn() {
    console.log(arguments);
    console.log(typeof arguments); // object
    console.log(toString.call(arguments)); // [object Arguments]
}
fn('name', 'age');
复制代码
```



![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225212139.webp)



#### 2、访问实参和检查实参个数

`arguments`访问单个参数的方式与访问数组元素的方式相同。例如`arguments[0]`、`arguments[1]`、`arguments[n]`，在函数中不需要明确指出参数名，就能访问它们。通过`length`属性可以知道实参的个数。

```js
function f2() {
    console.log(arguments[0]); // name
    console.log(arguments[1]); // age
    console.log(arguments.length); // 2
}
f2('name', 'age');
```

#### 3、callee属性

每一个对象都有自己的属性，而`arguments`有一个`callee`属性，返回正被执行的`Function`对象。

```js
function f3() {
    console.log(arguments.callee === f3); // true
}
f3('name', 'age');
```

#### 4、arguments的修改

在正常的模式下，`arguments`对象是允许在运行时进行修改的。

```js
function f4() {
    arguments[0] = 'sex';
    console.log(arguments[0]); // sex
}
f4('name', 'age');
```

#### 5、==转化成真实数组==

`arguments`是类数组对象，除了`length`属性和索引元素之外没有任何`Array`属性。例如，它没有 `pop`方法。但是它可以被转换为一个真正的`Array`:

```js
function f5(){
    // 可以使用slice来将arguments转换为真实数组
    var args1 = Array.prototype.slice.call(arguments);
    var args2 = [].slice.call(arguments);
    // 也可以使用Array.from()方法或者扩展运算符来将arguments转换为真实数组
    var args3 = Array.from(arguments);
    var args4 = [...arguments];
}
f5('name', 'age');
```



### 应用

#### 1、借用`arguments.length`可以来查看实参和形参的个数是否一致

```js
function fn (a, b, c) {
    if (fn.length != arguments.length) {
        console.log('形参和实参的个数不一致');
    } else{
        console.log('形参和实参的个数一致');
    }
}
fn(1, 2);
```

#### 2、借用`arguments.callee`来让匿名函数实现递归:

```js
let sum = function (n) {
    if (n == 1) {
        return 1;
    } else {
        return n + arguments.callee(n - 1); // 5 4 3 2 1
    }
}
console.log(sum(6)); // 21
```

#### 3、遍历参数求和或者求最大值

```js
function max () {
    var max = arguments[0];
    for (item of arguments) {
        if (item > max) {
            max = item;
        }
    }
    return max;
}
console.log(max(5, 3, 2, 9, 4)); // 9
```

#### 4、模拟函数重载

重载函数是函数的一种特殊情况，为方便使用，`C++`允许在同一范围中声明几个功能类似的同名函数，但是这些同名函数的形式参数（指参数的个数、类型或者顺序）必须不同，也就是说用同一个函数完成不同的功能。

用`arguments`对象判断传递给函数的参数个数，即可模拟函数重载：

```js
function doAdd() {
    if(arguments.length == 1) {
        console.log(arguments[0] + 5);
    } else if(arguments.length == 2) {
        console.log(arguments[0] + arguments[1]);
    }
}
doAdd(10);  // 15
doAdd(10, 20); // 30
```






## this

this指向函数据以执行的环境对象，在浏览器的函数内部this对象指向的就是window，nodejs环境this对象指向的是global。

如果函数是直接执行的，没有其他的对象进行.调用，那么this指向的是window, 如果是某个对象进行.调用的函数，this会指向那个对象(默认情况下)

1. 情况一：全局作用域或者普通函数自执行中this指向全局对象window
2. 情况二：事件函数内部的this指向事件源
3. 情况三：对象方法调用时，this指向调用的对象
4. 情况四：当一个函数被call或者apply调用时，this指向传入的对象的值
5. 情况五：箭头函数中自身没有this，this指向上级的this

**==this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个调用它的对象==**

情况一：全局作用域或者普通函数自执行中this指向全局对象window

```js
console.log(this.document === document);  //true
console.log(this === window); //true
this.a = 37;  // 相当于创建了一个全局变量 a
console.log(window.a); //37
```

情况二：事件函数内部的this指向事件源

```js
function f1(){
  return this;
}
//在浏览器中：
f1() === window;   //在浏览器中，全局对象是window

//在Node中：
f1() === global;
注意：事件函数中如果包含普通函数，普通函数自执行后，内部this还是指向window。
```

情况三：对象方法调用时，this指向调用的对象

```js
let obj = {
    attr1: 3,
    func1: function() {
        console.log(this === obj) // 输出：true
        console.log(this.attr1) // 输出：3
    }
}
obj.func1()
```

情况四：当一个函数被call或者apply调用时，this指向传入的对象的值

```js
let obj = {
    fn: function(){
        console.log(this);
        }
}
obj.fn(); //obj
obj.fn.call(12); //12
```

情况五：箭头函数中自身没有this，this指向上级的this

```js
const xiaoming = {
    name: '小明',
    say() {
        //this指向当前对象
        console.log(this)
    },
    wait() {
        setTimeout( () => {
            //this指向当前对象
            console.log(this)
        }, 1000)
    }
} 
```

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226103943.png)

## 改变函数的执行环境

- 函数名.call(执行环境对象,实参列表);
- 函数名.apply(执行环境对象,实参列表数组);//参数是一个数组
- 函数名.bind(执行环境对象)(实参列表);//返回的是一个函数

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226104421.png)

## 闭包



<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226110445.webp" alt="img" style="zoom:67%;" />

**闭包是指有权访问另一个函数作用域中变量的函数**

闭包的创建方式，就是在一个函数内部创建另外一个函数。

>   闭包函数有三个特性：
>
>   ​			函数内嵌套函数、函数内部引用外部的变量、参数和变量不会被垃圾回收机制回收。

### 闭包的经典使用场景:

#### 1.使用回调函数就是在使用闭包

```js
var str = "hello"
setInterval(function timeHandler() {
    console.log(str)
}, 1000)
```

#### 2.节流防抖

#### 3.柯里化实现

详见ES6

#### 4.函数赋值

```js
var fn2；
function fn(){
	var name="hello";
	fn2=funciton(){
		return name;
	}
}

fn()
console.log(fn2())//
```

## JS中字符串对象的方法(String)

```js
var str = 'xiaomiang';
console.log(str.length);//获取字符串的长度
console.log(str.charAt(2));//返回给定位置的那个字符
console.log(str.charCodeAt(2)); //返回给定位置的那个字符编码
console.log(str.indexOf('a'));//返回给定字符的位置
console.log(str.lastIndexOf('a'));//返回给定字符的位置（反向查找）
console.log(str.concat('xiaohong'));//字符串拼接，返回新的字符串
console.log(str.slice(2,4));//字符串截取ao(start_index,end_index);
console.log(str.substr(2,4));//字符串截取ao(start_index,length);
console.log(str.substring(2,4));//字符串截取ao(start_index,end_index);
console.log(str.trim());//去除某个字符串两侧的空格
console.log(str.toLowerCase());//将字符串的字母转换为小写
console.log(str.toUpperCase());//将字符串的字母转换为大写
```



## JS中数学对象的方法（Math)

```js
console.log(Math.min(2,4,6,2,1,7));//其中最小的那个数
console.log(Math.max(2,4,6,2,1,7));//其中最大的那个数
var num = 10.41;
console.log(Math.ceil(num));//向上取舍11
console.log(Math.floor(num));//向下取舍10
console.log(Math.round(num));//四舍五入10
console.log(parseInt(num));//10
console.log(Math.random());//获取一个0-1的随机数
console.log(Math.ceil(Math.random()*100));//1-100
console.log(Math.PI);//圆周率
```

## JS的日期对象的方法（date)

```js
var date = new Date();
console.log(date.getFullYear());　　//返回2020,2020年
console.log(date.getMonth());　　//月 0-11　　
console.log(date.getDate());  //返回日  1-31
console.log(date.getHours());　　//返回小时0-23
console.log(date.getMinutes());　//分钟0-59
console.log(date.getSeconds());   //秒0-59
console.log(date.getDay());  //3 星期3 
console.log(date.getMilliseconds());//毫秒
console.log(date.getTime());　　//时间戳
```



## JS的文件读取

```html
<body>
    <input type="file" class="read-local-txt-input" id="readTxt" accept=".txt">
    </input>
    <script>
        // 给当前上传文件button添加监听事件，一般初始化的时候就可以执行
        function getInputTxt(){
            this.txtDom = document.getElementById('readTxt')
            this.txtDom.addEventListener('change', this.updateTxt, false)
        }

       function updateTxt(e) {
            let selectedFile = document.getElementById('readTxt').files[0];
            let reader = new FileReader(); // 读取TXT起重要作用的
            reader.readAsText(selectedFile);
            reader.onload = oFREvent => { // 读取完毕从中取值
                let pointsTxt = oFREvent.target.result;
                console.log('pointsTxt', pointsTxt) // 获取到的TXT文件
            };
            e.target.value = null;
        };
        // 一定要记得最后一处监听器哦
        function removeTxtDomListener() {
            this.txtDom.removeEventListener('change', this.updateTxt, false);
        }

    </script>
</body>
```

## DOM

### DOM核心操作思维导图：

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211224210554.webp)

![image-20210730175217401.png](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211224205819.webp)

### 一、什么是DOM？

**官方解释：**DOM, (**D**ocument **O**bject **M**odel, 文档对象模型)是文档内容（HTML或XML）在编程语言上的抽象模型，它建模了文档的内容和结构，并提供给编程语言一套完整的操纵文档的API。

作为一个对象，DOM对象内，有数百个属性和方法。DOM对象处理的核心，就是对DOM中的`元素节点(即标签)`进行一些**增、删、改、查、事件操作、属性操作**等一系列操作。

**个人理解：**

- 无DOM时代：在还没有JS的远古时代，我们不需要对文档内容进行修改，浏览器直接对文档内容单次解析并呈现，就不再关心文档了，因为它不可能发生变化，那时候是没有DOM的。
- JS修改文档，处理庞大的HTML后，难免不会出错，但是，即使说JS完全可以修改不出错，浏览器很难啊，浏览器不知道修改了哪里，只能重新绘制解析整个页面，这样，性能浪费不言而喻，在用户看来，每次修改文档，浏览器重新解析，页面必然一段时间白屏，解析时间快可能是闪屏，这种体验不如放弃修改页面。
- **所以DOM这个名词应该有两层含义，第一个是根据文档建模出来的一个树形模型，即是DOM树，这是站在浏览器方面的看法。从编程语言来看，它提供了一套操纵文档的API。作为程序员，更多的理解是后者。**

### 二、dom的节点类型

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225000314.png" alt="image-20211225000314284" style="zoom:80%;" />

### 三、DOM之创建元素（三种方法的对比）

先引入一个概念：文档流

👉**文档流**：

　　浏览器在打开页面时会开启一个文档流，来渲染每个标签，从上到下执行完了后会关闭文档流。

#### document.write

- 特点是，如果document.write是在文档流关闭后才来调用，那么浏览器会开启一个新的文档流，新的文档流就会把原来的内容全部覆
- 此外，document.write创建元素时，只能创建到body里
- 因此， 在实际工作中，创建元素时不会用document.write，因为它不好用，而且可能会把原来网页内所有的内容都覆盖掉

#### innerHTML

- 如果直接用等号（=），也会覆盖原来的值
- 如果用加等（+=），从视觉角度没有覆盖，就是增加新元素
- 但是从原理角度：本质上是把原来的元素取出来，再和新的元素一起添加进去，其实也是覆盖了原来的内容，它会让`原来的元素事件失效`
- 就像正品和高仿，就算再像，也不是同一个

#### createElement(最好用)

- 就是单纯的新增一个元素，不会影响原来的内容，最好用

#### demo:

```html
<body>
    <button id="btn1">点我document.write创建</button>
    <button id="btn2">点我innerHTML创建</button>
    <button id="btn3">点我createElement创建</button>

    <script>
        let btn1=document.querySelector('#btn1')
        btn1.onclick=function(){
            /**
             * 把原来的内容全部覆盖了,页面只显示添加的内容
             * 1.因为很可能会覆盖掉原来的内容
             * 2.不灵活,因为它永远给body里添加元素
            */
            document.write('<h3>我是document.write</h3>')
        }
        let btn2=document.querySelector('#btn2')
        btn2.onclick=function(){
            btn2.innerHTML='innerHTML'//这样也是覆盖
            btn2.innerHTML+='innerHTML'//追加
        }
        let btn3=document.querySelector('#btn3')
        btn3.onclick=function(){
            let h3=document.createElement("h3");
            h3.innerHTML='createElement';
            btn3.appendChild(h3)//直接把`<h3>createElement</h3>`添加到btn3
        }
    </script>
</body>
```

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211224222351.png" alt="image-20211224222351098" style="zoom:67%;" />



### 四、DOM之增：就是新增元素节点

简单到令人发指：

#### 1、利用appendChild和insertBefore添加

- appendChild增到到**最后面**，即追加：父元素.appendChild(标签名)      `注意`：这个标签名是变量，不能加引号

- insertBefore增加到某一子元素**前面**，即插入：父元素.insertBefore(标签名，在哪个元素之前插入)

	**node.insertBefore(newnode,existingnode) 【newcode是新的节点，existingnode是node的子**节点】

- `细节`：

	- 以上两种方式，如果添加的是新创建的元素，就是`添加`;
	- 如果添加的是已经存在的元素，那么都相当于是`移动`;

#### 2、以`克隆`方式新增：cloneNode()，分浅克隆和深克隆

- 浅克隆：cloneNode()，就像山寨，只克隆样式（即标签），连内容都没有，一看就是假的
- 深克隆：cloneNode(true)，就像高仿，虽然克隆了样式和内容，但是没有方法，仔细看还是能看出来是假的
- 两种方式的克隆，都不包含事件

#### demo：

```html
<body>
    <button id="btn1">点我appendChild</button>
    <ul id="ul">
        <li id="li">这是第一项</li>
        <li></li>
    </ul>
    <script>
        let btn1=document.querySelector('#btn1')
        btn1.onclick=function(){
            let h3=document.createElement("h3");
            h3.innerHTML='appendChild';
            btn1.appendChild(h3)//直接把`<h3>appendChild</h3>`添加到btn3
        }
        let ul=document.querySelector('#ul')
        ul.onclick=function(){
            let myli=document.createElement("li");
            let li=document.querySelector('#li')
            myli.innerHTML='insertBefore';
            ul.insertBefore(myli,li)
            // node.insertBefore(newnode,existingnode) 【newcode是新的节点，existingnode是node的子节点】
        }
    </script>
</body>
```

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211224225510.png" alt="image-20211224225510475" style="zoom:67%;" />



### 五、DOM之删：就是删除元素节点

#### removeChild()

- 父元素.removeChild(要被删除的标签名)

- **node.removeChild(child)//【child必须是node的子节点】**

	```
	<button id="btn">removeChild</button>
	    <ul id="ul">
	        <li>A</li>
	        <li id="b">B</li>
	        <li>C</li>
	    </ul>
	    <script>
	        let btn=document.querySelector('#btn')
	        btn.onclick=function(){
	            let ul=document.querySelector('#ul')
	            let b=document.querySelector('#b')
	            ul.removeChild(b) //删除b节点
	            // node.removeChild(child)//【child必须是node的子节点】
	        }
	    </script>
	```


​	

### 六、DOM之查：就是获取页面的元素节点

常见的方法有2个：

#### 1、传统方法获取页面元素:

就是DOM提供的API方法，现在不常用

- 获取单个DOM对象：document.getElementById('id')
	- 要传入的是字符串，直接写id名不用加#
	- document不能换成其他标签，因为ID具有唯一性
- 获取DOM伪数组
	- document.getElementsByTagName('标签名')     // 要传入的是字符串
	- document.getElementsByClassName('类名') // 直接写类名不用加.
	- 这两个document都可以换成其他的标签

#### 2、H5新方法: 推荐使用

- 获取单个DOM对象：
	- document.querySelector（'选择器名'）//  ID和类选择器要加#或.  如果有多个，只能找到第一个
	- document.body   //获取body
	- document.head    //获取head
	- document.documentElement   //获取html
- 获取DOM伪数组：
	- document.quertSelectorAll （'选择器名'）  //  ID和类选择器要加#或.

#### 3、利用节点操作获取元素

- 获取父节点（父元素）：子元素.parentNode
	- 只能得到1个元素节点，一是因为，文本节点不能做父亲，二是因为，亲爸爸只有一个，因此只能获取到一个父元素
- 获取子元素：父元素.children
	- 默认得到`伪数组`
	- 如果想找第几个孩子，可以像找数组元素一样，用下标找，即父元素.children[下标]

### 七、DOM之改：就是修改页面的元素属性

#### 1、访问和修改的方法

​	由于获取的页面元素，本质上都是`对象`，因此用访问和修改对象属性的方法，来访问和修改页面元素的属性

- 通过点语法：对象.属性名=‘属性值’

	```js
	 img.src = './images/lyf.jpg'
	```

- 通过中括号: 对象['属性名']=‘属性值’

	```js
	img['title'] = '我是李易峰'
	```

#### 2、常被修改的元素属性：src、href、tittle等

#### 3、修改普通元素内容：innerText和innerHTML

- 相同点
	- 都能获取`双标签`元素的内容
	- 都能给`双标签`元素添加内容
- 不同点
	- 获取内容时：innerText只能获取文本内容，innerHTML既能获取文本，也能获取标签
	- 添加内容时：如果内容中有标签，innerText会把标签当做文本一起添加进去，而innerHTML会把标签`解析`出来，比如h3，innerHTML会把标签内容解析为h3的格式

#### 4、修改表单的属性：

- 获取表单元素(单标签)的文本：对象名.value
- 一些表单属性：disabled（是否禁用）、checked（单复选框是否选中）、selected（下拉菜单是否选中），这些属性，在js中是写上就代表使用了，因此修改的时候，赋值为true 或false即可

#### 5、修改元素样式

- document.style.样式名，如box.style.width='300px'

#### 6、修改元素的类名

##### 6.1  传统方法修改类名

- className，如box.className=‘.red’

##### 6.2  `H5新增的操作元素类的方法——classList`

- **为什么有这个新增的方法？**

	- 传统的className方法，添加和删除的操作都非常不方便
	- 添加的时候，如果直接用等号，会覆盖原来的样式；如果用加等，可以一直赋值相同的类名，但样式没有任何变化，如下图：

	<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211224213242.webp" alt="img" style="zoom:67%;" />

	- 删除的时候，如果用赋值为原值的方法进行删除，会把后来添加的所有样式，都删除；如果用replaca替换的方法进行删除，在行内样式中会产生很多空格，而且，如果有重复的样式名，只能删除一个，如图：

	![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211224213242.webp)

	- 因此，传统的className操作元素类的方法，非常之不方便

- **classList的一些方法**：classList是一个伪数组，它保存当前这个元素所有的类

	- add()
		- 添加一个类
		- 如果要添加多个类，用逗号隔开，每个类都是独立的一个参数
	- remove()
		- 删除一个类
		- 如果要删除多个类，用逗号隔开，每个类都是独立的一个参数
	- contains()
		- 判断是否有某个类
		- 如果有得到true，如果没有得到false
	- toggle()
		- 切换一个类，原来有这个类就删除，原来没有这个类就添加
	- replace()
		- 替换一个类
		- 参数1：被替换的类
		- 参数2：要替换的新类

### 八、DOM之属性操作：主要是对`自定义`的属性进行操作

#### 1、传统操作自定义属性的方法

- 新增或设置DOM的属性值：setAttribute（）
- 获取DOM的属性值：getAttibute（）
- 移除DOM的属性值（自定义和非自定义都可以移除）：removeAttibute（）
- `点语法`只能拿到html中自带的属性，不能拿到自定义属性
- 以上方法，只能操作单个属性，如果想将自定义属性，全部取出，就很麻烦，因此，H5引入了新的操作自定义属性的方法，即dateset()

#### 2、H5新增的操作自定义属性的方法

- 自定义属性写法规范：以用data-开头，方便识别哪些是自定义的属性
- 方法：元素.dataset  ( 注意判断兼容性 )
	- 它是一个对象，可以获取所有以data-开头的自定义的属性
	- 获取单个属性，用元素.dataset.属性名
	- 设置元素属性，元素.dataset.属性名 = 数据

```html
 <div id="food" data-drink="tea" data-food="noodle" data-meal="lunch">$18.3</div>
    <button id='btn'>upadate</button>
    <script>
        let btn=document.querySelector('#btn')
        let food=document.querySelector('#food')
        btn.onclick=function(){
            console.log(food.dataset.food)//noodle
        }
 </script>
```





### ==总结demo:==

```js
一、创建
document.write('JSX')//覆盖
innerHTML='xxx'//追加/覆盖
createElement()//新建
------------------------------------------------
二、新增
appendChild()//向后新增
node.insertBefore(newnode,existingnode) 【newcode是新的节点，existingnode是node的子节点】 向前新增
cloneNode(true)//克隆
-------------------------------------------------
三、删除
node.removeChild(child)【child必须是node的子节点】
-------------------------------------------------
四、修改
img.src//访问修改
img['title']
innerText//普通元素
innerHTML
document.style.样式名//样式
xxx.className='xxx'//类
clssList
xxx.value='disabled'//表单元素
-----------------------------------------------
五、查找
（1）传统方法
document.getElementById('id')
document.getElementsByTagName('标签名')
document.getElementsByClassName('类名') 
（2）H5新增方法
document.querySelector（'选择器名'）//  ID和类选择器要加#或.  如果有多个，只能找到第一个
document.body   //获取body
document.head    //获取head
document.documentElement   //获取html
document.quertSelectorAll （'选择器名'）  //  ID和类选择器要加#或
（3）利用节点
获取父节点（父元素）：子元素.parentNode
获取子元素：父元素.children
------------------------------------------------
六、自定义属性
<div id="food" data-drink="tea" data-food="noodle" data-meal="lunch"></div>
food.dataset.drink='water'
```





### dom中node的属性和方法

```js
var a1 = document.getElementById('a1');
console.log(a1.nodeType);//返回节点类型
console.log(a1.nodeName);//返回节点名称
console.log(a1.nodeValue); //返回节点的值
console.log(a1.childNodes);//返回节点的nodelist集合(子节点)
console.log(a1.childNodes[0]);//可以通过下标去获取元素，如果想使用数组方法，记得要先转换成数组
console.log(a1.parentNode);//返回父节点
console.log(a1.previousSibling);//返回上一个兄弟节点(空白文本节点会被识别到)
console.log(a1.nextSibling);//返回下一个兄弟节点
console.log(a1.firstChild);//获取元素中的第一个子元素
console.log(a1.lastChild);//获取元素中的最后一个子元素
console.log(a1.ownerDocument);//返回整个文档节点document
console.log(a1.hasChildNodes());//检测是否是非空节点
```

### dom中node操作的方法

```js
//追加内容
var p = document.createElement("p");
var p_text = document.createTextNode('xiaoming');
p.appendChild(p_text);
console.log(p);
a1.appendChild(p);
//有参考的追加元素(指定位置的追加),如果第二个参数为null与appendChild等价
var p2 = document.createElement("p");
var p2_text = document.createTextNode('xiaohong');
p2.appendChild(p2_text);
a1.insertBefore(p2,a1.childNodes[2]);
//替换元素
var new_text = document.createTextNode('今天天气很好，小蓝哭了！') 
a1.replaceChild(new_text,a1.childNodes[1]);
//删除元素
a1.removeChild(a1.childNodes[0]);
a5.normalize();//删除2个文本节点中间的空格然后合成一个文本 
var b1 = a1.cloneNode(true);//默认为浅拷贝，可以指定值为true进行深拷贝
//拷贝时，不建议元素本身有事件，在拷贝前建议移除元素的事件
```



### document的属性和方法

```js
console.log(document.documentElement);//HTML
console.log(document.body);//body
console.log(document.doctype);//版本信息
console.log(document.title);//网页标题
console.log(document.URL);//当前的URL地址
console.log(document.domain);//取得域名 需要发布到服务器才可以获取
console.log(document.referrer);//链接到当前页面的页面URL
console.log(document.images);//取得所有的IMG对象
console.log(document.forms);//取得所有的表单元素
console.log(document.links);//取得所有的A元素
var bs = document.getElementsByTagName('b');//获取B标签
var names = document.getElementsByName('username'); //获取有username名称的控件
bs[0].onclick=function(){
    console.log(111);
}
names[0].value="xiaoming";
---------------
var classs = document.getElementsByClassName('red');//获取有red类的元素
for(var i = 0; i<classs.length;i++){
    classs[i].style.color = 'red';
}
```



### element的属性和方法

```js
console.log(a1.id);
console.log(a1.title);
a1.className = "blue";//element的属性可以获取也可以直接进行设置
console.log(a1.src);
console.log(a1.alt);
a1.style.color = 'red';//设置元素的样式
console.log(a1.getAttribute('id'));//获取某个元素的某个属性，参数为属性名
a1.setAttribute('title', '小明日记');//设置某个元素的属性
console.log(a1.children);//子元素集合
console.log(a1.firstElementChild);//第一个子元素
console.log(a1.lastElementChild);//最后一个子元素
console.log(a1.nextElementSibling);//下一个兄弟元素
console.log(a1.previousElementSibling);//上一个兄弟元素
console.log(a1.childElementCount);//子元素个数
console.log(a1.innerHTML);//返回标签中的HTML内容，当使用它去设置一个元素的内容时，我们需要去考虑填写的字符串是否为正确的HTML代码的问题！
console.log(a1.innerText);//返回标签中的文本内容，获取每个标签中的文本，单独一行
console.log(a1.textContent);//返回标签中的文本内容,会考虑元素文本的格式，不去除空格和回车
```

### 文本节点的属性和方法

```js
var text = document.createTextNode('xiaoming');
text.appendData('kule');
/*
length                  //文本长度
appendData(text)            //追加文本
deleteData(beginIndex,count)        //删除文本
insertData(beginIndex,text)     //插入文本
replaceData(beginIndex,count,text)      //替换文本
splitText(beginIndex)       //从beginIndex位置将当前文本节点分成两个文本节点
document.createTextNode(text)   //创建文本节点，参数为要插入节点中的文本
substringData(beginIndex,count)     //从beginIndex开始提取count个子字符串
*/
```





## 事件操作

可参考博客**https://blog.csdn.net/weixin_44211097/article/details/120310601?spm=1001.2014.3001.5501**

### 1.什么是事件

**事件**：就是用户与页面的交互，用户做了什么，页面做了什么回应

####1、什么是事件对象？

- 其实就是一个对象。里面包含了`事件触发时`的一些信息，比如，是否按了alt键、鼠标点击的位置等

### 2、事件分类：0级事件和2级事件

这里所指的DOM为针对HTML文档的一个API，0-2级为对应的版本。

1998年10月W3C指定了DOM1规范，之前的IE规范被称为DOM0，后来W3C把DOM1升级为DOM2，DOM2级将属性升级为队列，更符合我们编程的逻辑。

区别：主要体现在事件处理方面

比如在DOM0中不允许重复定义2个相同的事件，而DOM2中可以通过addEventListener ()来实现。但是IE浏览器（8版本）以前的表现有一些差异。

需要注意的是IE8以前也有DOM2,比如上面的addEventListener ()方法在IE中则是attachEvent()，IE8以后也可以使用addEventListener ()

所以在项目中，我们可能做一些需要兼容，当然如果你不关心可以不做：

```js
if(typeof btn.addEventListener ==='function'){
	btn.addEventListener('click',fn);
}elseif(typeof btn.attachEvent ==='function'){   
    btn.attachEvent('onclick',fn)
}else{   
	btn.onclick=function(){// do something}
}
```



- 0级事件：
	- 用on开头，比如onclick；0级事件是DOM初稿中的方法
	- 删除事件：对象.onclick=null
- 2级事件：第二版DOM中的新方法
	- 添加事件：对象.addEventListener('事件名',function(){})
	- 删除事件：对象.removeEventListener('事件名', function(){})
- 删除时，用哪种方法添加的事件，就用哪种方式删除
- **匿名函数添加的事件，不能删除原因详见[《为什么匿名函数添加的事件，不能进行删除操作？》](https://link.juejin.cn?target=url)**

### 3、事件三要素

- 事件源：真正触发事件的元素
	- 获取事件源：e.target
- 事件类型
	- 鼠标事件：
		- 鼠标点击：click
		- 鼠标双击：dblclick
		- 鼠标移入：mouseover
		- 鼠标移出：mouseout
	- 鼠标按下：mousedown
		- 鼠标弹起：mouseup
	- **`H5中的鼠标拖拽事件`**
		- 元素默认不可拖拽，要加拖拽属性，才能拖拽，即draggable='true'
		- 拖拽事件：
			- 给被拖拽的元素加的事件：dragstart（拖拽开始）、drag（拖拽中）、dragend（拖拽结束事件）
			- 给容器检测添加的事件：dragenter（拖拽进入事件）、dragleave（拖拽离开事件）
		- 拖拽悬停事件：dragover
			- 在容器范围内，鼠标拖拽并悬停，就会一直触发
			- 它的默认行为是禁止被拖放进来
		- 拖放事件：drop
			- 在容器范围内，且松手
			- 默认不触发，想触发，要先用dragover，阻止拖拽悬停的默认行为
	- 焦点事件：
		- 获得焦点：focus
		- 失去焦点：blur
	- 键盘事件：
		- 键盘按下：keydown和keypress，常用keydown
		- 键盘弹起：keyup，与keydown是一对，不区分大小写，不过滤功能键
- 响应程序：就是做了什么回应，一般是个函数

### 4、事件流

👉**定义**：事件触发时会经历从上到下，再从下到上的流动过程

- 事件流的三个阶段：

	- 捕获阶段：从上到下，需要写代码调用
	- 目标阶段：当前被触发的事件
	- 冒泡阶段：从下往上，默认存在

	`DOM事件流`：DOM事件发生的顺序，可以分为事件捕获阶段和事件冒泡阶段。 ![image-20210731202702131的副本.png](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225105108.webp)

	> 1. onclick和attchEvent只有冒泡
	> 2. document.addEventListener(event, function[, useCapture]) true为事件捕获，false/省略为事件冒泡
	> 3. 部分事件类型无冒泡（blur...）

### 5、事件流的应用——事件委托

- 什么是事件委托？

👉就是把事件交给其他元素来处理，即把事件绑定给其他元素，一般是父元素

- 为什么要委托？

👉主要是为了减少事件的绑定的次数，提高运行性能。

　　比如说，一个ul中有很多li，如果想点击每个li，就弹出这个li的内容，那传统的方法是，要遍历这个ul，找到每个li，给每个li添加点击事件，这样一方面会绑定很多事件，另一方面会降低运行性能；另外，如果后续这个ul中添加了很多新的li，那新增的li，是不会有点击事件的，因为，在给每个li添加事件时，获取的是当时ul中所有的li，后来新增的，不包含在内。　

　　这种情况，就可以采用`事件委托`的方法，把这个点击事件，绑定给li的父亲ul。借用`事件冒泡`的优势，点击li的时候，li没有事件，会冒泡给父亲ul，ul再执行事件，显示每个`事件源`的innerText即可。

- 事件委托的好处？

	由此，可以看出，事件委托主要有两大好处：
	
	- 减少事件的绑定的次数
	- 让不管是老元素，还是后续新增的元素，同样具有事件

### 6、事件中的常用方法：详见思维导图

### 7、关于坐标系的使用场景

　　很多小伙伴在学习JS的时候，经常将e.pageX、e.screenX、e.clientX等概念，与三大家族混淆，不知道它们的区别及具体使用场景，在此做一个简要小结：

#### 7.1、`事件`里的坐标系：e.pageX、e.screenX、e.clientX

　　顾名思义，这些坐标系是用在事件里的，获取的是`事件中鼠标的位置（坐标）`。我们都知道，`事件`是用户在页面上做的一些操作（如鼠标点击、键盘按下等）后，页面给出的一些响应程序。事件中包含`事件对象`，即保存了事件触发时的一些信息。

　　想要获取事件里的信息，需要在事件触发的函数（如onclick）内写一个形参，一般用e、ev、event等，这样，再触发的事件里，就可以用e.来获取事件触发时的一些信息。

　　因此，e.pageX、e.screenX、e.clientX这些，其实都是`事件对象中的方法`, 主要作用是，**获取事件内，`鼠标`的一些位置信息**，如点击的时候，鼠标距离【页面】的距离（e.pageX、e.pageY）、鼠标距离【可视区】的距离（e.clientX、e.clientY）、鼠标距离【屏幕】的距离（e.screenX、e.screenY）

#### 7.2、给`元素`使用的坐标系：三大家族

　　与上述事件内的坐标系不同，三大家族系列，不是给事件对象用的，而是给`元素自己`用的，获取的是元素自己相对于页面（父盒子）、可视区和被卷去的距离，具体区别详见下图： ![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225094347.webp)

### demo:事件绑定

```js
var btn = document.getElementById('btn');
btn.onclick = function(){
    //console.log(this);//事件目标
    this.title = "按钮";
    console.log(111);
}
btn.onclick = function(){console.log(222);}//使用dom0级事件，多次绑定后面的方法会覆盖前面的方法
function f2(){console.log(222);}
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click',function(){
    console.log(111);
},false)
btn2.addEventListener('click',f2,false);
//dom2级的事件绑定方式，可以多次绑定相同事件，不会被覆盖
btn2.removeEventListener('click',f2,false);//事件解绑，匿名函数不会被解绑
//第三个参数设置true为捕获阶段触发，false为冒泡(默认)
bth2.attachEvent() //2个参数（事件，function(){}）如果是IE8会识别这个时间绑定方法dom2
bth2.detachEvent()//IE8中移除事件的方法dom2
```

### demo:event对象

```js
var lis = document.getElementsByTagName('li');
var u1 = document.getElementById('u1');
//事件代理（事件委托）
u1.onclick=function(e){
    for (var i=0;i<lis.length;i++)
        lis[i].style.background="none";
    e.target.style.background="red";
    // console.log(111);
}
var l = document.createElement('li');
var l_text = document.createTextNode('《夜的第七章》');
l.appendChild(l_text);
u1.appendChild(l);

lis[0].onclick = function(e){
    // e.preventDefault();//取消事件的默认行为
    // e.stopPropagation();//阻止冒泡
    console.log(e);
    console.log(e.bubbles);//是否冒泡
    console.log(e.cancelable);//是否取消事件的默认行为
    console.log(e.currentTarget);//绑定事件的那个元素
    console.log(e.eventPhase);//事件的阶段
    console.log(e.target);//实际触发事件的元素
    console.log(e.type);//事件的类型
    e.target.style.background="red";
}
-----------------------------
//客户区坐标位置(窗口)
  clientX,clientY 事件发生时，鼠标指针在视口中的水平和垂直坐标位置
//页面坐标位置
  pageX,pageY 事件发生时，鼠标指针在页面本身而非视口的坐标，页面没有滚动的时候，pageX和pageY的值与clientX和clientY值相等
//屏幕坐标位置  screenX,screenY
```

### 事件类型

![image-20211225104822740](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225104823.png)

### 取消事件冒泡（阻止事件传播）

```js
//标准写法
e = e || window.event;
if(e.stopPropagation) {
	e.stopPropagation();
} else {
	e.cancelBubble = true;//（兼容IE）
}
```

## 获取滚动条距离顶部的位置

```js
window.onscroll=function(){
    if(window.pageYOffset){
        console.log(window.pageYOffset+"@1");//谷歌
        console.log(window.pageXOffset+"@1");//谷歌
    }else if(document.documentElement.scrollTop){
        console.log(document.documentElement.scrollTop+"@2") //firefox
        console.log(document.documentElement.scrollLeft+"@2") //firefox
    }else{
        console.log(document.body.scrollTop+"@3") //IE
        console.log(document.body.scrollLeft+"@3") //IE
    }
}
```

## 定时调用和间歇调用

```js
//超时调用
var id = setTimeout(function(){
  alert(1000);
},0);
clearTimeout(id)  //清除
//间歇调用
var id = setInterval(function(){
  alert(1000);
},1000);
clearInterval(id)  //清除
```

## BOM

### ==什么是BOM？==

BOM（Browser Object Model）即浏览器对象模型，用于与浏览器窗口进行交互 核心对象为window，可用console.dir(window)查看window的属性和方法 BOM包含了DOM ![image-20210801105424814的副本.png](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225105239.webp)

### DOM和BOM的区别

![image-20210801113943624的副本.png](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211225105317.webp)



### window对象

| **页面加载事件** |                                                           |
| ---------------- | --------------------------------------------------------- |
| load             | DOM全部加载完成                                           |
| DOMContentLoaded | 仅当DOM加载完成，不包括样式表，图片，flash等，ie9以上支持 |
| **调整窗口**     |                                                           |
| resize           | 窗口大小发生改变时（js实现响应式页面）                    |

| **定时器**                       |                                  |
| -------------------------------- | -------------------------------- |
| setTimeout() 和 clearTimeOut()   | 倒计时结束后，调用一次回调函数。 |
| setInterval() 和 clearInterval() | 每隔一段时间，调用一次回调函数。 |

### location对象

location是最有用的BOM对象之一，提供了当前窗口中加载文档的信息，以及通常得导航功能

| **属性**           |                        |
| ------------------ | ---------------------- |
| location.href      | 返回完整的URL          |
| location.host      | 返回域名               |
| location.search    | 返回一个URL的查询部分  |
| **方法**           |                        |
| location.assign()  | 载入一个新的文档       |
| location.reload()  | 重新载入当前文档       |
| location.replace() | 用新的文档替换当前文档 |

**demo:**

```js
//页面跳转
// window.location = 'http://www.baidu.com';
// document.location = 'http://www.baidu.com';
//location = 'http://www.baidu.com';
location.href = 'http://www.baidu.com'//跳转，会产生历史记录
//location.assign('http://www.baidu.com')//跳转，会产生历史记录   
location.replace('http://www.baidu.com')//跳转，不会产生历史记录

//页面的一些URL信息
console.log(location.host)//返回服务名称和端口号
console.log(location.hostname)//不带端口号的服务器名称
console.log(location.href)//当前地址
console.log(location.pathname)//目录名和文件名
console.log(location.port)//端口号
console.log(location.protocol)//协议名
console.log(location.search)//查询字符串 ?name=zhangsan&age=13

//刷新
location.reload();//刷新，falsa调用缓存进行刷新，true会从服务器重新加载一次页面
location.href="原地址"  //刷新
```



### history对象

History 对象包含用户（在浏览器窗口中）访问过的 URL。 History 对象是 window 对象的一部分，可通过 window.history 属性对其进行访问

| **属性**          |                                   |
| ----------------- | --------------------------------- |
| history.length    | 返回历史列表中的网址数            |
| **方法**          |                                   |
| history.forward() | 加载 history 列表中的前一个 URL   |
| history.back()    | 加载 history 列表中的下一个 URL   |
| history.go()      | 加载 history 列表中的某个具体页面 |

```js
console.log(history.length);//查看当前的历史记录数
function back(){
    //history.back();//后退
    history.go(-1);
}
function forward(){
    history.forward();//前进
    history.go(1);//如果值为1，如上方方法等价，也可以指定大于1的页数，如果值为0，则为刷新
}
```

[更多 - 菜鸟教程](https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fobj-window.html)

### navigator

`navigator` 主要用到 `userAgent` 属性， `navigator.userAgent` 表示获取**浏览器的用户代理字符串**。**如以下代码操作：**

```js
//navigator
const ua = navigator.userAgent;
console.log(ua);
const isChrome = ua.indexOf('Chrome');
console.log(isChrome);
复制代码
```

此时浏览器打印如下。

![浏览器内核信息](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54a3fed5e0ae452882464ea2c92cd822~tplv-k3u1fbpfcp-watermark.awebp)

从上图中可以看到，通过 `userAgent` 可以获取到当前**所使用浏览器的内核信息**。

### screen

`screen` 主要用到width和height属性，screen.width表示获取当前屏幕的宽度，sceen.height表示获取当前屏幕的高度。**如以下代码操作：**

```js
// screen
console.log(screen.width); //获取屏幕宽度
console.log(screen.height); //获取屏幕高度
复制代码
```

此时浏览器打印如下。

![screen](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/349d804fa29a404dad2f518ffeca13c8~tplv-k3u1fbpfcp-watermark.awebp)

从上图中可以看到，通过 `screen.width` 和 `screen.height` 可以获取到当前屏幕的宽度和高度。

### open

```js
 var myWin = window.open("http://www.baidu.com",'baidu','width=500,height=400,scrollbars=no'); 
// myWin.close();         //调用close函数关闭新打开的网页
// myWin.resizeTo(500,500);    //调整大小
// myWin.moveTo(300,300);     //移动位置
```



## 正则表达式

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211226215309.png" alt="img" style="zoom: 200%;" />

### 一、正则表达式的创建

```js
// 创建正则表达式
// 1.构造函数模式
var reg1 = new RegExp('b'); //匹配一个字符串中是否含有字符b
// 2、字面量
var reg1_1 = /b/;
var str = 'hello xiaobai';
 
//测试是否有效
// g	global  全局
// i	ignore case	不区分大小写
// m	multiline	多行
if (reg1.test(str)) {
    console.log('yes');
} else {
    console.log('no');
}
```

### 二、修饰符

> // 修饰符
>
> var reg2 = new RegExp('abc', 'ig'); //全局且不区分大小写
>
> var reg2=/b/igm;

```js
// 创建正则表达式
// 1.构造函数模式
var reg1 = new RegExp('b'); //匹配一个字符串中是否含有字符b
// 2、字面量
var reg1_1 = /b/;
var str = 'hello xiaobai';
 
//测试是否有效
// g	global  全局
// i	ignore case	不区分大小写
// m	multiline	多行
if (reg1.test(str)) {
    console.log('yes');
} else {
    console.log('no');
}
// --------------------------------------------------
// 修饰符
var reg2 = new RegExp('abc', 'ig'); //全局且不区分大小写
 
var str2 = 'helloABCxiABCoaai';
var str3 = `hello abc
hello abc`; //反引号
// 1.方法一
console.log(reg2.test(str));
console.log(reg2.test(str));
console.log(reg2.test(str));
 
console.log(reg2.test(str3)); //不区分大小写，全局第一个，存在->true
console.log(reg2.test(str3)); //不区分大小写，全局第二个，第二行->true
console.log(reg2.test(str3)); //不区分大小写，全局第三个，第三行->false  不存在了
 
// --------------------------------------------------------
// api
console.log(reg2.global); //正则表达式是否带有修饰符g
console.log(reg2.ignoreCase); //正则表达式是否带有修饰符i
console.log(reg2.flags); //返回所有的修饰符
 
// 方法
// 2.方法二
console.log(reg2.exec(str3)) //[ 'abc', index: 6, input: 'hello abc\nhello abc', groups: undefined ]
console.log(reg2.exec(str3)) //[ 'abc', index: 16, input: 'hello abc\nhello abc', groups: undefined ]
    // 输出含有匹配结果的数组['abc','abc']
var arr5 = [];
var res = true; //代表还有结果
while (res != null) {
    res = reg2.exec(str2);
    if (res != null)
        arr5.push(res[0]);
}
console.log(arr5);
```



### 三、属性

RegExp 是javascript中的一个内置对象。为正则表达式。

![image-20220124212525534](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20220124212532.png)

如果你直接在控制台打印RegExp, 出现的一定是一个空字串: ""。那么, 我们在什么时候可以使用RegExp.$1呢?

其实RegExp这个对象会在我们调用了正则表达式的方法后, 自动将最近一次的结果保存在里面, 所以如果我们在使用正则表达式时, 有用到分组, 那么就可以直接在调用完以后直接使用RegExp.$xx来使用捕获到的分组内容, 如下:

```js
const r = /^(\d{4})-(\d{1,2})-(\d{1,2})$/
r.exec('2019-10-08')
 
console.log(RegExp.$1)  // 2019
console.log(RegExp.$2)  // 10
console.log(RegExp.$3)  // 08
```

## AJAX

### HttpRequest

标准的HttpRequest做出一个同步的调用，必须等待服务器端返回响应，然后对页面进行加载（一般会呈递一个新的页面）。XMLHttpRequest可以==发送异步请求，也可发送同步请求，但不会进行页面重新加载==。当XMLHttpRequest进行请求时，目标页面会呈递特定的MIME类型数据（XML，JSON等）。XMLHttpRequest使用标准的javascript API对服务器端返回的响应进行解析，并且更新目标页面。

### AJAX原理

Ajax简单来说是通过XMLHttpRequest对象来向服务器发送异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。这其中最关键的一步就是页面的部分从服务器获得请求数据。实现方式就利用页面部分刷新数据来给用户更好的体验。

### XMLHttpRequest

浏览器在XMLHttpRequest类上定义了它们的HTTP API,这个类的每个实例都表示一个独立的请求/响应对，并且这个对象的属性和方法允许指定请求细节和提取响应数据。很多年前Web浏览器就开始支持XMLHttpRequest，并且其API已经到了W3C指定标准的最后阶段。同时W3C正在指定“2级XMLHttpRequest”标准草案。

### http的报文

1.请求报文 –>发送请求  	

2.响应报文  —>响应请求

#### 请求报文Request：（4个）

*   请求行: 设置路径 请示方式 以及协议名等
*   请求头: 浏览器告诉服务器的信息,声明客户端的内容(内核,平台，携带token等)
*   存放需要发送的信息,post的请求时需要发送的数据,get是直接拼接在路径里面的

一个浏览器端的HTTP请求一般有四部分组成:

1.  请求的方法或动作，比如是GET还是POST请求
2.  正在请求的URL
3.  请求头,包含一些客户端环境信息,身份验证信息,数据格式信息等
4.  请求体即请求的正文,包含客户提交的字符串信息,表单信息等



​                 <img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211114223528.jpeg" alt="img" style="zoom: 80%;" />        

#### 响应报文Response：(3个)

1.  状态行(响应行) 声明协议,状态码等
2.  响应头:服务器告诉浏览器的一些信息,响应体的类型等
3.  响应体: 服务器返回给浏览器的数据

​                 <img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211114223854.png" alt="img" style="zoom:67%;" />        

### 响应头/响应头类型

>   Content-type: 请求体/响应体的类型
>
>   常见的媒体格式类型如下：
>
>   text/html ： HTML格式 
>
>   text/plain ：纯文本格式       
>
>   text/xml ：  XML格式 
>
>   image/gif ：gif图片格式     
>
>   image/jpeg ：jpg图片格式  
>
>   image/png：png图片格式
>
>   application/xhtml+xml ：XHTML格式
>
>   application/xml     ： XML数据格式
>
>   application/atom+xml  ：Atom XML聚合格式    
>
>   ==application/json    ： JSON数据格式==
>
>   application/pdf       ：pdf格式  
>
>   application/msword  ： Word文档格式
>
>   application/octet-stream ： 二进制流数据（如常见的文件下载）
>
>   ==application/x-www-form-urlencoded ： 编码为key/value格式发送到服务器（表单默认的提交数据的格式）==
>
>   ==multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式  以上就是我们在日常的开发中，经常会用到的若干content-type的内容格式==。

### 状态码：

1XX : 请求已被接受，需要继续处理  

2xx : 代表请求已成功被服务器接收、理解、并接受  

​			200	OK	请求成功。

3xx : 重定向

4xx : 浏览器端的请求错误

*   400	客户端请求的语法错误，服务器无法理解
*   401	请求要求用户的身份认证
*   403	服务器理解请求客户端的请求，但是拒绝执行此请求  
*   404	服务器无法根据客户端的请求找到资源（网页）。

5xx : 服务器端的错误

​				500	服务器内部错误，无法完成请求

*   file协议无法实现跨域

http访问本地的html文件，相当于将本机作为了一台http服务器，然后通过localhost访问的是你自己电脑上的本地服务器，再通过http服务器去访问你本机的文件资源。再简单点就是file只是简单请求了本地文件，将其作为一个服务器未解析的静态文件打开。而http是在本地搭建了一个服务器再通过服务器去动态解析拿到文件。

>   两者本质区别：
>
>   AJAX通xmlHttpRequest象请求服务器服务器接受请求返数据实现刷新交互
>
>   普通http请求通httpRequest象请求服务器接受请求返数据需要页面刷新

### demo:

```js
// 第一步：实例化ajax对象
 	let xml = new XMLHttpRequest;
// 第二步：创建客户端服务器端的连接
    xml.open('GET', url, true); //(请求方式,URL,异步/同步)
//一定是先open  再设置请求头  再send
// 第三步：设置请求头
    xml.setRequestHeader("Authorization", "token")
    xml.send(null)
// 第四步:监听验证
    xml.onreadystatechange = function() {
        if (xml.readyState == 4 && xml.status == 200) {
            let text = xml.responseText
        } else if (xml.status != 200) {
           ...
        }
    }
 --------------------------------------
//0：未初始化（open未调用）；
//1：读取中（open已经调用）；
//2：已读取（服务器接受到请求头）；
//3：交互中（浏览器接受到响应头，即响应主体）；
//4：交互完成（响应完成）

//responseText  获取文本形式的响应体
//responseXML  获取Document形式的响应体

```

### JQuery封装的AJAX

#### $.ajax()方法

```js
   $.ajax({
		type:'GET',	//请求的类型,GET、POST等	
		url:'www.baidu.com',	//向服务器请求的地址。
		contentType:'application/json',	//向服务器发送内容的类型，默认值是：application/x-www-form-urlencoded
		dataType:'JSON',	//预期服务器响应类型
		async:true,	//默认值是true,表示请求是异步的，false是同步请求，同步请求会阻碍浏览器的其他操作（不建议使用）
		timeout:'5000',	//设置本地的请求超时时间（单位是毫秒）
		cache:true,	//设置浏览器是否缓存请求的页面
		success:function(result,status,XMLHttpRequest){	//请求成功时执行的函数,result：服务器返回的数						据，status：服务器返回的状态，
                }，
        error:function(xhr,status,error){	//请求失败时执行的函数
        }，
        complete：function(xhr,status){     //不管请求失败还是请求成功，都执行的函数
        }
   })
```

#### $.get(url,callBack)

url:向服务器请求的地址(必选),callBack:回调函数(非必选)

```js
    $.get('www.bai.com',function(data,status){
        console.log('服务器返回的数据：',data);
        console.log('返回状态：',status);
    })
```

#### $.post(url,data,callBack)

url:向服务器请求的地址(必选),data:数据JSON类型(非必选)，callBack:回调函数(非必选)

```js
$.post('www.baiducom',{'param1':value1,'param2':value2},function(){})
```

#### $('#id').load(url,data,callBack)

url:向服务器请求的地址(必选),data:数据JSON类型(非必选)，callBack:回调函数(非必选) #part指定加载的部(非必填)

```js
$('#id').load('www.baidu.com  #part',{'param1':value1,'param2':value2},function(){
		
	})
```

## 防抖

> 防抖：触发高频时间后n秒内函数只会执行一次,如果n秒内高频时间再次触发,则重新计算时间。
>
> // 场景：防抖常应用于用户进行搜索输入节约请求资源

```javascript
 //调用fn函数，设置delay后触发
        function debounce1(fn, delay = 1000) {
            let timer = null; //创建一个标记用来存放定时器的返回值
            return () => {
                clearTimeout(timer); //用户每次输入的时候清掉上一次的延时
                timer = setTimeout(function() {
                    fn.apply(this, arguments) //这里的this为全局window对象
                }, delay)
            }
        }
```

### eg:

```js
<body>
    <input type="text">
    <script>
        let inp = document.querySelector('input');

        // 防抖
        let time = null;
        inp.oninput = function() {
            if (time !== null) {
                clearTimeout(time)
            }
            time = setTimeout(() => {
                console.log(this.value) //箭头函数指向定义时
            }, 500)
        }
    </script>
</body>
```



## 节流

> 节流：高频时间触发,但n秒内只会执行一次,所以节流会稀释函数的执行频率。
>
> // 场景：节流常应用于鼠标不断点击触发、监听滚动事件。

```javascript
// 节流  
        function throttle(fn, delay = 1000) {
            let flag = true;
            return () => {
                if (!flag) return; //判断标记是否为true, 不为true则return
                flag = false;
                setTimeout(() => {
                    fn.apply(this, arguments);
                    flag = true;
                }, delay)

            }
        }
```



### 例子：

```javascript
<body>
    <!-- 用于防抖测试 -->
    <input type="text">
    <!-- 用于节流测试 -->
    <button id="btn_throttle">f</button>
    <script>
        //调用fn函数，设置delay后触发   防抖
        function debounce(fn, delay = 1000) {
            let timer = null; //创建一个标记用来存放定时器的返回值
            return () => {
                clearTimeout(timer); //用户每次输入的时候清掉上一次的延时
                timer = setTimeout(function() {
                    fn.apply(this, arguments) //这里的this为全局window对象
                }, delay)
            }
        }

        //测试
        function sayDeBounce() {
            console.log("防抖成功")
            console.log(inp.value)
        }
        let inp = document.querySelector('input');
        inp.oninput = debounce(sayDeBounce, 500)

        // ----------------------------
        // 节流  
        function throttle(fn, delay = 1000) {
            let flag = true;
            return () => {
                if (!flag) {
                    alert('点击太频繁')
                    return;
                } //判断标记是否为true, 不为false则return
                flag = false; //在这delay内不重复工作
                setTimeout(() => {
                    fn.apply(this, arguments);
                    flag = true;
                }, delay)

            }
        }
        // 测试
        function getJL() {
            console.log('节流成功')
        }
        let btn = document.querySelector('button')
        btn.onclick = throttle(getJL, 1000)
    </script>
</body>

```

<img src="C:\Users\25058\AppData\Roaming\Typora\typora-user-images\image-20211109192846883.png" alt="image-20211109192846883" style="zoom:50%;" />



## ==js执行机制--Event loop理解==

### 线程和进程

**什么是进程：** 进程是cpu分配资源的最小单位；（是能拥有资源和独立运行的最小单位）

**什么是线程：** 线程是cpu调度的最小单位；（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）

概念理解起来比较枯燥，做个比喻好了：

> **进程** 就是一个公司，每个公司都有自己的资源可以调度；公司之间是相互独立的；而 **线程** 就是公司中的每个员工，多个员工一起合作，完成任务，公司可以有一名员工或多个，员工之间共享公司的空间。

**浏览器是多进程的：** 在浏览器中，每打开一个tab页面，其实就是新开了一个进程，在这个进程中，还有ui渲染线程，js引擎线程，http请求线程等。 所以，浏览器是一个多进程的。

**js是单线程的：** js是作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作dom；这决定了它只能是单线程，否则会带来很复杂的同步问题。 举个例子：如果js被设计了多线程，如果有一个线程要修改一个dom元素，另一个线程要删除这个dom元素，此时浏览器就会一脸茫然，不知所措。所以，为了避免复杂性，从一诞生，JavaScript就是单线程。

### js执行机制--Event loop

由于js是单线程，js设计者把任务分为同步任务和异步任务，同步任务都在主线程上排队执行，前面任务没有执行完成，后面的任务会一直等待；异步任务则是挂在在一个任务队列里，等待主线程所有任务执行完成后，通知任务队列可以把可执行的任务放到主线程执行。异步任务放到主线程执行完后，又通知任务队列把下一个异步任务放到主线程中执行。这个过程一直持续，直到异步任务执行完成，这个持续重复的过程就叫Event loop。而一次循环就是一次tick 。

在任务队列中的异步任务又可以分为两种**microtast（微任务）** 和 **macrotask（宏任务）**

microtast（微任务）：Promise， process.nextTick， Object.observe， MutationObserver

macrotask（宏任务）：script整体代码、setTimeout、 setInterval等

执行优先级上，**`先执行宏任务macrotask，再执行微任务mincrotask。`**

执行过程中需要注意的几点是：

- 在一次event loop中，microtask在这一次循环中是一直取一直取，直到清空microtask队列，而macrotask则是一次循环取一次。

- 如果执行事件循环的过程中又加入了异步任务，如果是macrotask，则放到macrotask末尾，等待下一轮循环再执行。如果是microtask，则放到本次event loop中的microtask任务末尾继续执行。直到microtask队列清空。

	![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20220129230004.webp)
	
	到这里，上面那个300ms的定时器为什么不一定是精确的300ms之后打印就能理解了：

因为300ms的setTimeout并不是说300ms之后立马执行，而是300ms之后被放入任务列表里面。等待事件循环，等待它执行的时候才能执行代码。如果异步任务列表里面只有它这个macrotask任务，那么就是精确的300ms。但是如果 还有microtast等其它的任务，就不止300ms了。

### 详解

这里有常见的一个demo面试与笔试题

```js
for (var i = 0; i < 3; i++) {
  console.log("for中i的值：" + i);
  var time = setTimeout(() => {
    console.log("setTimeout中i的值：" + i);
  }, 300);
}
/**
 * for中i的值：0
for中i的值：1
for中i的值：2
setTimeout中i的值：3
setTimeout中i的值：3
setTimeout中i的值：3
 */
/**
1、当执行for循环的时候，定义了3个定时器，由于setTimeout是异步任务，所有这三个定时器，都会在300ms之后加入任务队列
2、此时执行代码，依次输出个 for中i的值：0、1、2    300ms之后，每个setTimeout的加入到任务队列，这时for循环早就执行完毕了，此时的 i 由于主线程执行完之后变成了
3、由于这时setTimeout匿名回调函数保持对外部变量 i 的引用，所以最终再打印出3个 setTimeout中i的值：3
*/
--------------------------------------------------------
for (let i = 0; i < 3; i++) {
  console.log("for中i的值：" + i);
  var time = setTimeout(() => {
    console.log("setTimeout中i的值：" + i);
  }, 300);
}

/**
 * for中i的值：0
for中i的值：1
for中i的值：2
setTimeout中i的值：0
setTimeout中i的值：1
setTimeout中i的值：2
 */
/**
1、var声明的变量，在全局范围内都有效，所以在全局只有一个变量i，每一次循环，变量i的值都会发生改变，而循环内部，被赋给setTimeout函数内部的i指向全局的i,结合之前讲的事件执行机制，最后一轮打印的i也都是3了
2、let声明的变量，let只在块及作用域中有效，并且不存在变量提升。所以每次循环在setTimeout中的i都是一个新的变量。

🤔既然每次循环的i都是一个新值，那么结果输出应该都是初始化值1呀 ？这是因为JavaScript引擎内部会记住上一轮循环的值，初始化本轮变量i时，就在上一轮循环的基础上进行计算
*/
--------------------------------------------------------------
console.log(1);
setTimeout(function () {
  console.log(2);
}, 0);
new Promise(function (resolve) {
  console.log(3);
  for (var i = 100; i > 0; i--) {
    i == 1 && resolve();
  }
  console.log(4);
})
  .then(function () {
    console.log(5);
  })
  .then(function () {
    console.log(6);
  });
console.log(7);
//1 3 4 7 5 6 2
/**
1、由于script也属于macrotask，所以整个script里面的内容都放到了主线程（任务栈）中，按顺序执行代码。然后遇到console.log(1)，直接打印1。
遇到setTimeout,表示0秒后加入任务队列，因为setTimeout是一个宏观任务，所以会放到下一个macrotask，这里不会执行
遇到new Promise，new Promise在实例的过程中执行代码都是同步进行的，只有回调.then()才是微任务。所以先打印3。执行完循环打印4。然后遇到第一个 .then()，属于microtask，加入到本次循环的microtask队列里面。接着向下执行又遇到一个 .then()，又加入到本次循环的microtask队列里面。然后继续向下执行。
遇到console.log(7)，直接打印7。直到此时，一个事件循环的macrotask执行完成，然后去查看此次循环是否还有microtask，发现还有刚才的  .then() ，立即放到主线程执行，打印出5。然后发现还有第二个 .then()，立即放到主线程执行，打印出6 。此时microtask任务列表清空完了。到此第一次循环完成。
第二次事件循环，从macrotask任务列表里面找到了第一次放进的setTimeout，放到主线程执行，打印出2。
最终打印的结果：1、3、4、7、5、6、2
*/
```




## 总结：

> 应用场景：
>
> 1.有些项目中，我们要使用到实时搜索，有些情况下，可能用户没有输完内容，就开始搜索了，这样体验不佳，我们就可以加上节流的方案
>
> 2.当需要改变窗口大小，或者滚动条位置的获取，或者元素拖放时的位置获取时，一般我们只想要最后一次的大小或者位置，可以使用防抖的方案





参考：https://docs.qq.com/doc/DRUxGTlB3RldmT25v?groupUin=HDIeND9aEy6jyMwiy5UlkQ%253D%253D&ADUIN=256668950&ADSESSION=1630975866&ADTAG=CLIENT.QQ.5833_.0&ADPUBNO=27165&jumpuin=256668950



