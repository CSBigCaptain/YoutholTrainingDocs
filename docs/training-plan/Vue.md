# Vue.js 入门 <Badge type="danger">正在规划</Badge>

通过本章节，你将学会：

1. 了解一点儿 JavaScript 模块特性；
1. 在项目中通过单文件方式引入 Vue.js；
1. 学会 Node.js 的安装；
1. 会使用 Vue-Cli 脚手架快速建立 Vue 项目；
1. 了解 Vue.js 的插值表达式以及响应式数据；
1. 会使用 Vue 建立简单的 Web 组件。

---

Vue.js 是一个出色的开源 JavaScript 框架，凭借其出色的性能和较低的入门难度而深受广大国内开发者欢迎，同时也是我们主要的前端技术栈之一。本章节将为大家讲解一下关于 Vue.js 的一些知识。

## 知识引入

Vue 入门难度相对来说不是很高（笔者个人感觉会比 React 简单），但是为了讲解一些 JavaScript 的一些特性以及能够对 Vue 有更好的理解，笔者这里选择单文件引用 Vue 的方法来介绍 Vue.js。

但事实上，我们使用 Vue 开发基本都是在 Node 中进行的，而且创建 Vue 项目基本都是用 create-vue 脚手架来快速创建的，这种开箱即用的方式远比单文件引用要简单。



## 引入 Vue.js

如果是使用 Vue 单文件，常用的方法是通过 CDN 引入，见下：

```js
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

如果 CDN 不稳定，可以试着将文件保存下来，通过浏览器访问[链接](https://unpkg.com/vue@3/dist/vue.global.js)然后按下 `Ctrl` + `S` 保存即可。

## 创建应用

引入 Vue 后，我们的 HTML 文件是这样子的（这里我将 Vue 的源码保存了下来）：

```html{7}
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./vue.global.js"></script>
</head>
<body>

</body>
</html>
```

### 应用实例

每个 Vue 应用都是通过使用 createApp 函数创建应用实例来创建的：

```js
const { createApp } = Vue // ES6 中的解构操作

const app = createApp({
  /* 根组件选项 */
})
```

### 挂载应用

应用实例必须在调用了 `.mount()` 方法后才会渲染出来，它的作用是将应用实例挂载在一个元素上。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串，作为此实例的“宿主”：

```html:line-numbers {10,12-16}
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./vue.global.js"></script>
</head>
<body>
    <div id="app"></div>
    <script>
      const { createApp } = Vue

      const app = createApp({
        /* 根组件选项 */
      }).mount("#app") // mount 里面可以是 CSS 选择器
    </script>
</body>
</html>
```

现在根组件（app 组件）已经被我们挂载到 id 为 app 的元素上了，此时 Vue 便可以控制此元素了。

### 组件模板

可以通过组件的 `templete` 选项来设置组件内的模版，如果没有 `templete` 参数，则使用其“宿主”的 `innerHTML` 。

```html:line-numbers=11
<script>
  const { createApp } = Vue
  
  const app = createApp({
    template: `
      <div id="app">
        <button @click="count++">此按钮点击次数： {{ count }}</button>
       </div>
    `,
    setup() {
      const count = Vue.ref(0)
      return { count }
    }
  }).mount("#app") 
</script>
```

代码中第 17 行中的 <span v-pre>`{{ count }}`</span> 是 Vue 的**插值表达式**，可以理解成把双花括号部分会被替换成里面 JavaScript 表达式的值，在这里自然就是变量 `count` 的值。

这一段代码我们到后面还会再次介绍，有一种更简便的写法。

### 多个应用实例​

应用实例并不只限于一个。`createApp` API 允许你在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的用于配置和全局资源的作用域。

```js
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
```


## Vue 的模板语法 <Badge type="warning">略难</Badge>

> [!TIP]
> 本部分稍有难度，若理解困难可暂时略过此部分内容，但并不意味着可以放弃此内容。

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。

<div style="float:right;"><strong>——引用自 Vue 官中文档</strong></div>

### 文本插值

