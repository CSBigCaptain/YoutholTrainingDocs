# HTML 知识

## HTML 是什么

+ HTML 是**超文本标记语言**的缩写，是一种标记语言，所谓标记语言，就是通过对标签的解释渲染出页面而无逻辑内容。

+ HTML **不是一门编程语言**。

+ HTML 文件的后缀名是 `.html` 和 `.htm` ，二者无任何区别。

## HTML 是干什么用的

网页文件本身是一种文本文件，它通过标记符号来标记要显示的网页中的各个部分。浏览器按顺序阅读网页文件，然后根据标记符解释和显示其标记的内容。

综上所述，HTML 是一种能被浏览器识别解析，并且能够显示相应内容的语言，在 Web 开发中，HTML 是属于书写网页结构语言，扮演着搭建网页框架结构（这里的框架结构就类似于现代建筑中，修房子需要首先搭建起框架结构一样）的作用，是web开发中必不可少的一门语言。

另外，CSS 定义了网页的样式，JavaScript 则定义了网页的行为，后面我们会提到。

## HTML 元素

### 开始

这是一段 HTML 代码：

```html
<p>这是一个段落。</p>
```

这个元素的主要部分有：

+   开始标签（Opening tag）：包含元素的名称被大于号、小于号所包围。表示元素从这里开始或者开始起作用——在本例中即段落由此开始。
+   结束标签（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾——在本例中即段落在此结束。初学者常常会犯忘记包含结束标签的错误，这可能会产生一些奇怪的结果。
+   内容（Content）：元素的内容，本例中就是所输入的文本本身。
+   元素（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。

元素也可以有属性，见下例：

```html
<img class="images" src="./imgs" />
```

属性包含了关于元素的一些额外信息，这些信息本身不应显现在内容中。本例中，`class` 是属性名称，`images` 是属性的值。`class` 属性可为元素提供一个标识名称，以便进一步为元素指定样式或进行其他操作时使用。

属性应该包含：

1.  在属性与元素名称（或上一个属性，如果有超过一个属性的话）之间的空格符。
2.  属性的名称，并接上一个等号。
3.  由引号所包围的属性值。

::: tip
不包含 ASCII 空格（以及 `"` `'` `=` `<` `>` 和飘号）的简单属性值可以不使用引号，但是建议将所有属性值用引号括起来，这样的代码一致性更佳，更易于阅读。
:::

::: warning 划重点：
上述 `<img />` 标签并没有结束标签，HTML 中有一些元素无需结束标签，此类标签我们会称其为**自闭合标签**，因为这个元素里没有内容。
:::

### 元素的嵌套

也可以将一个元素置于其他元素之中——称作**嵌套**。要表明猫咪非常暴躁，可以将 “very” 用 元素包围，“very” 将突出显示：

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

必须保证元素嵌套次序正确：本例首先使用 `<p>` 标签，因此要先结束 `<strong>` 标签，最后再结束 `<p>` 标签。元素必须正确地开始和结束，才能清楚地显示出正确的嵌套层次。否则浏览器就得自己猜测，虽然它会竭尽全力，但很大程度不会给你期望的结果。所以一定要避免！

### 空元素

