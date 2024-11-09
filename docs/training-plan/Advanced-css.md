# CSS 进阶知识

通过本章，你将学习到：

1. 了解 CSS 更多的选择器；
1. 对 CSS 的伪类有一定了解；
1. 了解一些 CSS 的伪元素；
1. 会做一些简单的 CSS 动画效果。

---

接下来我们面对的是 **CSS** 的一些更加技巧性的使用属性和方法。我们接下来将要从**选择器**，**函数**，**布局**和**导航栏**来讲起：

## 更多的 CSS 选择器

在上一章我们介绍了一些基本选择器。现在我们来介绍一下更多的 CSS 选择器来满足复杂的 Web 开发需求。

当我们面对一些较为大型的网站网页运行维护时，我们所涉及的页面多，控件多，还会有大量的嵌套，这种情况下这些简单的基本选择器可能无法高效准确地选中目标元素。

### 分组选择器

- 选择器列表 `A, B`
- 指定同时选择 `A` 和 `B` 元素。这是一种选择多个匹配元素的分组方法。

```css
.active,
.black {
  margin: 0, auto;
}
```

上例中的选择器同时选中了类为 `active` 和 `black` 的元素。

### 组合选择器 <Badge type="warning">略难</Badge>

组合选择器是在两个或多个简单选择器之间建立关系的选择器，例如“ `A` 是 `B` 的子代”或“ `A` 与 `B` 相邻”，它们构成了比较复杂的选择器。

1. [接续兄弟选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Next-sibling_combinator) `A + B`
   - 指定 `A` 和 `B` 选择的元素具有相同的父元素，并且 `B` 选择的元素在水平方向上紧随 `A` 选择的元素。
