# CSS 入门知识

通过本章，你将学会：

1. 在 HTML 文件中引入 CSS 文件；
1. 会写一些简单的 CSS 文件；
1. 对盒子模型有一定的理解；
1. 了解弹性盒和 Flex 弹性盒布局。

---

如果说 **HTML** 是整个网页的骨架，那么 **CSS** 就是整个网页的脸皮嘴鼻子肉，可以让我们的网页更美观。

- CSS 负责包括网页的外在样式、颜色、布局等的表现。
- CSS 文件后缀是 `.css`。
- 此外 CSS 又叫层叠样式表，因为一个完整的网页是一层层堆叠形成的，这就是层叠两个字的由来。

## CSS 的使用

### 1. 内联样式（一般不推荐）

将元素的 CSS 属性直接写到 `style` 属性中，这是一段用了内联样式的 HTML 代码：

```html
<span style="color:red">这是一个代码</span>
```

这样这个 `<span>` 标签中的文字就会变成红色。

那么为什么不推荐使用呢？

- 不好看：如果都用内联样式写的话，那么你的代码到最后就显得很长，当代码数量多了之后就可能出现看错的情况；
- 使用内联样式可能会使页面看起来很混乱，不利于网页的维护。

### 2. 内部样式表

在 `<head>` 标签中通过 `<style>` 标签来创建，例如：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style></style>
  </head>
</html>
```

这样做挺方便，但缺点是所设置的样式只能应用到当前页面，因此在代码比较少或者所用 CSS 比较少时可以使用。

### 3. 外部样式表

这个方法比较常用，我们直接单独新建一个 CSS 文件，之后在 HTML 里面用 `<link>` 标签来引入 CSS 文件。例如：

```html
<link rel="stylesheet" href="你创建的css文件名字.css" />
```

为使用规范，一般写网页时都会对相应文件创建文件夹来方便使用，如 CSS 文件夹，JavaScript 文件夹等，之后布置作业时会讲具体文件规范。此时引用为：

```html
<link rel="stylesheet" href="css/你创建的css文件名字.css" />
```

其优点是可以同时修改页面内所有相同标签的样式且可一应用到多个网页中

## CSS 基本语法

CSS 基本语法包括选择器和声明块两种，见下面的示例代码：

```css
p {
  color: red;
  font-size: 23px;
}
```

其中的 `p` 就是选择器（选中了网页中所有的 `<p>` 元素），而大括号里面的就是声明块，其中包含了各种属性。

## CSS 基本选择器

[基本选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_selectors)是选择器中最初级的，通常由它们的组合构成其他更复杂的选择器。

1. 通用选择器
   - 能够选中所有的元素，甚至包括了它们的子元素
2. 元素选择器
   - 根据标签名来选中具有同种标签名的多个元素
   - 语法：`标签名 {}`
   - 例如`p {}`(表示为页面中的所有 `<p>` 标签设置样式)
3. 类选择器
   - 根据元素的 class 属性选中每个元素
   - 语法：`.class属性名 {}`
4. id 选择器
   - 根据元素的 id 选中一个元素
   - 语法：`#id名 {}`
5. 属性选择器
   - 根据元素的属性来选择元素
   - `[autoplay]` 选择所有具有 `autoplay` 属性的元素（不论这个属性的值是什么）。

在后面我们会介绍更多的选择器，来看下面这个例子：

```html
<span id="first">第一个</span> <span class="second">第二个</span>
```

此时当用基本选择器 `span {}` 表示同时会改变两个；如果用 ID 选择器 `#first {}` 则只会改变第一个；如果用类选择器 `.second {}` 就只会改变第二个。

## CSS 基本属性

- 宽度：`width`
- 高度：`height`
- 字体大小：`font-size`
- 颜色：`color`
- 背景颜色：`background-color`
- 背景图片：`background-image`
- 内边距：`padding`
- 外边距：`margin`
- ......（这些只是列出了一些常用的基本属性，之后会接触到更多的属性）

## CSS 基本布局

在 CSS 中存在很多布局方式，在这里我们先学习最简单也是最常用最好用的一种布局——弹性布局。

在介绍布局之前要引出一个很重要的模型——盒子模型。

### 盒子模型

当对一个文档进行布局（layout）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box），换言之，**每个 HTML 元素都是个盒子**。

一个盒子由四个部分组成：`content`、`padding`、`border`、`margin`。

- content 是元素本体的宽度，但请不要草率的将它和与 CSS 中的 `width` 属性混为一谈！
- padding 是元素的内边距，是 border 与 content 部分之间的间距；
- border 是元素的边框，围绕元素内边距的线；
- margin 是外边距，通常也用这个来调节元素与其他元素的距离。

#### 标准盒子模型和 IE 怪异盒子模型

标准盒子模型是浏览器默认的盒子模型，盒子的 `width` 和 `height` 即为元素的 `content`。

IE 怪异盒子模型是比较常用的盒子模型，因为大多数情况下使用它计算宽高会更为方便。在 IE 怪异盒子模型中：

- 盒子总宽度 = width + margin（外边距）;
- 盒子总高度 = height + margin;

也就是说，在 IE 怪异盒子模型中，`width/height` 包含了 `padding` 和 `border` 值。

#### CSS 的 `box-sizing` 参数

```less
// CSS 的注释太折磨了，所以用 less 来演示吧

* {
  box-sizing: content-box; // 浏览器默认的标准盒子模型
  //box-sizing: border-box;        IE 怪异盒子模型
  //box-sizing: inherit;           继承父元素
}
```

示例代码是将所有的元素（对，所有所有的）的宽高设置方法都改成标准盒子模型。

### 弹性布局

#### 弹性布局是什么？

弹性布局就像是盒子里的弹簧，可以帮助你轻松地安排盒子里的内容，无论是水平排列还是垂直排列，或者是在屏幕大小改变时自动调整大小。

#### 弹性布局的基本步骤

- 变成弹性盒子：首先，你需要把你的盒子（比如一个 `div`）变成一个弹性盒子。这只需要在 CSS 中添加一行代码：`display: flex`;。
- 安排内容：在你的弹性盒子里，你可以放很多小盒子（`div`），它们会自动按照你设置的规则排列。

#### 为什么要使用弹性盒子

- 水平排列：默认情况下，项目会水平排列。如果你想要改变方向，可以添加 `flex-direction: column`;，这样项目就会垂直排列了。
- 主轴居中：如果你想要项目在盒子里水平或垂直居中，可以使用 `justify-content: center`;。
- 交叉轴居中：如果你想要项目在盒子的另一端居中，可以使用 `align-items: center`;。

下面是一个例子

```css
.flex-container {
  display: flex;
  /* 项目水平居中 */
  justify-content: center;
  /* 项目垂直居中 */
  align-items: center;
}

/* 项目自动调整大小 */
.flex-item {
  flex: 1; /* 项目可以放大也可以缩小 */
}
```

```html
<div class="flex-container">
  <div class="flex-item">项目1</div>
  <div class="flex-item">项目2</div>
  <div class="flex-item">项目3</div>
</div>
```

在这个例子中，`.flex-container` 是一个弹性盒子，里面的 `.flex-item` 是项目。项目会自动水平和垂直居中，并且它们的大小会根据容器的大小自动调整。

弹性布局就像是有弹性的弹簧，可以帮助你轻松地安排和调整盒子里的内容，非常的实用。总之，弹性盒子是非常有用的，快来动手试一试吧！
