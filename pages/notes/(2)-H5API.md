







## 语义标签

###  常见标签

html5 语义标签，可以使开发者更方便清晰构建页面的布局

| 标签        | 描述                               |
| ----------- | ---------------------------------- |
| `<header>`  | 定义了文档的头部区域               |
| `<footer>`  | 定义了文档的尾部区域               |
| `<nav>`     | 定义文档的导航                     |
| `<section>` | 定义文档中的节                     |
| `<article>` | 定义文章                           |
| `<aside>`   | 定义页面以外的内容                 |
| `<details>` | 定义用户可以看到或者隐藏的额外细节 |
| `<summary>` | 标签包含details元素的标题          |
| `<dialog>`  | 定义对话框                         |
| `<figure>`  | 定义自包含内容                     |
| `<main>`    | 定义文档主内容                     |
| `<mark>`    | 定义文档的主内容                   |
| `<time>`    | 定义日期/时间                      |

### header 元素

`<header>` 元素定义文档的头部区域

```html
<header>     
   <hgroup>         
       <h1>标题</h1>
       <h1>副标题</h1>
   </hgroup>
</header>
```

### footer 元素

`<footer>` 元素定义文档的尾部区域 。通常含有该节的一些基本信息，如：作者，相关文档链接，版权资料。

```html
<footer>原创作者;版权信息;联系方式;文档相关链接等...</footer>
```

### nav 元素

`<nav>` 元素代表页面的导航链接区域。用于定义页面的主要导航部分。

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

### section 元素

`<section>`元素代表文档中的“节”或“段”，“段”可以是指一篇文章里按照主题的分段；“节”可以是指一个页面里的分组。

```html
<section>
    <h1>这里是 section 标题...</h1>
    <p>这里是 section 标题对于内内容...</p>
</section>
```

### aside 元素

`<aside>` 元素被包含在 article 元素中作为主要内容的附属信息部分，其中的内容可以是与当前文章有关的相关资料、标签、名次解释等。

```html
<article>     
    <p>内容</p>     
    <aside>         
        <h1>作者简介</h1>         
        <p>内容</p>     
    </aside>
</article>
```

### details 元素

描述文档或者文档某一部分细节，summary 是 details 元素的标题

```html
<details>
    <summary>标题</summary>
    <p>内容</p>
</details>
```

### figure 元素

<figure> 元素代表一段独立的内容.用于对元素进行组合。多用于图片与图片描述组合。

```html
<!-- Just a figure -->
<figure>
  <img src="figure.png" alt="figure.png图片按" title="figure图片">
</figure>
<p>段落</p>
 
<!-- Figure with figcaption -->
<figure>
   <img src="figure.png" alt="figure.png图片按" title="figure图片">picture">   
   <figcaption>figure图片描述</figcaption>
</figure>
<p>段落.....</p>
```

### time 元素

定义日期/时间

```html
<time datetime="2021-06-01">
```

### 新语义化标签的作用：

- 去掉或样式丢失的时候能让页面呈现清晰的结构
- 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页
- 有利于SEO
- 便于团队开发和维护，遵循W3C标准，可以减少差异化





## 自定义属性

> 在HTML5中，添加了data-*的方式来自定义属性，所谓data-*实际上就是data-前缀加上自定义的属性名，命名可以使用驼峰格式，但是取值必须要是全部小写（后面会说到原因，如果非要使用驼峰去获取，该怎么去写），使用这样的结构可以进行数据存放，下面来说一下，它的基本的使用方式：

1. html绑定的写法

	简单单词：

	```html
	<div id="testDiv" data-cd="24">
	    Click Here
	</div>
	```
	
	
	
	使用驼峰命名（这里需要特别注意的地方）:
	
	```html
	    <div id="testDiv" data-cartCd="24">
	        Click Here
	    </div>
	```

> 我们可以看到，上面的两种绑定方式，第一种是小写字母，第二种是驼峰式，那么这两种在取值的时候，又有何区别呢？

1. 取绑定的值的方法

	原生js的取法：

	```js
	//原生的dom对象上，有个dataset对象，里面包含了以data-为前缀的所有自定义属性的键值
	    var testDiv = document.getElementById('testDiv');
	    console.log(testDiv.dataset.cd); //'24'  简单的单词取法
	    console.log(testDiv.dataset.cartcd)  //'24' 这里要注意，大写的'C'需要写成小写才能获取到，否则就是undefined
	```
	
	
	
	jq的取法
	
	```html
	    //jq在原生的基础上，做了一层封装，我们可以通过jq封装的dom对象来获取，jq封装的dom对象上，暴露了一个data()的方法，参数就是我们自定义的属性值，即 data-后面的字段名
	    console.log($("#testDiv").data("cd"));//'24'
	    console.log($("#testDiv").data("cartcd"));//'24' 这里痛原生取法一样
	```
	
2. 修改绑定的数据

	原生js方式

	```html
	//直接赋值
	testDiv.dataset.cartcd = '新值'
	```
	
	
	
	jq的方式
	
	```html
	    //data()方法的第二个参数，为新值
	    $('testDiv').data('cartcd','新值')
	```

> 上面基本介绍了这个自定义属性的用法，其实这个应用场景还蛮多的，比方说：