2. [后续兄弟选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
   - 指定由 `A` 和 `B` 选择的元素共享相同的父元素，并选中 `A` 后面所有的 `B` 元素（不一定是紧贴在后面的）。
3. [子选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator) `A > B`
   - 指定 `B` 选择的元素是 `A` 选择的元素的直接子元素。
4. [后代选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator) `A B`
   - 指定 `B` 选择的元素是 `A` 选择的元素的后代，但不一定是直接子代。

### 示例讲解

```html
<div class="top">
  <p class="one aaa first">我是老大</p>
  <p class="one aaa second">我是老二</p>
  <p class="one aaa third">我是老三</p>
  <p class="one aaa fouth">我是老四</p>
</div>
```

```css
.top {
  background-color: rgba(256, 256, 256, 0.5);
}
.one.aaa {
  color: red;
}
.one .first {
  color: green;
}
```

在上面的例子中 `.one.aaa` 选中的是既属于 `one` 类又属于 `aaa` 类的元素，对应的就是老大和老二字体会变成红色。而 `.one .first` 在两个类名中间有个空格，只能选中 `one` 类里面的 `first` 类元素，因此上例中没有段落会变成绿色。

由此看出的是没有空格体现的是 **和（AND）** 的意义，这一点要和带空格区分开。（空格是**后代选择器**）

```html
<div class="top">
  <p class="one aaa first">我是老大</p>
  <p class="one aaa second">我是老二</p>
  <p class="one aaa third">我是老三</p>
  <p class="one aaa fouth">我是老四</p>
</div>

<p class="one aaa first">我是老五</p>
<p class="one aaa second">我是老六</p>
<p class="one aaa third">我是老七</p>
<p class="one aaa fouth">我是老八</p>
```

```css
div > p {
  color: red;
}
div + p {
  color: green;
}
div ~ p {
  background-color: yellow;
}
```

在上例中，第一个 `>` 的含义是父元素为 `<div>` 的所有 `<p>` 元素（而空格能选中更深层的孙子元素、重孙子元素......），产生的效果就是 `<div>` 元素里的所有 `<p>` 元素的文字颜色都变为红色；第二个 `+` 的含义是紧紧贴在 `<div>` 元素后的第一个 `<p>` 元素，产生的效果就是 **_我是老五_** 变为绿色，这个选择器不包含父子关系；第三个 `~` 的含义是 `<div>` 元素后的所有 `<p>` 元素，产生的效果为 **_老五到老八_** 的背景色都变成黄色。

### 伪类选择器

**什么是伪类？**伪类用于定义元素的特殊状态。

例如，它可以用于：

- 设置鼠标 `悬停` 在元素上时的样式
- 为 `已访问` 和 `未访问` 链接设置不同的样式
- 设置元素 `获得焦点` 时的样式

伪类的语法：

```css
selector:pseudo-class {
  property: value;
  /* 与其他css一致继续写 */
}
```

锚伪类

```css
/* 未访问的链接 */
a:link {
  color: #ff0000;
}

/* 已访问的链接 */
a:visited {
  color: #00ff00;
}

/* 鼠标悬停链接 */
a:hover {
  color: #ff00ff;
}

/* 已选择的链接 */
a:active {
  color: #0000ff;
}
```

> [!important]
> 在声明 `a` 元素的伪类时，务必按照这个顺序来声明—— `a:link`、`a:visited`、`a:hover`、`a:active`（这四个伪类不需要全部声明，但是他们的相对位置一定要这样），否则可能会引发一些问题！
>
> 因为在 CSS 中，后面声明的样式会覆盖掉前面声明的样式，倘若你把 `:hover` 伪类放在靠前的位置，那么后面声明的 `:link` 和 `:visited` 伪类会直接覆盖掉刚刚声明的 `:hover` 伪类的样式。

更多详细的选择器还有更多包括选择含有那些属性的，选择能产生变化的，等等等等等
可以前往[此处](https://www.w3school.com.cn/css/css_selectors.asp)学习更多进阶选择器

## CSS 函数

函数，在数学概念里我们知道是将一个集合（称为定义域）中的每个元素与另一个集合（称为值域或陪域）中的唯一元素关联起来的方法，而在计算机领域我们也沿用类似的概念。
函数：f（x，y）
我们通过函数方便快捷的调用已经写好的算法（逻辑）将我们给出的值 x，y，计算返回我们需要的结果。
CSS 本身定义了一部分函数来方便我们操作一些元素的具体属性值，常用的有：

- `attr()` 返回元素属性值
- `calc()` 计算来确定具体属性值
- `max()` `min()` 取冒号两侧较大或较小的值
- `rgb()` 红绿蓝模型确定颜色
- `rgba()` 红绿蓝阿尔法模型确定颜色

### attr()

```html
<style>
a:after {content: " (" attr(href) ")";}
</style>
</head>
<body>

<h1>attr() 函数</h1>

<p>在每个链接后的括号中插入 href 属性的值：</p>

<p><a href="https://bulbul559.cn/">访问网站</a></p>
<p><a href="https://blog.xmgspace.me/">访问网站</a></p>

</body>
```

这个函数的产生结果就是在你写入的内容后面增加一个括号，括号内将 href 值展示出来。
eg.上码
访问网站（https://bulbul559.cn/ ）
访问网站（https://blog.xmgspace.me/ ）

### calc()

```html
<style>
#div1 {
  position: absolute;
  left: 50px;
  width: calc(100% - 100px);
  border: 1px solid black;
  background-color: yellow;
  padding: 5px;
  text-align: center;
}
</style>
</head>
<body>

<h1>calc() 函数</h1>

<p>创建一个在整个窗口范围内延伸的 div，div 的每侧和窗口边缘之间的距离为 50px：</p>

<div id="div1">Some text...</div>

</body>
```

运行这行代吗很明显我们会得到结果，一个黄色的方块，他的 width 随着我们窗口的大小变化，始终和父元素两侧保持 50px 的距离，通过这个函数我们可以方便的得到一个相对窗口变化稳定的页面。（~~学长强推~~）
另外需要提醒的是除了 px 这个基础大小单位还有更多单位
其中包括 10 个相对单位和五个绝对单位

| 单位 | 区别     | 含义                                                                         |
| ---- | -------- | ---------------------------------------------------------------------------- |
| px   | 相对单位 | 相对于桌面分辨率而不是视窗大小：通常为 1 个点，一般为 1/96 英寸              |
| em   | 相对单位 | 相对于父元素的字体大小，若父元素 font-size 为 16px，那么 1em 就为 16px       |
| %    | 相对单位 | 相对于父元素，正常情况下是通过属性定义自身或其他元素                         |
| rem  | 相对单位 | 相对于根元素字体大小，若根元素（html）font-size 为 16px，那么 1rem 就为 16px |
| ex   | 相对单位 | 相对于小写字母 “x” 的高度                                                    |
| vw   | 相对单位 | 相对于视窗的宽度：视窗宽度是 100vw                                           |
| vh   | 相对单位 | 相对于视窗高度：视窗宽度是 100vh                                             |
| vmax | 相对单位 | vw 和 vh 中较大的那个                                                        |
| vmin | 相对单位 | vw 和 vh 中较小的那个                                                        |
| ch   | 相对单位 | 1ch 的大小和字母 o 的宽度相等                                                |
| cm   | 绝对单位 | centimeter，表厘米                                                           |
| mm   | 绝对单位 | millimeter，表毫米                                                           |
| in   | 绝对单位 | inch，表英寸                                                                 |
| pt   | 绝对单位 | 磅，1/72 英寸                                                                |
| pc   | 绝对单位 | 12 点活字，或 1/12 点                                                        |

通过一些相对单位，来相对窗口或者父元素做出改变也可以达到类似效果。

### max() 和 min()

```css
element {
  width: max(50%, 300px);
  width: min(50%, 300px);
}
```

很明显，判断 50%和 300px 哪个更大或者更小，max 返回大的，min 返回小的。

### rgb() 和 rgba()

当我们调整元素的背景颜色，字体颜色等的时候，只要调整的为颜色就可以使用这个函数，他通过调整三原色的多少比例来确定具体是什么颜色，在 vscode 中写的时候我们可以看到可以通过元素前面的小方块打开调色板，更加便捷的调整所选颜色。
![颜色调整页面](./assets/4/733fc2d2ada84aa3aab84db482bb6a0d.png)

而其中 `rgba()` 除了三原色还有一个参数，透明度，它可以让你完成一个半透明效果的制作。

```css
element {
  color: rgb(1, 255, 135);
  color: rgba(1, 255, 135, 0.5);
}
```

RGB 给出的三原色允许你选择 0-255 的强度来添加三原色的比例多少。
RGBA 的最后一个参数为 1 则是完全不透明，小于一为透明度为多少。

调整颜色使用三原色除了 RGB 模式还有 HEX 模式，两者相差不大，HEX 模式是十六进制，强度的选择最小为 `00` 最大为 `ff`

例如：红色为 `#ff0000`

::: info 拓展
另外的，除了三原色还有一种**色相，饱和度，明度**来调整的模式 HSL：

- 色相（hue）是色轮上从 0 到 360 的度数。0 是红色，120 是绿色，240 是蓝色。
- 饱和度（saturation）是一个百分比值，0％ 表示灰色阴影，而 100％ 是全色。
- 亮度（lightness）也是百分比，0％ 是黑色，50％ 是既不明也不暗，100％是白色。
  :::

## 布局

在 CSS 布局中，我们首先要了解的是`position`属性，`position`属性规定应用于元素的定位方法的类型（static、relative、fixed、absolute 或 sticky）。
元素其实是使用 `top`、`bottom`、`left` 和 `right` 属性定位的。但是，除非首先设置了 position 属性，否则这些属性将不起作用。根据不同的 position 值，它们的工作方式也不同。

### position: static

HTML 元素默认情况下的定位方式为 static（静态）。

静态定位的元素不受 top、bottom、left 和 right 属性的影响。

position: static; 的元素不会以任何特殊方式定位;

### position: relative

position: relative; 的元素相对于其正常位置进行定位。

设置相对定位的元素的 top、right、bottom 和 left 属性将导致其偏离其正常位置进行调整。

不会对其余内容进行调整来适应元素留下的任何空间。

```
div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}
```

当你使用这个属性值，就可以通过四个方位属性来调整他的位置

### position: fixed

position: fixed; 的元素是相对于视口定位的，这意味着即使滚动页面，它也始终位于同一位置。 top、right、bottom 和 left 属性用于定位此元素。

固定定位的元素不会在页面中通常应放置的位置上留出空隙。

### position: absolute

position: absolute; 的元素**相对于最近的定位祖先元素进行定位**（而不是相对于视口定位，如 fixed）。

然而，如果绝对定位的元素没有祖先，它将使用文档主体（body），并随页面滚动一起移动。

注意：“被定位的”元素是其位置除 static 以外的任何元素。

### position: sticky

position: sticky; 的元素根据用户的滚动位置进行定位。

**粘性元素**根据滚动位置在相对（relative）和固定（fixed）之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止 - 然后将其“**粘贴**”在适当的位置（比如 position:fixed）。

这种效果通常是一些网站**_如 4399 两侧的广告，部分网站的导航栏_**所产生的效果。

::: warning
Internet Explorer、Edge 15 以及更早的版本不支持粘性定位。
:::

### 重叠元素

在对元素进行定位时，它们可以与其他元素重叠。

z-index 属性指定元素的堆栈顺序（哪个元素应放置在其他元素的前面或后面）。

元素可以设置正或负的堆叠顺序。

这个属性可以在一般的第一层上加上第二层或者向下增加层数，使你的元素产生堆叠的效果。

```
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```

这个例子中我们设置`z-index`属性设置为-1，所以 img（一般为图片）就到了下面一层。（当然你要是还有其他图片想要叠到下面可以再增加-2 层）

> warning
> 值得注意的是，没有经过`z-index`属性修饰的元素通常会显示在顶部，即最上层，而不是默认为 0

## 导航栏

首先我们要知道导航栏分为水平导航栏和垂直导航栏
一个简单易用的导航栏对于任何一个网站都是很重要的，通过 CSS 可以将我们无聊的菜单美化成漂亮的导航栏。

### 导航栏 = 链接列表

导航栏需要标准 HTML 作为基础。

在我们的实例中，将用标准的 HTML 列表构建导航栏。

导航栏基本上就是链接列表，因此使用 `<ul>` 和 `<li>` 元素会很有意义：
实例：

```
<ul>
  <li><a href="index.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
```

现在，从列表中删除项目符号以及外边距和内边距（填充）：

```
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

::: warning
list-style-type: none; - 删除项目符号。导航条不需要列表项标记。
设置 margin: 0; 和 padding: 0; 删除浏览器的默认设置。
:::

### 垂直导航栏

如需构建垂直导航栏，除了上述的代码外，还可以在列表中设置 `<a>` 元素的样式：
实例：

```
li a {
  display: block;
  width: 60px;
}
```

::: warning
display: block; - 将链接显示为块元素可以使整个链接区域都可以被单击（而不仅仅是文本），我们还可以指定宽度（如果需要，还可以指定内边距、外边距、高度等）。
width: 60px; - 默认情况下，块元素会占用全部可用宽度。我们需要指定 60 像素的宽度。
:::

::: tip
还可以设置 `<ul>` 的宽度，并删除 `<a>` 的宽度，因为当显示为块元素时，它们将占据可用的全部宽度。这将导致与我们之前的例子相同的结果：
实例：

```
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 60px;
}

li a {
  display: block;
}
```

:::

水平导航栏与垂直导航栏的主要区别也就只有布局的不同，这里不再重复赘述。

## 自定义属性 变量

### 使用 CSS 自定义属性（变量）

**自定义属性**（有时候也被称作 **CSS 变量或者级联变量** ）是由 CSS 作者定义的，它包含的值可以在整个文档中重复使用。由自定义属性标记设定值（比如： --main-color: black;），由 var() 函数来获取值（比如： color: var(--main-color);）复杂的网站都会有大量的 CSS 代码，通常也会有许多重复的值。举个例子，同样一个颜色值可能在成千上百个地方被使用到，如果这个值发生了变化，需要全局搜索并且一个一个替换（很麻烦哎～）。自定义属性在某个地方存储一个值，然后在其他许多地方引用它。另一个好处是语义化的标识。比如，--main-text-color 会比 `#00ff00` 更易理解，尤其是这个颜色值在其他上下文中也被使用到。自定义属性受级联的约束，并从其父级继承其值。

### 基本用法

声明一个自定义属性，属性名需要以两个减号（--）开始，属性值则可以是任何有效的 CSS 值。和其他属性一样，自定义属性也是写在规则集之内的，如下：

```css
element {
  --main-bg-color: brown;
}
```

注意，规则集所指定的选择器定义了自定义属性的可见作用域。通常的最佳实践是定义在根伪类 :root 下，这样就可以在 HTML 文档的任何地方访问到它了：

```css
:root {
  --main-bg-color: brown;
}
```

然而这条规则不是绝对的，如果有理由去限制你的自定义属性，那么就应该限制。
:::warning
备注：自定义属性名是大小写敏感的，--my-color 和 --My-color 会被认为是两个不同的自定义属性。
:::

### 自定义属性的继承性

自定义属性会继承。这意味着如果在一个给定的元素上，没有为这个自定义属性设置值，在其父元素上的值会被使用。看这一段 HTML：

```html
<div class="one">
  <div class="two">
    <div class="three"></div>
    <div class="four"></div>
  </div>
</div>
```

配套的 CSS：

```css
.two {
  --test: 10px;
}

.three {
  --test: 2em;
}
```

在这个情况下， `var(--test)` 的结果分别是：

- 对于元素 class="two" ：10px
- 对于元素 class="three" ：2em
- 对于元素 class="four" ：10px （继承自父属性）
- 对于元素 class="one" ：非法值，会变成自定义属性的默认值
  注意，这些是自定义属性，并不是你在其他编程语言中遇到的实际的变量。这些值仅当需要的时候才会计算，而并不会按其他规则进行保存。比如，你不能为元素设置一个属性，然后让它从兄弟或旁支子孙规则上获取值。属性仅用于匹配当前选择器及其子孙，这和通常的 CSS 是一样的。

如前所述，使用一个局部变量时用 `var()` 函数包裹以表示一个合法的属性值：

```css
element {
  background-color: var(--main-bg-color);
}
```

## 媒体查询

从 CSS2 开始，引入了`@media`规则，这让我们在不同媒体中显示不一样的样式成为可能。
例如手机屏幕和计算机屏幕
CSS3 引入了媒体查询，他扩展了 CSS2 中媒体类型的概念，转而更加关注不同媒体的能力。
媒体查询可以用于检查许多事情，例如：

- 视口的高度和宽度
- 设备的宽度和高度
- 方向（手机平板的横向或者纵向）
- 分辨率
  使用媒体查询是一种流行的技术，可以向台式机，笔记本，平板，手机传输不一样定制的样式。

### 媒体查询语法

媒体查询由一种媒体类型组成，并可包含一个或多个表达式，这些表达式可以解析为 true 或 false。

```css
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```

如果指定的媒体类型与正在显示文档的设备类型匹配，并且媒体查询中的所有表达式均为 true，则查询结果为 true。当媒体查询为 true 时，将应用相应的样式表或样式规则，并遵循正常的级联规则。

除非您使用 not 或 only 运算符，否则媒体类型是可选的，且隐含 all 类型。

您还可以针对不同的媒体使用不同的样式表：

```html
<link
  rel="stylesheet"
  media="mediatype and|not|only (expressions)"
  href="print.css"
/>
```

### CSS3 媒体类型

| 值     | 描述                                     |
| ------ | ---------------------------------------- |
| all    | 用于所有媒体类型设备。                   |
| print  | 用于打印机。                             |
| screen | 用于计算机屏幕、平板电脑、智能手机等等。 |
| speech | 用于大声“读出”页面的屏幕阅读器。         |

### 媒体查询的简单实例

使用媒体查询的一种方法是在样式表内有一个备用的 CSS 部分。

下面的例子在视口宽度为 480 像素或更宽时将背景颜色更改为浅绿色（如果视口小于 480 像素，则背景颜色会是粉色）：

```css
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

## 高阶知识—— CSS 动画 <Badge type="danger">较难</Badge>

> [!WARNING]
> 本环节知识具有一定难度，请根据自身情况进行学习！

CSS 可实现 HTML 元素的动画效果，而不使用 JavaScript 或 Flash
在本章中，您将学习如下属性：

- @keyframes
- animation-name
- animation-duration
- animation-delay
- animation-iteration-count
- animation-direction
- animation-timing-function
- animation-fill-mode
- animation

### 什么是 CSS 动画？

动画使元素逐渐从一种样式变为另一种样式。您可以随意更改任意数量的 **CSS** 属性。如需使用 **CSS** 动画，您必须首先为动画指定一些关键帧，关键帧包含元素在特定时间所拥有的样式。

### @keyframes 规则

如果您在 `@keyframes` 规则中指定了 CSS 样式，动画将在特定时间逐渐从当前样式更改为新样式。
要使动画生效，必须将动画绑定到某个元素。
下面的例子将 "example" 动画绑定到 `<div>` 元素。动画将持续 4 秒钟，同时将 `<div>` 元素的背景颜色从 `red` 逐渐改为 `yellow`：

```css
@keyframes example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}

