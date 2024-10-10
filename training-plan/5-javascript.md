# JavaScript 基础知识

## 简介

- JavaScript 和 Java 是两门完全不同的编程语言。
- Java（由 Sun 发明）是更复杂的编程语言。
- ECMA-262 是 JavaScript 标准的官方名称。
- JavaScript 由 Brendan Eich 发明。它于 1995 年出现在 Netscape 中（该浏览器已停止更新，Firefox 浏览器的前身），并于 1997 年被 ECMA（一个标准协会）采纳。

## ECMAScript 版本

JavaScript 已经由 ECMA（欧洲电脑制造商协会）通过 ECMAScript 实现语言的标准化。

| 年份 | 名称                    | 描述                                                |
| :--- | :---------------------- | :-------------------------------------------------- |
| 1997 | ECMAScript 1            | 第一个版本                                          |
| 1998 | ECMAScript 2            | 版本变更                                            |
| 1999 | ECMAScript 3            | 添加正则表达式 添加 try/catch                       |
|      | ECMAScript 4            | 没有发布                                            |
| 2009 | ECMAScript 5 **(ES 5)** | 添加 "strict mode"，严格模式 添加 JSON 支持         |
| 2011 | ECMAScript 5.1          | 版本变更                                            |
| 2015 | ECMAScript 6 **(ES 6)** | 添加类和模块                                        |
| 2016 | ECMAScript 7 **(ES 7)** | 增加指数运算符 (\*\*) 增加 Array.prototype.includes |

注：

- ECMAScript 6 也称为 ECMAScript 2015 **(ES 2015)**。
- ECMAScript 7 也称为 ECMAScript 2016 **(ES 2016)**。
- 此后 JavaScript 标准大多也已年份相称（因为 JavaScript 标准更新太快了）

## JavaScript 语法

### 字面量（数据类型）

1.  数字(Number)：整数，浮点数，科学计数法，类似于 Python，无需考虑数据溢出。
2.  字符串(String)：用单引号或者是双引号（类似于 Python），如果是复杂的字符串，更建议使用飘号（在键盘数字 1 的左边）
3.  数组(Array)：用中括号括起来，类似于 Python，可以把很多数据存到一个变量中
4.  对象(Object)：类似于 Python 的字典，里面有许多由键值对组成的数据

### 操作符

1.  赋值(`=`, `+=`, `-=` 等)
2.  算术运算符
3.  逻辑运算符(`==`, `===`（严格等于运算符）, `%%`, `&&`, `!` , `xx ? xx : xx`)

### JavaScript 语句

- JavaScript 语句用分号分割，类似于 C 语言
- 但是 JavaScript 在执行过程中，倘若在缺少分号无法解析代码时，会自动添加分号，因此大多数情况也可以不在行位加分号，使代码更美观，具体看个人或者项目的代码风格

### JavaScript 注释

```js
// 这是一个注释

/* 这也是个注释 */
```

### JavaScript 一个饱受争议的机制

JavaScript 在运算时会尝试自动转换数据类型以完成运算

```js
console.log("a" + 123) // 'a123'
console.log("123" == 123) // true
console.log("123" === 123) // false
```

### 代码块

用一对花括号括起来

### 折行

用`\`对代码折行，如果一行代码太长的话，一般很少用到，因为虽然 JavaScript 会自动添加分号，但是它识别到这种能拼到一行能执行的语句不会对它添加分号

### 变量类型

- 在 ES6 之前，变量只有一种 `var` ，它的作用域为全局，在任何地方都可以 get 到它的值，因此在生产环境中带来很多麻烦。
- ES6 新增 `let` 和 `const` 两种变量类型，他们的作用域均为当前代码块，当然其子代码块可以 get 到他们的值
- `let` 和 `const` 的区别是，前者的值是可以更改的，后者的值一旦声明之后就无法更改（常量），因此，`const` 只声明而不使用是错误的行为

可以重新声明变量，变量的值不变

## JavaScript 数据类型

### 更多的数据类型

- 布尔(Boolean)：类似 Python，有 `true` 和 `false`
- 空(Null)
- 未定义(Undefined)
- Symble
- 正则(RegExp)
- 日期(Date)

JavaScript 中，相同的变量可以有不同的数据类型（类似 Python）

### 字符串

```js
const str = "Tesla Model 3"
console.log(str[0]) // T
console.log(str.length) // 13
```

#### 转义字符

| 代码  | 输出        |
| :---- | :---------- |
| \'    | 单引号      |
| \"    | 双引号      |
| \\    | 反斜杠      |
| \n    | 换行        |
| \r    | 回车        |
| \t    | tab(制表符) |
| \b    | 退格符      |
| \f    | 换页符      |
| \\`   | \`         |

#### 模板字符串

ES6 新增了模板字符串（用飘号括起来），类似于 Python 的 f-string

```js
console.log(`
Name: ${car.name};
Weight: ${car.weight};
Status: ${car.drive()};
`)
```

### 数组

```js
var cars = new Array()
cars[0] = "Saab"
cars[1] = "Volvo"
cars[2] = "BMW"

// 或者是下面的方法
var cars = new Array("Saab", "Volvo", "BMW")
```

### 对象

```js
var person = {
  firstname: "John",
  lastname: "Doe",
  id: 5566,
}