- 我们渲染列表，点击列表，可以跳转对应项目的详情，实际上我们可以通过渲染的时候，把id之类的值通过data-id绑定到模板标签上，再通过js去获取该属性，再去做相应的跳转逻辑。
- 以前我们绑定一些数据的时候，通常都会使用隐藏的输入框去做。有了data-*，我们再也不用通过一个hidden的input的value去绑定数据，减少了页面的元素数量，简化dom结构，提升渲染性能.

> 其实说白了就一点，配合js做更好地数据交互。

> 当然，在前端框架比如vue，react里我们很少会用到，因为它们拥有属于自己的一套数据流控制，比如，props这样的一个东西，它能够完成的功能和发挥的作用，远远比data-*要强大的多，但实际上，在一些小场景，甚至是一两个页面中，还是不建议引入一个框架的，基本上，js原生就可以满足大多数的需求。

> 另外，可能有些同学，会比较在意，我先前说到的，如果非要通过驼峰去取值，那怎么才能取到，而不是undefined呢？

> 在这里啊，要跟大家说一个小知识，就是我们一般写data-的时候，常用都是data-xxx，一般都是这种形式，而这种形式呢，我们在xxx的占位里无论写大写还是小写，取值的时候，这部分就必须按照全部小写的规则去取。那么，肯定还有另外一种规则，是的，还有一种规则，我们可以写出data-xx-xx的形式，那么看到这里，我想聪明的你已经明白了：

> woc，这种方式有些熟悉啊，习惯了使用vue框架来开发的你，肯定喜欢自定义组件吧，那么在Vue的自定义组件名称中，命名和引用，是要经过一层转换的：

```vue
<test-component></test-component>

import testComponent form './components/test-component'

export default {
    components:{
        testComponent
    }
}
```

> 连字符转驼峰，其实就是匹配 - 字符之后的第一个字母，将其转换成大写：

```js
    let str = 'str-arr-test';
    str = str.split('-').reduce((acc, val, idx) => idx === 0 ?
        acc + val : acc + val[0].toLocaleUpperCase() + val.slice(1), '');
    console.log(str)
```

> 驼峰转连字符，可以使用正则匹配的方式，匹配出所有大写字母的位置，替换成-小写的形式：

```js
    let str = 'strArrTest';
    str = str.replace(/([A-Z])/g, function ($1) {
        return '-' + $1.toLocaleLowerCase();
    });
    console.log(str);
```

> 那么，话说回来，如果我们必须要用驼峰的方式，去获取data-*的属性值，那么我们就需要在设值的时候，通过连字符短划线-的方式去命名，比如：

```js
<div id='testDiv' data-card-cd='24'>
var testDiv = document.getElementById('testDiv')
console.log(testDiv.dataset.cartCd);  //'24'
```

> 我们可以在网页上面证实一下结果：



![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211227114846.webp)





![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211227114846.webp)



> 由上图我们可以看出来，我们在元素上绑定了data-id-id的属性，顺利的通过dataset.idId的方式，获取到了属性值。简直就是强迫症患者的福音（手动狗头）



## **删除的标签**

​	<font>	<center>	<basefont>	<big>

​	<s>		<strike>	<tt>		<u>

​	<bgsound>	<marquee>	<applet>	<rb>

​	<acronym>	<dir>	<isiindex>	<xmp>

​	<nextid>	<plaintext>

​	HTML5以后也不再支持框架了

## **添加的其他属性**

  在<ol>中添加了reversed属性，指定列表倒序显示

​		为<style>元素新添属性scoped,使这个style局部有效（火狐有效）

​		为<script>元素添加属性async，使js代码异步传输

​		注意：async只有使用src引入文件时有效



​		全局属性（所有标签有效）：

​			contentEditable是否可以编辑

​			hidden隐藏元素

​			spellcheck拼写检查（false/true）



## 数据存储

随着Web应用的出现，也产生了对于能够直接在客户端上存储用户信息能力的要求。由于cookie与IE中提供的持久化用户数据的容量限制以及数据安全问题，不能大量存储数据和安全数据，H5中提供了WebStorage

![image.png](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211129152956.webp)

### Cookie

#### 什么是cookie

cookie 是比较老的前端缓存技术，使用 cookie 必须要有服务器（HTML 静态网页无效）。为什么要有服务才能使用 cookie 呢？因为 cookie 是要在服务器和浏览器来回输送的，由于浏览器的的跨域限制，客户端和服务端必须保证是同源策略（也就是跨域）。而且 cookie 是存放在前端的，安全一直以来是个问题，适合使用一些会话信息传输。如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称==会话cookie==。如果在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失

`cookie`是**客户端**的解决方案，是一种网络服务器存储在计算机或移动设备上的==纯文本文件==，是服务器发送到Web浏览器上的一小块数据。一般大小限制在4kb以内。

`cookie`是一个在服务器和客户端之间来回传送文本值的内置机制，服务器可以根据`cookie`追踪用户在不同页面的访问信息。(当接收到客户端发出的HTTP请求时，服务器可以发送带有响应的==Set-Cookie==标头，然后将`cookie`与HTTP请求头一起发送请求。)

#### 用处与特点

>   ### 用处
>
>   +   会话管理：用户账号密码
>   +   个性化：用户偏好设置
>   +   追踪：记录和分析用户行为
>
>   特点：
>
>   +   大小限制在4KB以内
>   +   都会消耗网络的带宽
>   +   不加密则不安全
>   +   使用JS操作Cookie比较复杂