/* 向此元素应用动画效果 */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

> [!warning]
> `animation-duration` 属性定义需要多长时间才能完成动画。如果未指定 `animation-duration` 属性，则动画不会发生，因为默认值是 0s（0 秒）。

在上面的例子中，通过使用关键字 "`from`" 和 "`to`"（代表 0％（开始）和 100％（完成）），我们设置了样式何时改变。
您也可以使用百分比值。通过使用百分比，您可以根据需要添加任意多个样式更改。
下面的例子将在动画完成 25％，完成 50％ 以及动画完成 100％ 时更改 `<div>` 元素的背景颜色：

```css
@keyframes example {
  0% {
    background-color: red;
  }
  25% {
    background-color: yellow;
  }
  50% {
    background-color: blue;
  }
  100% {
    background-color: green;
  }
}

/* 应用动画的元素 */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

下面的例子将在动画完成 25％，完成 50％ 以及动画完成 100％ 时更改背景颜色和 `<div>` 元素的位置：

```css
@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}

/* 应用动画的元素 */
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
```

### 延迟动画

`animation-delay` 属性规定动画开始的延迟时间。
下面的例子在开始动画前有 2 秒的延迟：

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s;
}
```

负值也是允许的。如果使用负值，则动画将开始播放，如同已播放 N 秒。

