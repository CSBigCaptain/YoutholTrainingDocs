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

JavaScript 在运算时会尝试自动转换数据类型以完成运算，这很显然是一把双刃剑，后来微软推出的 Typescript 解决了此问题。

```js
console.log("a" + 123) // 'a123'
console.log("123" == 123) // true
console.log("123" === 123) // false
```

### 代码块

用一对花括号括起来即一个代码块。

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

| 代码 | 输出        |
| :--- | :---------- |
| \'   | 单引号      |
| \"   | 双引号      |
| \\   | 反斜杠      |
| \n   | 换行        |
| \r   | 回车        |
| \t   | tab(制表符) |
| \b   | 退格符      |
| \f   | 换页符      |
| \\`  | \`          |

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

`break` 不仅可以中断循环，也可以直接中断代码块，但是 `continue` 只能用在循环内。

## ECMAScript 6 新特性

为什么要对这个版本单独开设一个章节呢？因为 ES6 的一些特性在后面 [Vue.js](./Vue.md) 章节中至关重要，因此特此提及。

### 箭头函数

箭头函数代码更简洁而且也更安全，此后应该尽可能的使用箭头函数。

箭头函数的书写也很简单，如下所示，如果函数表达式只有一行，那么不需要花括号包裹表达式：

```js
const addNumber = (a, b) => a + b

const addAndPrintNumber = (a, b) => {
  console.log(a + b)
  return a + b
}
```

### 解构赋值

在 JavaScript 中，解构可以快速将数组中的值或者对象取出并赋值给相应的变量，在阅读文档时经常会见到此类代码。

#### a. 对象解构

> [查看原文](https://segmentfault.com/a/1190000019923707)，已按照其[《署名-非商业性使用-禁止演绎 4.0 国际》](https://creativecommons.org/licenses/by-nc-nd/4.0/)许可使用。

我们首先来介绍一下对象的解构：

##### 1. 解构式变量声明

```js
let node = {
  name: "mike",
  age: 25,
}
let { name, age } = node
console.log(name) //mike
console.log(age) //25
```

##### 2. 解构出数据为变量赋值

```js:line-numbers {5}
let node = {
  name: "mike",
  age: 25,
}
;({ name, age } = node)
console.log(name) //mike
console.log(age) //25
```

> [!WARNING]
> 一定要用一对小括号 `()` 包裹整个解构赋值表达式。

> [!CAUTION]
> 示例代码中第四行和第五行代码之间的分号不可省略！
>
> JavaScript 解析器在解析代码时会自动根据回车分隔代码，但是如果两行代码拼到一起语法没有错误，解析器会将两行代码视为一行代码编译，因此需用分号强行分隔。

##### 3. 解构时设置默认值

如果我们在解构声明变量时，定义了对象中不存在的属性，那么这个变量的值为 `undefined` 。我们可以给变量设置默认值，当对象中没有对应的属性时，这个变量的值就是设置的默认值。

```js
let node = {
  name: "mike",
  age: 25,
}
let { name, age, country = "China" } = node
console.log(name) // mike
console.log(age) // 25
console.log(country) // China
```

在前面的例子里，我们的变量名都是和对象的属性名一样的。当然，也有办法定义不同命中的变量，依然利用解构获得对象的属性值。

##### 4. 解构时赋予不同的变量名

有时候我们需要为解构出来的变量起一个单独的变量名，请见下例：

```js
let node = {
  name: "mike",
  age: 25,
}
let { name: localName, age, country: localCountry = "China" } = node
console.log(localName) //mike
console.log(age) // 25
console.log(localCountry) //China
```

这里需要注意的是，冒号左边的是对象的属性名，右边的是我们新定义的变量名，这一点与我们的认知和习惯恰好反过来了。

我们在这种场景下也可以给变量设置默认值，就像上面的 `localCountry` 变量那样做：`:` 左边是对象的属性名，右边是一个赋值表达式; 这个表达式 `=` 左边是变量名，右边是默认值。

##### 5. 解构嵌套的对象

前面我们所有的例子，被解构的对象都是单层解构，接下来我们看看多层对象(嵌套对象)的解构：

```js
let node = {
  personalInfo: {
    basicInfo: {
      name: "mike",
      age: 25,
    },
  },
  level: 3,
}
let {
  personalInfo: { basicInfo },
} = node
console.log(basicInfo.name) // mike
```

上面代码的倒数第二行，我们初始化的变量为 `basicInfo`，而不是 `personalInfo`，这一点要特别注意。`personalInfo` 只是用来指明 `basicInfo` 的父节点。

嵌套对象的解构的语法就是：从原对象的最外层变量定位，一直到需要取值的那一层，每层之间用冒号 `:` 隔开，变量在冒号的右边。我们在上面的例子机场上，再增加一层：

```js
let node = {
  personalInfo: {
    basicInfo: {
      name: {
        firstName: "mike",
        lastName: "deep",
      },
      age: 25,
    },
  },
  level: 3,
}
let {
  personalInfo: {
    basicInfo: { name },
  },
} = node
console.log(name.firstName) // mike
```

#### b. 数组解构

> [查看原文](https://segmentfault.com/a/1190000019928303)，已按照其[《署名-非商业性使用-禁止演绎 4.0 国际》](https://creativecommons.org/licenses/by-nc-nd/4.0/)许可使用。

解构不仅可以用于对象类型，还可以用于数组。对象的解构是利用对象的属性名，而数组的解构是利用位置（坐标）的一一对应。

##### 1: 数组解构用于变量声明

```js
let color = ["red", "green", "blue"]
let [firstColor, secondColor] = color
console.log(firstColor) //red
console.log(secondColor) //green
```

`let/const/var` 后面跟上一对用中括号[]包裹的变量列表，变量的值为对应位置上的素组元素的值。

假如我们不想数组前面坐标的数据，而是想要中间位置，或者最后位置的，那么前面位置上的每一个元素留空，用逗号相隔就行了：

```js
let color = ["red", "green", "blue"]
let [, , thirdColor] = color
console.log(thirdColor) // blue
```

##### 2: 数组解构用于变量赋值

```js
let color = ["red", "green", "blue"]
firstColor = "white"
secondColor = "black"
;[firstColor, secondColor] = color