#### cookie的属性

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211128221003.png" alt="image-20211128220956047" style="zoom:67%;" />

cookie机制：如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称会话cookie。如果在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。

Cookie是服务器发给客户端的特殊信息，cookie是以文本的方式保存在客户端，每次请求时都带上它

#### **安装：**

方式一：

```js
<script src="https://cdn.bootcdn.net/ajax/libs/js-cookie/latest/js.cookie.js"></script>
```

方式二：

```js
//安装
npm install -S js-cookie
//引入
import Cookies from "js-cookie";
```

#### **使用：**

创建：

```js
//1、存cookie  set方法支持的属性有 ：  expires->过期时间    path->设置为指定页面创建cookie   domain-》设置对指定域名及指定域名的子域名可见  secure->值有false和true ,表示设置是否只支持https,默认是false
//创建简单的cookie
Cookies.set('name', 'value');
//创建有效期为7天的cookie
Cookies.set('name', 'value', { expires: 7 });
//为当前页创建有效期7天的cookie
Cookies.set('name', 'value', { expires: 7, path: '' });
//官方文档只要设置天数，没有时分秒，这样我们想设置更小单位的时候无法下手，其实也可以设置时间戳来处理时间的，下面这种方式可以设置任意单位的有效期：  时间戳往后延长十秒
let seconds = 10;
let expires = new Date(new Date() * 1 + seconds * 1000);
Cookies.set('username', 'value', {
    expires: expires
 }); // 10 秒后失效
```

取值：

```js
Cookies.get('name'); // => 'value'
Cookies.get('nothing'); // => undefined
//获取所有cookie
Cookies.get(); // => { name: 'value' }
注意：如果存的是对象，如： userInfo = {age:111,score:90};  Cookie.set('userInfo',userInfo)
取出来的userInfo需要进行JSON的解析,解析为对象：let res = JSON.parse( Cookie.get('userInfo') );
当然你也可以使用：Cookie.getJSON('userInfo');
【详解】  两种方法解析：
js-cookie允许你向cookie中存储json信息。
如果你通过set方法，传入Array或类似对象，而不是简单的string，那么js-cookie会将你传入的数据JSON.stringif转换为string保存。

Cookies.set('name', { foo: 'bar' });
Cookies.get('name'); // => '{"foo":"bar"}'
Cookies.get(); // => { name: '{"foo":"bar"}' }
如果你用getJSON方法获取cookie，那么js-cookie会用JSON.parse解析string并返回。
------------------------
Cookies.getJSON('name'); // => { foo: 'bar' }
JSON.parse(Cookies.get('useInfo'));
Cookies.getJSON(); // => { name: { foo: 'bar' } }
```

删除：

```js
Cookies.remove('name');

//如果值设置了路径，那么不能用简单的delete方法删除值，需要在delete时指定路径
Cookies.set('name', 'value', { path: '' });
Cookies.remove('name'); // 删除失败
Cookies.remove('name', { path: '' }); // 删除成功
//注意，删除不存在的cookie不会报错也不会有返回
```

```js
//通过函数设置 cookie
function setCookie(name,value,options={}){
    let cookieData = `${name}=${value};`;
    for(let key in options){
        let str = `${key}=${options[key]};`;
        cookieData += str;
    };
    document.cookie = cookieData;
};

// 获取 cookie
function getCookie(name){
    let arr = document.cookie.split("; ");
    for(let i =0;i<arr.length;i++){
        let arr2 = arr[i].split("=");
        if(arr2[0]==name){
            return arr2[1];
        };
    };
    return "";
};
```

#### **命名空间**

如果担心不小心修改掉Cookies中的数据，可以用noConflict方法定义一个新的cookie。

```js
var Cookies2 = Cookies.noConflict();
Cookies2.set('name', 'value');
```

#### 骚操作

**1.read**

通过withConverter方法可以覆写默认的decode实现，并返回一个新的cookie实例。所有与decode有关的get操作，如Cookies.get()或Cookies.get(‘name’)都会先执行此方法中的代码。

```js
document.cookie = 'escaped=%u5317';
document.cookie = 'default=%E5%8C%97';
var cookies = Cookies.withConverter(function (value, name) {
    if ( name === 'escaped' ) {
        return unescape(value);
    }
});
cookies.get('escaped'); // 北
cookies.get('default'); // 北
cookies.get(); // { escaped: '北', default: '北' }12345678910
```

------

**2.write**

通过withConverter方法也可以覆写默认的encode实现，并返回一个新的cookie实例。

```js
Cookies.withConverter({
    read: function (value, name) {
        // Read converter
    },
    write: function (value, name) {
        // Write converter
    }
});
```



### session

#### 什么是session

Session是保存在服务器记录客户状态的机制。客户端浏览器访问服务器的时候，服务器会为这次请求开辟一块`内存空间`，这个对象便是**==Session 对象==**，存储结构为 `ConcurrentHashMap`。Session 弥补了 HTTP 无状态特性，服务器可以利用 Session 存储客户端在同一个会话期间的一些操作记录。

#### session的创建