在下面的例子中，动画将开始播放，就好像它已经播放了 2 秒钟一样：

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: -2s;
}
```

### 设置动画运行多少次

`animation-iteration-count` 属性指定动画应运行的次数。下面的例子在停止前把动画运行了三次：

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
}
```

下面的例子使用值“**infinite**”使动画永远持续下去：

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
```

### 反向或交替运行动画

`animation-direction` 属性指定向前，向后或者交替播放动画。`animation-direction` 属性可以接受以下值：

- normal － 动画正常播放（向前），默认值
- reverse － 动画以反方向播放（向后）
- alternate － 动画先向前再向后
- alternate-reverse － 动画先向后再向前

下面例子将以相反的方式运行动画：

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: reverse;
}
```

你也可以在上面的例子中使用其他值来尝试效果。

### 指定动画的速度曲线

`animation-timing-function` 属性规定动画的速度曲线。`animation-timing-function` 属性可接受以下值：

- ease - 指定从慢速开始，然后加快，然后缓慢结束的动画（默认）
- linear - 规定从开始到结束的速度相同的动画
- ease-in - 规定慢速开始的动画
- ease-out - 规定慢速结束的动画
- ease-in-out - 指定开始和结束较慢的动画
- cubic-bezier(n,n,n,n) - 运行您在三次贝塞尔函数中定义自己的值
  下面这些例子展示了可以使用的一些不同速度曲线：