不包含任何内容的元素称为空元素（就是刚才提到的自闭合标签）。比如 [`<img>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 元素：

```html
<img src="images/firefox-icon.png" alt="My test image" >
```

本元素包含两个属性，但是并没有 `</img>` 结束标签，元素里也没有内容。这是因为图像元素不需要通过内容来产生效果，它的作用是向其所在的位置嵌入一个图像。

## HTML文件结构

我们以一个最简单的 HTML 文件来讲解其文件结构：

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image" />
  </body>
</html>
```

看起来有点儿慌？我们来介绍一些源码中的内容：

- `<!DOCTYPE html>`——[文档类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Doctype)。这是必不可少的开头。混沌初分，HTML 尚在襁褓（大约是 1991/92 年）之时，这个元素用来关联 HTML 编写规范，以供自动查错等功能所用。而在当今，它作用有限，可以说仅用于保证文档正常读取。现在知道这些就足够了。
- `<html></html>`—— [`<html>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/html) 元素。该元素包含整个页面的所有内容，有时候也称作根元素。里面也包含了 `lang` 属性，写明了页面的主要语种。
- `<head></head>`—— [`<head>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head) 元素。所有那些你加到页面中，且*不*向用户展示的页面内容，都以这个元素为容器。其中包含诸如提供给搜索引擎的[关键字](https://developer.mozilla.org/zh-CN/docs/Glossary/Keyword)和页面描述、用于设置页面样式的 CSS、字符集声明等等。
- `<meta charset="utf-8">`——该元素指明你的文档使用 UTF-8 字符编码，UTF-8 包括世界绝大多数书写语言的字符。它基本上可以处理任何文本内容。以它为编码还可以避免以后出现某些问题，没有理由再选用其他编码。
- `<meta name="viewport" content="width=device-width">`——[视口元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Viewport_concepts#移动设备的视口)可以确保页面以视口宽度进行渲染，避免移动端浏览器上因页面过宽导致缩放。
- `<title></title>`—— [`<title>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/title) 元素。该元素设置页面的标题，显示在浏览器标签页上，也作为收藏网页的描述文字。
- `<body></body>`—— [`<body>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body) 元素。该元素包含期望让用户在访问页面时看到的*全部*内容，包括文本、图像、视频、游戏、可播放的音轨或其他内容。

::: tip 觉得上述内容过于枯燥？
那就略过他们吧，他们对于初学者来说可能是无关紧要的（因为你觉得它很枯燥，事实上，作为编者的我也这么觉得）
:::

## 常用HTML标签

### 图片

重温一下 [`<img>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 元素（顺便再向上翻翻重温一下什么是自闭合标签吧）：

```
<img src="images/firefox-icon.png" alt="My test image" />
```

像之前所讲，该元素通过包含图像文件路径的地址属性 `src`，可在所在位置嵌入图像。

该元素还包括一个替换文字属性 `alt`，是图像的描述内容，用于当图像不能被用户看见时显示，不可见的原因可能是：

1.  用户有视觉障碍。视障用户可以使用屏幕阅读器来朗读 `alt` 属性的内容。
2.  有些错误使图像无法显示。可以试着故意将 `src` 属性里的路径改错。保存并刷新页面就可以在图像位置看到 `alt` 属性的内容。
3.  `alt` 属性的关键字即“描述文本”。`alt` 文本应向用户完整地传递图像要表达的意思。用 "测试图片" 来描述 图片内容并不合适，应该修改成更好的描述。

### [标题（Heading）](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics#标题（heading）)

标题元素可用于指定内容的标题和子标题。就像一本书的书名、每章的大标题、小标题，等。HTML 文档也是一样。HTML 包括六个级别的标题，一般最多用到 3-4 级标题。

```html
<h1>主标题</h1>
<h2>顶层标题</h2>
<h3>子标题</h3>
<h4>次子标题</h4>
```

::: danger
你可以看到第一级标题是有隐式的主题样式。不要使用标题元素来加大、加粗字体，因为标题对于 [无障碍访问](https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility) 和 [搜索引擎优化](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#为什么我们需要结构化？) 等问题非常有意义。要保持页面结构清晰，标题整洁，不要发生标题级别跳跃。
:::

### [段落（Paragraph）](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics#段落（paragraph）)

如上文所讲，[`<p>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 元素是用来指定段落的。通常用于指定常规的文本内容：

```html
<p>这是一个段落</p>
```

### [列表（List）](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics#列表（list）)

Web 上的许多内容都是列表，HTML 有一些特别的列表元素。标记列表通常包括至少两个元素。最常用的列表类型为：

1.  **无序列表**（Unordered List）中项目的顺序并不重要，就像购物列表。用一个 [`<ul>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ul) 元素包围。
2.  **有序列表**（Ordered List）中项目的顺序很重要，就像烹调指南。用一个 [`<ol>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol) 元素包围。

列表的每个项目用一个列表项目（List Item）元素 [`<li>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/li) 包围。

比如，要将下面的段落片段改成一个列表：

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

可以这样更改标记：

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

### [链接](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics#链接)

链接非常重要 — 它们赋予 Web 网络属性。要植入一个链接，我们需要使用一个简单的元素 [`<a>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a) — a 是 "anchor" （锚）的缩写。要将一些文本添加到链接中，只需如下几步：

1.  选择一些文本。比如“Mozilla Manifesto”。

2.  将文本包含在 `<a>` 元素内，就像这样：

    ```html
    <a>Mozilla Manifesto</a>
    ```

3.  为此 `<a>` 元素添加一个 `href` 属性，就像这样：
    
    ```html
    <a href="">Mozilla Manifesto</a>
    ```

4.  把属性的值设置为所需网址：

    ```html
    <a href="https://www.mozilla.org/zh-CN/about/manifesto/"
      >Mozilla Manifesto</a
    >
    ```

如果网址开始部分省略了 `https://` 或者 `http://`，可能会得到错误的结果。在完成一个链接后，可以试着点击它来确保指向正确。

::: info
`href` 这个名字可能开始看起来有点令人费解，代表超文本引用（ **H**ypertext **Ref**erence）。
:::

## HTML语义化 <Badge type="tip">可暂时略过</Badge>

HTML语义化就是用合理、正确的标签来展示内容。采用 DIV+CSS 布局我们的页面不仅使我们的文档结构不够清晰，而且不利于浏览器对页面的读取。语义化标签也能让浏览器更好的读取页面结构。再就是便于团队开发和维护，语义化更具可读性，遵循 W3C 标准的团队都遵循这个标准，可以减少差异化。

HTML语义化的好处

+ 去掉或者丢失样式的时候能够让页面呈现出清晰的结构；
+ 有利于 SEO ：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
+ 方便其他设备解析(如屏幕阅读器、盲人阅读器、移动设备)以意义的方式来渲染网页；
+ 便于团队开发和维护，语义化更具可读性，遵循W3C标准，可以减少差异化。

## 一些高级 HTML 标签 <Badge type="danger">较难</Badge>

注意：本部分知识稍有难度，可根据自身情况选择学习。