+   用户向服务器发送用户名和密码
+   服务器通过验证后，在当前对话(session)里面保存相关数据(比如用户角色，登录时间等)
+   服务器向用户返回一个`session_id`，写入cookie
+   用户随后的每一次请求都会通过cookie，将`session_id`传回服务器
+   服务器收到**==`session_id`==**，找到前期保存的数据，由此得知用户的身份。

#### session机制

session机制：当服务器收到请求需要创建session对象时，首先会检查客户端请求中是否包含session_id，如果有，服务器将根据id返回对应的session对象。如果没有session_id，服务器会创建新的session对象，并把session_id在本次响应中返回给客户端。

==session通过类似与Hashtable的数据结构来保存，能支持任何类型的对象(session中可含有多个对象)  大小没有限制==

#### 缺点：

（1）Session保存的东西越多，就越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大。

（2）依赖于cookie（sessionID保存在cookie），如果禁用cookie，则要使用URL重写，不安全

（3）创建Session变量有很大的随意性，可随时调用，不需要开发者做精确地处理，所以，过度使用session变量将会导致代码不可读而且不好维护。

（4）A 服务器存储了 Session，就是做了负载均衡后，假如一段时间内 A 的访问量激增，会转发到 B 进行访问，但是 B 服务器并没有存储 A 的 Session，会导致 Session 的失效。





>   ### cookie和session的场景
>
>   应用场景：
>
>   cookie：
>
>   （1）判断用户是否登陆过网站，以便下次登录时能够实现自动登录（或者记住密码）。如果我们删除cookie，则每次登录必须从新填写登录的相关信息。
>
>   （2）保存上次登录的时间等信息。
>
>   （3）保存上次查看的页面
>
>   （4）浏览计数
>
>   session：Session用于保存每个用户的专用信息，变量的值保存在服务器端，通过SessionID来区分不同的客户。
>
>   （1）网上商城中的购物车
>
>   （2）保存用户登录信息
>
>   （3）将某些数据放入session中，供同一用户的不同页面使用
>
>   （4）防止用户非法登录




### WebStorage（综述）

#### 两个主要目标：

（1）提供一种在cookie之外存储会话数据的路径。

（2）提供一种存储大量可以跨会话存在的数据的机制。

#### 存储大小：

localStorage和sessionStorage的存储数据大小一般都是：5MB

#### 存储位置：

localStorage和sessionStorage都保存在客户端，不与服务器进行交互通信。

#### 存储内容类型：

localStorage和sessionStorage只能存储字符串类型，对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理

#### 获取方式：

**localStorage**：window.localStorage;；**sessionStorage**：window.sessionStorage;。

#### ==**WebStorage的优点：**==

1.  存储空间更大：cookie为4KB，而WebStorage是5MB；
2.  节省网络流量：WebStorage不会传送到服务器，存储在本地的数据可以直接获取，也不会像cookie一样美词请求都会传送到服务器，所以减少了客户端和服务器端的交互，节省了网络流量；
3.  对于那种只需要在用户浏览一组页面期间保存而关闭浏览器后就可以丢弃的数据，sessionStorage会非常方便；
4.  快速显示：有的数据存储在WebStorage上，再加上浏览器本身的缓存。获取数据时可以从本地获取会比从服务器端获取快得多，所以速度更快；
5.  安全性：WebStorage不会随着HTTP header发送到服务器端，所以安全性相对于cookie来说比较高一些，不会担心截获，但是仍然存在伪造问题；
6.  WebStorage提供了一些方法，数据操作比cookie方便；
7.  setItem (key, value) —— 保存数据，以键值对的方式储存信息。

### sessionStorage

#### 机制

sessionStorage 对象是存储特定于某个会话的数据，也就是数据只保存到浏览器关闭后消失，存储在sesstionStorage 中的数据可以跨页面刷新而存在。sessionStorage的生命周期是在仅在当前会话下有效。sessionStorage引入了一个==“浏览器窗口”==的概念，sessionStorage是在同源的窗口中始终存在的数据。只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。但是sessionStorage在关闭了浏览器窗口后就会被销毁。同时独立的打开同一个窗口同一个页面，sessionStorage也是不一样的。

#### 特点

+   同源策略限制，若想在同一个页面之间对同一个 sessionStorage 进行操作，这些页面必须是同协议、域名、端口号。
+   单标签页限制，sesstionStorage 操作限制在单个标签页中，在此标签页进行同源页面访问都可以共享 sesstionStorage 数据。
+   只在本地存储，seesionStorage 的数据不会跟随HTTP请求一起发送到服务器，只会在本地生效，并在关闭标签页后清除数据。
+   存储方式，seesionStorage 的存储方式采用 key、value 的方式。
+   存储上限限制，不同的浏览器存储的上限也不一样，但大多数浏览器把上限限制在 5MB 以下。

#### **sessionStorage 的用法**

```javascript
sessionStorage.length  // 获取 storage 的个数
sessionStorage.key(n)  // 获取 storage 中第 n 个元素对的键值
sessionStorage.getItem(key)  // 获取 key 对应的值
sessionStorage.key    // 获取键值 key 对应的值
sessionStorage.setItem(key, value)  // 添加数据，键值为 key，值为 value
sessionStorage.removeItem(key)  // 移除键值为 key 的值
sessionStorage.clear()  // 清除所有数据
```



### localStorage