```css
#div1 {animation-timing-function: linear;}
#div2 {animation-timing-function: ease;}
#div3 {animation-timing-function: ease-in;}
#div4 {animation-timing-function: ease-out;}
#div5 {animation-timing-function: ease-in-out;}
}
```

### 指定动画的填充样式

CSS 动画不会在第一个关键帧播放之前或在最后一个关键帧播放之后影响元素。`animation-fill-mode` 属性能够覆盖这种行为。

在不播放动画时（在开始之前，结束之后，或两者都结束时），`animation-fill-mode` 属性规定目标元素的样式。

`animation-fill-mode` 属性可接受以下值：

- none - 默认值。动画在执行之前或之后不会对元素应用任何样式。
- forwards - 元素将保留由最后一个关键帧设置的样式值（依赖 animation-direction 和 animation-iteration-count）。
- backwards - 元素将获取由第一个关键帧设置的样式值（取决于 animation-direction），并在动画延迟期间保留该值。
- both - 动画会同时遵循向前和向后的规则，从而在两个方向上扩展动画属性。
  下面的例子让 `<div>` 元素在动画结束时保留来自最后一个关键帧的样式值：

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

下面的例子在动画开始之前（在动画延迟期间）使 `<div>` 元素获得由第一个关键帧设置的样式值：

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-delay: 2s;
  animation-fill-mode: backwards;
}
```

下面的例子在动画开始之前使 `<div>` 元素获得第一个关键帧设置的样式值，以及在动画结束时保留最后一个关键帧的样式值：

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-delay: 2s;
  animation-fill-mode: both;
}
```