// 对象里面也可以塞函数（一般应该叫做方法）
const functions = {
  functionA: (a, b) => a + b,
  functionB: function (a, b) {
    return a * b
  },
}
```

注意：定义数组和对象时，最后一个元素后面不应该加逗号，否则可能会引起一些问题，比如在 get 元素数量时可能会多一个，具体取决于平台

### Undefined 和 Null

Undefined 这个值表示变量不含有值。

可以通过将变量的值设置为 null 来清空变量。

### 声明变量类型

当您声明新变量时，可以使用关键词 "new" 来声明其类型：

```js
var carname = new String()
var x = new Number()
var y = new Boolean()
var cars = new Array()
var person = new Object()
```

## JavaScript 对象

#### 真实生活中的对象，属性和方法

- 真实生活中，一辆汽车是一个对象。
- 对象有它的属性，如重量和颜色等，方法有启动停止等

```js
const car = {
  name: "Tesla Model Y",
  weight: `1.525t`,
  color: `white`,
  status: "off",
  drive: function () {
    if (this.status === "off") {
      this.status = "on"
    } else {
      this.status = "off"
    }
  },
}
```

### 访问对象属性&方法

```js
console.log(car.name)
console.log(car["name"])

// 访问方法
car.drive()
```

## JavaScript 函数

### 函数的声明

```js
// 之前声明函数的方式
function addTwoMembers(const x, const y) {
    return x + y;
}

// 匿名函数（没有函数名称）
function () {
    alert('Welcome to SDUT!')
}

// 箭头函数
const addTwoMembersPlus = (const x, const y) => {
    const z = x + y
    alert(`${x} + ${y} = ${z}`)
}
```

### 函数内变量的作用域

哪怕是使用了 `var` 定义，函数内部的变量在函数执行完后会自动销毁，函数外部无法访问函数内部的变量，但是函数内部可以访问外部的变量。

## JavaScript 程序结构

### if-else 结构

在 JavaScript 中，我们可使用以下条件语句（类似于 C 语言）：

- **if 语句** - 只有当指定条件为 true 时，使用该语句来执行代码
- **if...else 语句** - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
- **if...else if....else 语句**- 使用该语句来选择多个代码块之一来执行
- **switch 语句** - 使用该语句来选择多个代码块之一来执行

### for 循环

- for: 经典 for 循环（类似于 C 语言）
- for in: 遍历对象的索引
- for of: 遍历对象的值（类似于 Python）

```js
let list = [4, 5, 6]

for (let i in list) {
  console.log(i) // "0", "1", "2",
}

for (let i of list) {
  console.log(i) // 4, 5, 6
}
```

### while 循环

只要指定条件为 true，循环就可以一直执行代码块。

do/while 循环是 while 循环的变体。该循环会在检查条件是否为真之前执行一次代码块，然后如果条件为真的话，就会重复这个循环。

### break 和 continue 语句

- break 语句用于中断循环
- continue 语句则用于继续循环，跳过后面的代码

### JavaScript 标签

```js
label: {
  while (true) {
    break label
  }
}
```

break 不仅可以中断循环，也可以直接中断代码块，但是 continue 只能用在循环内

## JavaScript 中的 this

面向对象语言中 this 表示当前对象的一个引用。

但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象（应该是函数的所有者）。
- 在事件中，this 表示接收事件的元素。

## JavaScript HTML DOM

通过 HTML DOM，JavaScript 获得了访问 HTML 元素的功能

## HTML DOM

当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

**HTML DOM** 模型被构造为**对象**的树：

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。

- JavaScript 能够改变页面中的所有 HTML 元素
- JavaScript 能够改变页面中的所有 HTML 属性
- JavaScript 能够改变页面中的所有 CSS 样式
- JavaScript 能够对页面中的所有事件做出反应

## 查找 HTML 元素

### 通过元素 ID

```js
const x = document.getElementById("id")
```

### 通过标签名

```js
const y = document.getElementById("id").getElementByTagName("a")
// get到ID为id的元素下所有的a元素
```

### 通过类名

```js
const z = document.getElementByClassName("class")
```

如果查找到多个元素，则会返回一个类型为 htmlcollection 的数据，该类型不能使用列表的方法

### 万金油

```js
const theLetterAfterZ = document.querySelector(".class")
// 会返回该选择器匹配到的第一个元素

const theLetterAfterTheTitleAfterZ = document.querySelecorAll(".class")
// 返回该选择器匹配到的所有的元素
```

大部分浏览器的 querySelectorAll() 返回 NodeList 对象。

## 改变 HTML

### 更改内容

更改 DOM 对象的 `innerHTML` 属性

### 更改属性

更改 DOM 对象中对应属性既可

```js
document.getElementById("id").innerHTML = `fk`
// 更改内容

document.getElementByTagName("img").src = `./img.jpg`
// 更改了img元素的src属性
```

### 更改样式

更改 DOM 对象的 `style` 属性内的子属性

```js
document.getElementById("id").style.color = "white"
// 修改颜色
```

## 事件

例子：

- 当用户点击鼠标时
- 当网页已加载时
- 当图像已加载时
- 当鼠标移动到元素上时
- 当输入字段被改变时
- 当提交 HTML 表单时
- 当用户触发按键时

### HTML 事件属性

- `onclick`: 点击元素
- `onload` 和 `onunload`: 元素加载完成时和元素被销毁时
- `onchange`: 在元素值改变时触发
- `onmouseover` 和 `onmouseout`: 鼠标放在元素内和鼠标放在元素外时分别触发
- `onmousedown`、`onmouseup`: 鼠标按下和鼠标松开时分别触发

### 事件监听

使用 addEventListener 方法

```js
const a = document.getElementById("id").addEventListener("click", () => 2)
a.removeEventListener("click", () => 2) // 移除事件监听器
```