#### 机制

生命周期是永久性的。`localStorage`存储的数据，以“键值对”的形式存在。即使关闭浏览器，也不会让数据消失，除非主动的去删除数据。如果想设置失效时间，需自行封装。`localStorage` 在所有同源窗口中都是共享的。

####  localStorage 的特点

+   localStorage 会将第一次请求的数据直接存储在本地，可以存储 5M 数据，相比于 cookie 可以解决带宽，但只有高版本浏览器中才支持。
+   目前所有浏览器都会把 localStorage 的值类型==限定为 string 类型==，对于我们比较常见的 JSON 对象类型需要转换。
+   localStorage 本质上是对字符串的读取，如果存储内容多的话会小号内存空间，导致页面变卡。

#### **localStorage 的用法**

```js
localStorage.length //获得storage中的个数
localStorage.key(n)    //获得storage中第n个元素对的键值（第一个元素是0）
localStorage.getItem(key)    //获取键值key对应的值
localStorage.key    //获取键值key对应的值
localStorage.setItem(key, value)    //添加数据，键值为key，值为value
localStorage.removeItem(key)    //移除键值为key的数据
localStorage.clear()    //清除所有数据
```

>   ### 应用场景
>
>   localStoragese：常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据（令牌）。sessionStorage：敏感账号一次性登录；

### IndexedDB

`IndexedDB`是一个运行在浏览器上的非关系型数据库，储存空间大，**用于客户端存储大量结构化数据(包括文件和blobs)** 。IndexedDB是一个基于JavaScript的面向对象的数据库，可以存字符串，也可以存二进制数据，数据以"键值对"的形式保存，不能有重复，否则会报错。除非被清理，否则一直存在。

+   键值对储存
+   异步
+   支持事务
+   同源策略
+   支持二进制储存

### JWT(JSON Web Token）

#### 什么是token

##### **Token的定义**：

`Token`是服务端生成的一串字符串，以作客户端进行请求的一个令牌，当第一次登录后，服务器生成一个`Token`便将此`Token`返回给客户端，以后客户端只需带上这个`Token`前来请求数据即可，无需再次带上用户名和密码。`token`其实说的更通俗点可以叫暗号，在一些数据传输之前，要先进行暗号的核对，不同的暗号被授权不同的数据操作。

##### **简单 token 的组成**：

+   `uid`(用户唯一的身份标识)
+   `time`(当前时间戳)
+   `sign`（签名，token 的前几位以哈希算法压缩成的一定长度的十六进制字符串

##### **token 的身份验证流程**：

+   客户端使用用户名跟密码请求登录
+   服务端收到请求，去验证用户名与密码
+   客户端收到 `token` 以后，会把它存储起来，比如放在 `cookie` 里或者 `localStorage` 里
+   客户端每次向服务端请求资源的时候需要带着服务端签发的 `token`
+   服务端收到请求，然后去验证客户端请求里面带着的 `token` ，如果验证成功，就向客户端返回请求的数据。

<img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211129161924.webp" alt="image.png" style="zoom:67%;" />

##### **使用Token的目的**：

`Token`的目的是为了减少频繁的查询数据库，减轻服务器的压力。基于`Token`用户认证是一种服务器无状态的认证方式，服务器不存放数据，所有数据都保存在客户端，每次请求都发回服务器，用解析`token`的时间来换取`session`的储存空间，从而减轻服务器的压力，减少频繁的查询数据库。`token` 完全由应用管理，所以它可以避开同源策略

#### 什么是 JWT？

##### JWT的原理

`JWT`的原理是，服务器认证以后，生成一个 `JSON` 对象，发回给用户,以后，用户与服务端通信的时候，都要发回这个 `JSON` 对象。服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名。服务器就不保存任何 `session` 数据了，也就是说，服务器变成无状态了，从而比较容易实现扩展。 <img src="https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211129162304.webp" alt="image.png" style="zoom:67%;" />

##### JWT的数据结构

+   **Header（头部）**：

    `Header`部分是一个`JSON`对象，描述`JWT`的元数据，使用`Base64`编码转成字符串。

+   **Payload（负载）**：

    `Payload`是一个`JSON`对象，用来存放实际需要传递的数据，使用`Base64`编码转成字符串。

    +   iss (issuer)：签发人
    +   exp (expiration time)：过期时间
    +   sub (subject)：主题
    +   aud (audience)：受众
    +   nbf (Not Before)：生效时间
    +   iat (Issued At)：签发时间
    +   jti (JWT ID)：编号

+   **Signature（签名）**：

    `Signature`是对前两部分的签名，防止数据篡改。首先，需要指定一个密钥（secret）。这个密钥只有服务器才知道，不能泄露给用户。然后，使用`Header`里面指定的签名算法（默认是 HMAC SHA256）产生签名。用"点"（`.`）分隔拼接成字符串后返回给用户。

##### JWT的特点

+   默认不加密，也可以加密
+   可以用于认证，也可以用于交换信息。降低服务器查询数据库的次数，减小服务器压力
+   服务器无状态，因此无法在使用过程中废除某个`Token`，或者更改`Token`的权限。即一旦`JWT`签发了，在到期之前始终有效，除非服务器部署额外的逻辑
+   `JWT`本身包含了认证信息，为保证安全性，有效期应设置得比较短
+   为了减少盗用，`JWT`应使用`HTTPS`协议传输

