# 提高编写HTML代码效率的小技巧

## 快捷键（只是在VS Code里用）

+   将当前行代码向上&向下移动一行：`Alt` + `Up` & `Down`
+   向上&向下复制一行代码：`Shift` + `Alt` + `Up` & `Down`
+   向上&向下添加一个光标：`Ctrl` + `Alt` + `Up` & `Down`
+   注释一整行代码：`Ctrl` + `/`
+   注释部分代码：`Shift` + `Alt` + `A`

---

## Emmet缩写

利用类CSS且简便的编写方式来快速生成HTML代码。

### 1.HTML初始化

```
!
```

对应HTML代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

---

### 2.补全元素

对一个标签直接按Tab补全，Emmet 可以帮你自动补全尖括号与结尾的结束标签。

```
p
```

```html
<p></p>
```

### 3.子集元素

```
ul>li>a
```

```html
<ul>
        <li><a href=""></a></li>
    </ul>
```

### 4.同级元素

```
div>h1+small+p
```

```html
<div>
        <h1></h1>
        <small></small>
        <p></p>
</div>
```

---

### 5.回到上一级

```
ul>li>a^^div
```

```html
<ul>
        <li><a href=""></a></li>
    </ul>
<div></div>
```

### 6.复制

```
ul>li*4
```

```html
<ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
</ul>
```

---

### 7.生成元素属性

+ 括号表示优先级
+ `#` 表示ID选择器
+ `.` 表示其Class类
+ `[]` 表示其其他属性
+ `{}` 表示里面的文字内容

```
ul#nav>(li.navButton[title="这是一个小按钮"]>a[href="#about"]{按钮})*6
```

```html
<ul id="nav">
        <li class="navButton" title="这是一个小按钮"><a href="#about">按钮</a></li>
        <li class="navButton" title="这是一个小按钮"><a href="#about">按钮</a></li>
        <li class="navButton" title="这是一个小按钮"><a href="#about">按钮</a></li>
        <li class="navButton" title="这是一个小按钮"><a href="#about">按钮</a></li>
        <li class="navButton" title="这是一个小按钮"><a href="#about">按钮</a></li>
        <li class="navButton" title="这是一个小按钮"><a href="#about">按钮</a></li>
</ul>
```

---

### 8.添加序号

`$` 的数量代表数字的位数

```
ul#nav>(li.button>a{按钮$$})*6
```

```html
<ul id="nav">
        <li class="button"><a href="">按钮01</a></li>
        <li class="button"><a href="">按钮02</a></li>
        <li class="button"><a href="">按钮03</a></li>
        <li class="button"><a href="">按钮04</a></li>
        <li class="button"><a href="">按钮05</a></li>
        <li class="button"><a href="">按钮06</a></li>
</ul>
```

---

### 9.生成随机的文本（占位用的）

输入 `lorem12` 会生成一段12个单词的句子

```
dl>dt>lorem3+(dd>lorem5)*2
```

```html
<dl>
        <dt>
            Lorem, ipsum dolor.
            <dd>Lorem ipsum dolor sit amet.</dd>
            <dd>Voluptate repudiandae dolorem reprehenderit magni!</dd>
        </dt>
</dl>
```

---

### 10.Emmet Abbreviations-Implicit tag names（缩写词-隐式标签）

* 没有嵌套内容默认是 `<div>`
* 有一些指代是隐式的，比如 `<ul>` `<ol>` `<table>` 等

```
ul>.item$$>lorem5*3
```

```html
<ul>
        <li class="item01">
            <div>Lorem ipsum dolor sit amet.</div>
            <div>Fugit praesentium aperiam ab odit?</div>
            <div>Velit consequatur sunt quos laboriosam.</div>
        </li>
</ul>
```

```
table>.name+tb>.grade
```

```html
<table>
        <tr class="name"></tr>
        <tb>
            <div class="grade"></div>
        </tb>
</table>
```

---

### 11.CSS Abbreviations （CSS相关的缩写词-隐式标签）

```css
.body{
<!--w400+h300+m24+p32-->
    width: 400px;
    height: 300px;
    margin: 24px;
    padding: 32px;

<!-- m0-0-24-0-->
 margin: 0 0 24px 0;

<!--fz20-->
 font-size: 20px;

<!--fz1.5-->
font-size: 1.5em;

<!--fw500-->
font-wight: 500;

<!--lh48-->
line-height: 48;

<!--bgc-->
background-color: #fff;

<!--dib-->
display: inline-block;

<!--dif-->
display: inline-flex;

<!--df-->
display: flex;
} 
```

---

### 12.在HTML中的常见缩写

```html
<!--script:src-->
<script src=""></script>

<!--link-->
<link rel="stylesheet" href="">

<!--link:css-->
<link rel="stylesheet" href="style.css">

<!--a:link-->
<a href="http://"></a>

<!--inp-->
<input type="text" name="" id="">

<!--input-->
<input type="text">

<!--input:password-->
<input type="password" name="" id="">

<!--btn-->
<button></button>

<!--btn:s-->
<button type="submit"></button>
```