console.log(firstColor) //red
console.log(secondColor) //green
```

已经被初始化了的变量 `firstColor` 和 `secondColor` 通过数组解构重新被赋值。数组解构赋值的语法和用于变量声明很像，只是不再需要 `let/const/var`， 整个解构赋值语句也不需要用 `()` 包裹，这一点和对象的解构赋值不一样。

##### 3. 嵌套数组（多维数组）的解构

前面的例子都是一维数组，我们来看看嵌套数组（多维数组）的解构：

```js
let color = ["red", ["white", "black"], "green", "blue"]

let [firstColor, secondColor] = color
let [, [firstChildColor]] = color

console.log(secondColor) //["white", "black"]
console.log(firstChildColor) //white
```

`color` 变量是一个嵌套数组，它的第二个元素又是一个一维数组，所以代码的第二行我们解构出 `secondColor` 变量，它是一个一位数组（倒数第二行代码打印结果）。

而当我们在 `color` 变量的第二个元素位置先用一层中括号包裹一个变量（这里的 `firstChildColor`），那就说明我们解构的是`white`这个值了。其实这语法大家用逻辑去想就是恨自然而简单的。

##### 4. 不定元素（剩余元素）

函数有不定参数，在数组解构这里有个类似的概念：不定元素（或者叫剩余元素）。它就是用 `...` 展开运算符把数组的多个元素一起赋值给一个变量：

```js
let color = ["red", "green", "blue"]
let [firstColor, ...secondColor] = color
console.log(firstColor) //red
console.log(secondColor) //['green', 'blue']
```

这里需要特别注意的是不定元素变量（剩余元素变量）必须是解构的最后一个变量，其后面不能再有别的变量，否则会抛出语法错误，例如：

```js
let color = ['red', 'green', 'blue'];
let [firstColor, ...secondColor, error] = color; // Uncaught SyntaxError: Rest element must be last element
```

既然剩余元素可以是数组的最后几个元素，那它当然也可以是数组的全部元素。我们可以利用这点来实现数组的 copy：

```JavaScript
let color = ['red', 'green', 'blue'];
let [...copiedColor] = color;
console.log(copiedColor);// ["red", "green", "blue"]
console.log(color.toString() === copiedColor.toString()); // true
console.log(color == copiedColor); // false
console.log(color === copiedColor); // fasle
```

这里也要特别注意，剩余元素变量只是把数组元素 copy 到另一个数组，所以它们包含的元素相等，但是这 2 个数组是没有关系的，是不相等的。

##### 5. 对象和数组的混合解构

解构可以用在对象和数组，前面我们所有的例子都是单独的对象和数组，接下来我们来看看在一个混合和数组和对象的例子：

```js
let node = {
  personalInfo: {
    basicInfo: {
      name: {
        firstName: "mike",
        lastName: "deep",
      },
    },
  },
  levelRange: [1, 3],
}
let {
  personalInfo: {
    basicInfo: { name },
  },
  levelRange: [lowLevel],
} = node

console.log(name.firstName) // mike
console.log(lowLevel) // 1
```

其实混合解构和单独的对象解构和数组解构是一样的，对象的地方就用对象解构的语法，数组的地方就用数组解构的语法就对了。

### JavaScript 模块（ES Module）

JavaScript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 JavaScript 脚本的复杂程序，还有一些被用在其他环境（例如 Node.js）。

复杂的项目需要一种将 JavaScript 程序拆分为可按需导入的单独模块的机制。之前诞生了 CommonJS，但是现已被淘汰，因此我们只介绍最常用的 ES Module 模块化规范。

#### 导出

在模块化中，数据只有导出出来才能供其他模块使用。

使用 `export` 可以导出数据，见下例：

```js
export const num = 100 // 这样直接导出
export const add = (num) => num++ // 也可以导出函数