#### token存入localstorage还是cookie好

+   将Token存储于LocalStorage或SessionStorage
    +   由于LocalStorage 和 SessionStorage 都可以被 javascript 访问，所以容易受到`XSS`攻击。尤其是项目中用到很多第三方的Javascript类库。另外，需要应用程序来保证Token只在HTTPS下传输。
+   将Token存储于Cookie
    +   优点：可以指定 `httpOnly`，来防止被Javascript读取，也可以指定`secure`，来保证token只在HTTPS下传输
    +   缺点：不符合Restful 最佳实践。容易遭受`CSRF`攻击 （可以在服务器端检查 Refer 和 Origin）

==推荐使用Cookie来存储Token==：相比较而言，Web Storage比Cookie更容易受到攻击。



## WebMessage

当我们的需求为在HTML中内嵌的一个iframe框架，我们想要将主页面中的某个数据传递给iframe时，我们可以使用webMessage进行传递。

```html
//webmessage_iframe.html
<body>
    <div>
        <textarea id="text_show" cols="30" rows="10" placeholder="聊天记录显示"></textarea>
    </div>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
    <script>
        //监控，当有数据的时候进行显示
        【添加一个事件监听器，检测是否有数据进行传递】
        window.addEventListener('message', (myData) => {
            console.log(myData.data)
            $('#text_show').append(myData.data)
                // document.getElementById('text_show').innerHTML = myData.data
        })
    </script>
</body>
---------------------------------------------------------------
//webmessage.html
<body>
	/**
		1.以 HTML 对象来返回 iframe 中的文档
		2.window调用contentWindow.postMessage方法进行数据传送
		3.需要通过window调用postMessage方法
	*/
    <!-- 嵌入外部页面 -->
    <iframe src="./webmessage_ifrmae.html" frameborder="0" id="iframe"></iframe>
    <div>
        <input type="text" id="text_in">
        <button id="send_btn">发送</button>
    </div>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
    <script>
        // 点击发送，window调用contentWindow.postMessage方法进行数据传送
        $('#send_btn').on('click', () => {
            //获取聊天框的内容
            var data = $('#text_in').val();
            console.warn(data)
            console.warn('已点击')
                //嵌入的页面进行发送
            document.getElementById('iframe').contentWindow.postMessage(data, "http://127.0.0.1:5500")
        })
    </script>
</body>
```



## WebSocket

### 前言

当我们的需求为一个聊天室的应用，我们需要时刻知道是否有人发布了新的消息，一般情况下的解决方案：轮询和长连接。

轮询：客户端定时向服务器发送Ajax请求，服务器接到请求后马上返回响应信息并关闭连接。

​		缺点：因为轮询需要在项目的使用过程中，每个一段时间就发送一个请求到后台（比如用户并没有发送新的消息，而轮询是一直在进行的），这样就导致了请求中有大半是无用，浪费带宽和服务器资源。 

长连接：客户端项服务器端发起一个请求，服务器和客户端会保持连接。当有新的消息产生时，会将新的消息推送的给连接池（聊天室的所有用户）中的客户，而无消息的情况下，服务器端是不会有其它动作的。

​		缺点：因为一直保持连接的状态，也造成一部分的资源浪费。

### 什么是websocket

WebSocket 是一种在单个TCP连接上进行全双工通信的协议。WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。

在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接， 并进行双向数据传输。（维基百科）

WebSocket本质上一种**`计算机网络应用层的协议`**，用来弥补http协议在持久通信能力上的不足。

WebSocket 协议在2008年诞生，2011年成为国际标准。现在最新版本浏览器都已经支持了。

### 特点