### 动画的简写属性

下面展示六种动画属性：

```css
div {
  animation-name: example;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

使用简写的动画属性也可以实现与上述例子相同的动画效果：

```css
div {
  animation: example 5s linear 2s infinite alternate;
}
```

### CSS 动画属性

下表列出了 **@keyframes** 规则和所有 **CSS** 动画属性：
|属性|描述|
|-|-|
|[@keyframes](https://www.w3school.com.cn/cssref/pr_keyframes.asp)|规定动画样式|
|[animation](https://www.w3school.com.cn/cssref/pr_animation.asp)|设置所有动画属性的简写属性|
|[animation-delay](https://www.w3school.com.cn/cssref/pr_animation-delay.asp)|规定动画开始的延迟|
|[animation-direction](https://www.w3school.com.cn/cssref/pr_animation-direction.asp)|规定动画是向前播放、向后播放还是交替播放|
|[animation-duration](https://www.w3school.com.cn/cssref/pr_animation-duration.asp)|规定动画完成一个周期应花费的时间|
|[animation-fill-mode](https://www.w3school.com.cn/cssref/pr_animation-fill-mode.asp)|规定元素在不播放动画时的样式（在开始前、结束后，或两者同时）|
|[animation-iteration-count](https://www.w3school.com.cn/cssref/pr_animation-iteration-count.asp)|规定动画应播放的次数|
|[animation-name](https://www.w3school.com.cn/cssref/pr_animation-name.asp)|规定 @keyframes 动画的名称|
|[animation-play-state](https://www.w3school.com.cn/cssref/pr_animation-play-state.asp)|规定动画是运行还是暂停|
|[animation-timing-function](https://www.w3school.com.cn/cssref/pr_animation-timing-function.asp)|规定动画的速度曲线|