// 可以在最后一起导出，可读性更强
const power = (base, pow) => Math.pow(base, pow)
const name = "Then Young"
export { power, name }
```

#### 引用

在 JavaScript 中引用模块用 `import` 语句：

```js
import { num, add } from "./src/modules/module.js"
// 引用时需要说明需要引用的数据，并用花括号包裹

import { num as data, add as plus } from "/src/modules/module.js"
// 可以为引用的数据设一个别名

import * as all from "/src/modules/module"
// 引用所有的导出数据并起一个别名
```

有细心地小伙伴可能会发现第二个 `import` 中的路径没有点，这种情况下是表示文件相对于项目根目录的相对路径，在实际开发中我们更推荐使用这种方法来表示路径。

在一些模块系统（比如 Vite）可以省略文件扩展名，详见第三个 `import` 。

> [!important]
> 如果你通过本地 HTML 文件加载模块，出于 JavaScript 模块安全性需要，你将会遇到 CORS 错误。你需要一个服务器来加载，VS Code 中的 Live Server 扩展或者 Live Preview 扩展即可，也可以试着使用 Windows 自带的 IIS。

> [!tip]
> ES Module 规范的代码均实行 JavaScript 严格模式，即使没有 `use strict` 声明。

#### 默认导出 <Badge type="warning">较难</Badge>

一个模块只能默认导出一个数据，引用默认导出的数据不需要包裹花括号。

可能比较难以理解，我们举几个例子：

```js
// module.js
export default num = 3
// main.js
import num from "./module.js"
console.log(num) // 3
```

可以默认导出一个匿名函数，详见下例：

```js
// module.js
export default {
  functionName: function() => {
    return 0
  }
}
// 或者，这个是一个简便写法
export default {
  functionName() => {
    return 0
  }
}

```

#### 在 HTML 中引用模块

在 `<script>` 标签内添加 `type="module"` 属性既可：

```html {2}
<script type="module" src="./src/modules/module.js"></script>
<script type="module">
  import { num, add } from "/src/modules/module.js"
</script>
```

## JavaScript 中的 this

面向对象语言中 this 表示当前对象的一个引用。

但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象（应该是函数的所有者）。
- 在事件中，this 表示接收事件的元素。

## JavaScript HTML DOM <Badge type="tip">选择性阅读</Badge>

通过 HTML DOM，JavaScript 获得了访问 HTML 元素的功能。

> [!tip]
> 未来我们主要使用 Vue.js 等一些 JavaScript 框架来进行 Web 应用开发，因此此部分的理解不做要求。

### HTML DOM

当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

**HTML DOM** 模型被构造为**对象**的树：

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。

- JavaScript 能够改变页面中的所有 HTML 元素
- JavaScript 能够改变页面中的所有 HTML 属性
- JavaScript 能够改变页面中的所有 CSS 样式
- JavaScript 能够对页面中的所有事件做出反应

### 查找 HTML 元素

#### 通过元素 ID

```js
const x = document.getElementById("id")
```

#### 通过标签名

```js
const y = document.getElementById("id").getElementByTagName("a")
// get到ID为id的元素下所有的a元素
```

#### 通过类名

```js
const z = document.getElementByClassName("class")
```

如果查找到多个元素，则会返回一个类型为 htmlcollection 的数据，该类型不能使用列表的方法

#### 万金油

```js
const theLetterAfterZ = document.querySelector(".class")
// 会返回该选择器匹配到的第一个元素

const theLetterAfterTheTitleAfterZ = document.querySelecorAll(".class")
// 返回该选择器匹配到的所有的元素
```

大部分浏览器的 querySelectorAll() 返回 NodeList 对象。

### 改变 HTML

#### 更改内容

更改 DOM 对象的 `innerHTML` 属性

#### 更改属性

更改 DOM 对象中对应属性既可

```js
document.getElementById("id").innerHTML = `fk`
// 更改内容

document.getElementByTagName("img").src = `./img.jpg`
// 更改了img元素的src属性
```

#### 更改样式

更改 DOM 对象的 `style` 属性内的子属性

```js
document.getElementById("id").style.color = "white"
// 修改颜色
```

### 事件

例子：

- 当用户点击鼠标时
- 当网页已加载时
- 当图像已加载时
- 当鼠标移动到元素上时
- 当输入字段被改变时
- 当提交 HTML 表单时
- 当用户触发按键时

#### HTML 事件属性

- `onclick`: 点击元素
- `onload` 和 `onunload`: 元素加载完成时和元素被销毁时
- `onchange`: 在元素值改变时触发
- `onmouseover` 和 `onmouseout`: 鼠标放在元素内和鼠标放在元素外时分别触发
- `onmousedown`、`onmouseup`: 鼠标按下和鼠标松开时分别触发

#### 事件监听

使用 addEventListener 方法

```js
const a = document.getElementById("id").addEventListener("click", () => 2)
a.removeEventListener("click", () => 2) // 移除事件监听器
```