它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于[服务器推送技术](https://link.juejin.cn?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPush_technology)的一种。

1. 建立在 TCP 协议之上，服务器端的实现比较容易。
2. 与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
3. 数据格式比较轻量，性能开销小，通信高效。
4. 可以发送文本，也可以发送二进制数据。
5. 没有同源限制，客户端可以与任意服务器通信。
6. 协议标识符是`ws`（如果加密，则为`wss`），服务器网址就是 URL。

```js
ws://example.com:80/some/path
```

### 为什么需要 WebSocket？

我们已经有了 HTTP 协议，为什么还需要另一个协议？它能带来什么好处？

因为 HTTP 协议有一个缺陷：通信只能由客户端发起，不具备服务器推送能力。

举例来说，我们想了解查询今天的实时数据，只能是客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。

### WebSocket 与 HTTP 的区别

WebSocket 与 HTTP的关系图：

![image.png](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211227172829.webp)

**相同点：** 都是一样基于TCP的，都是可靠性传输协议。都是应用层协议。

**联系：** WebSocket在建立握手时，数据是通过HTTP传输的。但是建立之后，在真正传输时候是不需要HTTP协议的。

下面一张图说明了 HTTP 与 WebSocket 的主要区别：

![img](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211227172833.webp)

1、WebSocket是双向通信协议，模拟Socket协议，可以双向发送或接受信息，而HTTP是单向的；

2、WebSocket是需要浏览器和服务器握手进行建立连接的，而http是浏览器发起向服务器的连接。

注意：虽然HTTP/2也具备服务器推送功能，但HTTP/2 只能推送静态资源，无法推送指定的信息。

### WebSocket协议的原理

与http协议一样，WebSocket协议也需要通过已建立的TCP连接来传输数据。具体实现上是通过http协议建立通道，然后在此基础上用真正的WebSocket协议进行通信，所以WebSocket协议和http协议是有一定的交叉关系的。

首先，WebSocket 是一个持久化的协议，相对于 HTTP 这种非持久的协议来说。简单的举个例子吧，用目前应用比较广泛的 PHP 生命周期来解释。

HTTP 的生命周期通过 Request 来界定，也就是一个 Request 一个 Response ，那么在 HTTP1.0 中，这次 HTTP 请求就结束了。

在 HTTP1.1 中进行了改进，使得有一个 keep-alive，也就是说，在一个 HTTP 连接中，可以发送多个 Request，接收多个 Response。但是请记住 Request = Response， 在 HTTP 中永远是这样，也就是说一个 Request 只能有一个 Response。而且这个 Response 也是被动的，不能主动发起。

首先 WebSocket 是基于 HTTP 协议的，或者说借用了 HTTP 协议来完成一部分握手。

首先我们来看个典型的 WebSocket 握手

```js
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```

熟悉 HTTP 的童鞋可能发现了，这段类似 HTTP 协议的握手请求中，多了这么几个东西。

```js
Upgrade: websocket
Connection: Upgrade
```

这个就是 WebSocket 的核心了，告诉 Apache 、 Nginx 等服务器：注意啦，我发起的请求要用 WebSocket 协议，快点帮我找到对应的助理处理~而不是那个老土的 HTTP。

```js
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```

首先， Sec-WebSocket-Key 是一个 Base64 encode 的值，这个是浏览器随机生成的，告诉服务器：泥煤，不要忽悠我，我要验证你是不是真的是 WebSocket 助理。

然后， Sec_WebSocket-Protocol 是一个用户定义的字符串，用来区分同 URL 下，不同的服务所需要的协议。简单理解：今晚我要服务A，别搞错啦~

最后， Sec-WebSocket-Version 是告诉服务器所使用的 WebSocket Draft （协议版本），在最初的时候，WebSocket 协议还在 Draft 阶段，各种奇奇怪怪的协议都有，而且还有很多期奇奇怪怪不同的东西，什么 Firefox 和 Chrome 用的不是一个版本之类的，当初 WebSocket 协议太多可是一个大难题。。不过现在还好，已经定下来啦~大家都使用同一个版本： 服务员，我要的是13岁的噢→_→

然后服务器会返回下列东西，表示已经接受到请求， 成功建立 WebSocket 啦！

```js
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```

这里开始就是 HTTP 最后负责的区域了，告诉客户，我已经成功切换协议啦~

```js
Upgrade: websocket
Connection: Upgrade
```

依然是固定的，告诉客户端即将升级的是 WebSocket 协议，而不是 mozillasocket，lurnarsocket 或者 shitsocket。

然后， Sec-WebSocket-Accept 这个则是经过服务器确认，并且加密过后的 Sec-WebSocket-Key 。 服务器：好啦好啦，知道啦，给你看我的 ID CARD 来证明行了吧。

后面的， Sec-WebSocket-Protocol 则是表示最终使用的协议。

至此，HTTP 已经完成它所有工作了，接下来就是完全按照 WebSocket 协议进行了。

### webSocket连接过程

**总结，WebSocket连接的过程是：**

**首先，客户端发起http请求，经过3次握手后，建立起TCP连接；http请求里存放WebSocket支持的版本号等信息，如：Upgrade、Connection、WebSocket-Version等；**

**然后，服务器收到客户端的握手请求后，同样采用HTTP协议回馈数据；**

**最后，客户端收到连接成功的消息后，开始借助于TCP传输信道进行全双工通信。**

### Websocket的优缺点

**优点：**

- WebSocket协议一旦建议后，互相沟通所消耗的请求头是很小的
- 服务器可以向客户端推送消息了

**缺点：**

- 少部分浏览器不支持，浏览器支持的程度与方式有区别（IE10）

### [应用场景](https://cloud.tencent.com/developer/article/1004362)

- 多玩家游戏
- 在线协同编辑/编辑
- 实时数据流的拉取与推送
- 体育/游戏实况
- 实时地图位置
- 即时`Web`应用程序：即时`Web`应用程序使用一个`Web`套接字在客户端显示数据，这些数据由后端服务器连续发送。在`WebSocke`t中，数据被连续推送/传输到已经打开的同一连接中，这就是为什么`WebSocket`更快并提高了应用程序性能的原因。 例如在交易网站或比特币交易中，这是最不稳定的事情，它用于显示价格波动，数据被后端服务器使用Web套接字通道连续推送到客户端。
- 游戏应用程序：在游戏应用程序中，你可能会注意到，服务器会持续接收数据，而不会刷新用户界面。屏幕上的用户界面会自动刷新，而且不需要建立新的连接，因此在`WebSocket`游戏应用程序中非常有帮助。
- 聊天应用程序：聊天应用程序仅使用`WebSocket`建立一次连接，便能在订阅户之间交换，发布和广播消息。它重复使用相同的`WebSocket`连接，用于发送和接收消息以及一对一的消息传输。

### 不能使用WebSocket的场景

如果我们需要通过网络传输的任何实时更新或连续数据流，则可以使用`WebSocket`。如果我们要获取旧数据，或者只想获取一次数据供应用程序使用，则应该使用`HTTP`协议，不需要很频繁或仅获取一次的数据可以通过简单的`HTTP`请求查询，因此在这种情况下最好不要使用`WebSocket`。

注意：如果仅加载一次数据，则`RESTful` `Web`服务足以从服务器获取数据。


更多详细可参考[**掘金博客**](https://juejin.cn/post/7020964728386093093)



### demo

首先需要一个服务器

安装nodejs-websocket

```nginx
npm install nodejs-websocket
```

建立服务器文件socket.js

```js
const ws=require('nodejs-websocket');
console.log('开始建立连接...')

const socket=ws.createServer(function(conn){
    conn.on('text',function(str){
        console.log('message:'+str)
        let msg='websocket处于运行状态...'
        setInterval(()=>{
            conn.sendText(msg);
        },3000)
    })
    conn.on('close',function(code,reason){
        console.log('关闭连接')
    });
    conn.on('error',function(code,reason){
        console.log('异常关闭',code,reason)
    });
}).listen(8666)
console.log('websocoket建立完毕')
module.exports=socket
```

node运行服务器文件

![image-20211228102019397](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211228102019.png)

客户端测试文件：

```html
<body>
<div id="test"></div>
<script>
    if(window.WebSocket){
        var ws = new WebSocket('ws://localhost:8666');
        ws.onopen = function(e){
            console.log("连接服务器成功");
            // 向服务器发送消息
            ws.send("来自客户端的消息");
        }
        ws.onclose = function(e){
            console.log("服务器关闭");
        }
        ws.onerror = function(){
            console.log("连接出错");
        }
        // 接收服务器的消息
        ws.onmessage = function(e){
            let message = "message:"+e.data;
            console.log(message);
            document.getElementById('test').innerHTML = message
        }
    }
</script>
</body>
```

**https://juejin.cn/post/6988052281627246606#heading-9**



## 地图API

### 检查浏览器对定位的支持

```js
if (navigator.geolocation) { //检测是否支持地理定位
   navigator.geolocation.getCurrentPosition(function(e) {
        console.log(e) //定位信息
   });
} else {
    console.log('error');
}
```

### 如何使用地图？

**百度地图官方文档:https://lbsyun.baidu.com/index.php?title=jspopularGL**

**第一步**：在百度开发平台进行注册，然后创建一个应用，得到一个AK码

![image-20211228110416478](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211228110416.png)

```js
 <script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=xxxx">这里输入ak
```

![image-20211228110847944](https://gitee.com/gao-jiahuina/blogimgs/raw/master/img/20211228110848.png)

在这里可以获取坐标

在普通html文件使用地图需要满足这些条件

1. 有一个节点可以放置地图

	```html
	<div id="container"></div>
	```

2. 给节点设置高度和宽度

	```css
	<style type="text/css">
	        html {
	            height: 100%
	        }
	        body {
	            height: 100%;
	            margin: 0px;
	            padding: 0px
	        }       
	        #container {
	            height: 100%
	        }
	</style>
	```

3. 引入script标签

	```
	<script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=xxx">
	    </script>
	```

	

4. 创建地图

	```js
	var map = new BMapGL.Map("container");
	// 创建地图实例 
	var point = new BMapGL.Point(116.404, 39.915);
	// 创建点坐标 
	map.centerAndZoom(point, 15);
	// 初始化地图，设置中心点坐标和地图级别
	```

5. 具体的一些比例尺等其他可以从官方文档查询

	```js
	<script type="text/javascript">
	// 创建地图实例 
	var map = new BMapGL.Map("container");
	// 创建点坐标 
	var point = new BMapGL.Point(116.404, 39.915);
	// 初始化地图，设置中心点坐标和地图级别 
	map.centerAndZoom(point, 15);
	//滚轮缩放
	map.enableScrollWheelZoom(true);
	//地球模式
	map.setMapType(BMAP_EARTH_MAP); 
	// 添加比例尺控件
	var scaleCtrl = new BMapGL.ScaleControl();  
	map.addControl(scaleCtrl);
	// 添加缩放控件
	var zoomCtrl = new BMapGL.ZoomControl();  
	map.addControl(zoomCtrl);
	// 添加城市列表控件
	var cityCtrl = new BMapGL.CityListControl(); 
	map.addControl(cityCtrl);
	//定制功能
	var loCtrl = new BMapGL.LocationControl(); 
	map.addControl(loCtrl);
	</script> 
	```

完整demo:

```html
<head>
    <style type="text/css">
        html {
            height: 100%
        }
        
        body {
            height: 100%;
            margin: 0px;
            padding: 0px
        }
        
        #container {
            height: 100%
        }
    </style>
    <script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=tUr2GWjRh8pdrSfCRKPeHzoW5ShaIzFq">
    </script>
</head>

<body>
    <div id="container"></div>
    <script type="text/javascript">
        var map = new BMapGL.Map("container");
        // 创建地图实例 
        var point = new BMapGL.Point(116.404, 39.915);
        // 创建点坐标 
        map.centerAndZoom(point, 15);
        // 初始化地图，设置中心点坐标和地图级别
    </script>
</body>
```





