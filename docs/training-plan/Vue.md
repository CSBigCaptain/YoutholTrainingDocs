# Vue.js 入门

通过本章节，你将学会：

1. 学会使用 create-vue 脚手架快速新建 Vue 项目；
1. 了解一下 Vue 基础知识；
1. 能够使用 Vue 构建一些小型 Web 应用。

---

Vue.js 是一个出色的开源 JavaScript 框架，凭借其出色的性能和较低的入门难度而深受广大国内开发者欢迎，同时也是我们主要的前端技术栈之一。本章节将为大家讲解一下关于 Vue.js 的一些知识。

## 知识引入

Vue 入门难度相对来说不是很高（笔者个人感觉会比 React 简单），但是为了讲解一些 JavaScript 的一些特性以及能够对 Vue 有更好的理解，笔者这里选择单文件引用 Vue 的方法来介绍 Vue.js。

但事实上，我们开发 Vue 应用是通过单文件组件进行的，而且创建 Vue 项目基本都是用 create-vue 脚手架来快速创建的，这种开箱即用的方式远比单文件引用要简单。

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

如果你不想解构出来，这样也是可行的：

```js
const app = Vue.createApp({
  // 选项
})
```

还记得之前学过的 ES Modules 规范吗？Vue 也为支持 ESM 规范的浏览器准备了单独的版本，之后我们学习 Node 时基本上都会用 ESM 规范来写，见下例：

```html
<script type="module">
  import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

  createApp({
    // 选项
  })
</script>
```

但是避免混乱，这里我们先不用 ESM 规范来演示。

## 挂载应用

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

现在根组件（app 组件）已经被我们挂载到 id 为 `app` 的元素上了，此时 Vue 便可以控制此元素了。

## 设置组件模板

可以通过组件的 `templete` 选项来设置组件内的模版，如果没有 `templete` 参数，则使用其“宿主”的 `innerHTML` 。

```html:line-numbers=11 {7}
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

> [!tip]  
> `createApp` 函数中的对象结构是 Vue 中的选项式 API（Options API）风格，我们培训以组合式 API（Composition API）风格为主。因此如果无法理解里面的结构，您可以暂时略过这些内容。选项式 API 是 Vue 不可分割的一部分，但是组合式 API 在大型项目的开发中更加便利。

## 多个应用实例 ​

应用实例并不只限于一个。`createApp` 函数允许你在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的用于配置和全局资源的作用域。

```js
const app1 = createApp({
  /* ... */
})
app1.mount("#container-1")

const app2 = createApp({
  /* ... */
})
app2.mount("#container-2")
```

同时也可以将一个 Vue 应用挂载在另一个 Vue 应用的模板里，见下例：

```js
const { createApp } = Vue

const app = createApp({
  template: `
      <div id="app">
        <div id="app2"></div>
        <button @click="count++">此按钮点击次数： {{ count }}</button>
       </div>
    `,
  setup() {
    const count = Vue.ref(0)
    return { count }
  },
}).mount("#app")

const app2 = createApp({
  template: `
      <h1>{{topic}}<h1>
      `,
  setup() {
    const topic = "DEMO"
    return { topic }
  },
}).mount("#app2")
```

具体显示效果也很好猜测，这里就不多赘述了。

如果你在使用 ESM 规范的话，可以通过模块化分隔代码，这样可以增加代码的可维护性：

```js
// main.js
import { createApp } from "./vue.esm-browser.js"
import App from "./app.js"

const app = createApp(App).mount("#app")

// app.js
import { ref } from "./vue.esm-browser.js"

export default {
  template: `
      <div id="app">
        <div id="app2"></div>
        <button @click="count++">此按钮点击次数： {{ count }}</button>
       </div>
    `,
  setup() {
    const count = Vue.ref(0)
    return { count }
  },
}
```

## Vue 单文件组件（SFC）

上述单文件引用 Vue 来开发 Web 应用显然比较繁琐，现在我们来正式为大家介绍——单文件组件（SFC）！

有个很不幸的事情是，通过单文件引用 Vue 并不能支持单文件组件，因为一个 Vue 单文件组件通常使用 `.vue` 扩展名，而浏览器并无法解析此类文件（显然浏览器只认识三件套）。总之，我们需要在 Node（换言之应该借助 Vite & WebPack 这样的打包工具）中才能使用单文件组件来开发 Vue 应用。

我们将 Node & Vite 的教程放在了下一章，大家可以自行前往阅读。

Vue 单文件组件使用类似 HTML 的代码风格的自定义文件格式，文件后缀名通常为 `.vue`，用来定义 Vue 组件。

每个 Vue 单文件组件的最顶层由三个语言块——`<template>`、`<script>`、`<style>`——以及一些其他的自定义语言块组成。

### `<template>`

同之前提到的 `template` 参数，可以在里面写模板 HTML。

里面的内容会被提取，预编译为 JavaScript 渲染函数。

### `<script>`

此语言块内可以通过选项式 API 写组件的 JavaScript 脚本，和上面单文件引用 Vue 演示的一样。若想通过组合式 API 写组件的脚本，请参见下面的 `<script setup>`。

### `<script setup>`

在此标签中书写组合式 API 脚本，体验就像你平时写 JavaScript 代码一样，这里的脚本会被处理成 `setup()` 函数，另外也可以和 `<script>` 标签共存。

组合式 API 顶层的绑定（变量，import，函数等等）会自动暴露给模板以方便调用，无需使用 return，而且在大型项目中使用组合式 API 拥有更好的性能，而且可以使用纯 Typescript。

### `<style>`

很明显，此标签是写样式的.......

与前两个不同的是，一个 Vue 文件中可以包含多个 `<style>` 标签。

你可以在里面添加 `scope` 属性，这样就可以控制样式表中的样式只针对当前组件生效，避免将样式污染到根组件（以根组件为祖先的全部组件连带全部子组件均会被影响到）。

### 预处理器

代码块可以使用 `lang` 参数来声明预处理器的语言，最常见的是在 `<script>` 中使用 TypeScript：

```vue
<script lang="ts">
// use TypeScript
</script>
```

也可以可以在 `<style>` 标签中使用 Sass：

```vue
<style lang="scss">
$primary-color: #333;
body {
  color: $primary-color;
}
</style>
```

在每一个语块中你都可以按照相应语言 (HTML、CSS、JavaScript 和 less 等等) 的语法书写注释。对于顶层注释，请使用 HTML 的注释语法 `<!-- comment contents here -->`。

上面我们用 HTML 演示了一个神奇的按钮，现在我们可以使用 SFA 来重新写一个相同的按钮：

```vue
<script setup>
const count = ref(0)
</script>

<template>
  <button @click="count++">按钮点击次数：{{ count }}</button>
</template>
```

## 绑定

### 文本插值

上面已经演示过了，略。

### 绑定 HTML 属性

文本插值不适用于 HTML 属性。如果想要响应式地绑定一个属性，可使用 `v-bind`：

```vue
<div v-bind:id="dynamicId"></div>
```

`v-bind `指令指示 Vue 将元素的 `id` 属性与组件的 `dynamicId` 属性保持一致。如果绑定的值是 `null` 或者 `undefined` 或者 `false` 等假值，那么该 attribute 将会从渲染的元素上移除。

此指令有个简写语法，见下：

```vue
<div :id="dynamicId"></div>
```

如果你有像这样的一个包含多个属性的 JavaScript 对象：

```js
const objectOfAttrs = {
  id: "container",
  class: "wrapper",
  style: "background-color:green",
}
```

通过不带参数的 `v-bind`，你可以将它们绑定到单个元素上：

```vue
<div v-bind="objectOfAttrs"></div>
```

### 在绑定中使用 JavaScript

至此，我们仅在模板中绑定了一些简单的属性名。但是 Vue 实际上在所有的数据绑定中都支持完整的 JavaScript 表达式：

```vue
{{ number + 1 }}

{{ ok ? "YES" : "NO" }}

{{ message.split("").reverse().join("") }}

<div :id="`list-${id}`"></div>
```

但请注意，绑定仅支持表达式而非泛泛的语句，有个简单的判断方法，就是他们能否被写在 `return` 后面，能够写在后面的自然是表达式。

### 在绑定中使用函数

可以在绑定中使用函数。但请注意，绑定的函数在组件每次更新时都会被调用，因此不应该有任何副作用，比如更改数据或者是异步操作。

## 条件渲染与列表渲染

### 条件渲染 `v-if` & `v-else` 与 `v-else-if`

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。

你也可以使用 `v-else` 为 `v-if` 添加一个“else 区块”。

`v-else-if` 同一些编程语言的 `else if` 语句。

有趣的是，如果你想通过条件渲染批量控制元素的渲染，可以在一个 `<template>` 元素上使用 `v-if`，这仅仅是一个不可见的包装器元素，最后的渲染结果不会包含这个 `<template>` 元素。

```vue
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

### 列表渲染 `v-for`

#### Basic

我们可以使用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令的值需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据的数组，而 `item` 是迭代项的别名。另外，`v-for` 也支持使用可选的第二个参数表示当前项的位置索引。

#### `v-for` 与对象

你也可以使用 `v-for` 来遍历一个对象的所有属性。另外在遍历时除了可以提供第一个参数 value 以外，还可以提供第二个参数 key、第三个参数其 index 索引值。

```vue
<li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>
```

#### 在 `v-for` 里使用范围值 ​

`v-for` 可以直接接受一个整数值。在这种用例中，会将该模板基于 `1...n` 的取值范围重复多次。

```vue
<span v-for="n in 10">{{ n }}</span>
```

> [!tip]
> 注意此处 `n` 的初值是从 `1` 开始而非 `0`。

#### `<template>` 上的 `v-for​`

与模板上的 `v-if` 类似，你也可以在 `<template>` 标签上使用 v-for 来渲染一个包含多个元素的块。

#### v-for 与 v-if

> [!CAUTION]
> 同时使用 `v-if` 和 `v-for` 是不推荐的，因为这样二者的优先级不明显。

当它们同时存在于一个节点上时，`v-if` 比 `v-for` 的优先级更高。这意味着 `v-if` 的条件将无法访问到 `v-for` 作用域内定义的变量别名。

在外先包装一层 `<template>` 再在其上使用 `v-for` 可以解决这个问题 (这也更加明显易读)：

```vue
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```

## 响应式数据

### 为什么要使用响应式数据？

我们来看这个例子：

```html:line-numbers {18-20}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./vue.global.js"></script>
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
  <script>
    const { createApp, ref, computed } = Vue

    const App = Vue.createApp({
      template: /*html*/ `
         <div>
          <h1>{{ num }}</h1>
          <button @click="num++">Add</button>
          <button @click="num--">Subtract</button>
        </div>
        `,
      setup() {
        let num = 0; // [!code --]
        let num = ref(0); // [!code ++]
        return { num };
      },
    }).mount("#app")
  </script>
</html>
```

这个例子很简单，有两个按钮和一个数字，两个按钮可以加减这个数字。但是大家注意实例的第 24 & 25 行，`num` 变量到底该怎么定义呢？有很多初学者会选择红色的代码定义。

但是当你兴冲冲地去打开预览、点击按钮时，你会发现数字并没有出现变化。逻辑有错误吗？聪明的你可能会去添加一个 `console.log()` 试试看。你会发现，点击按钮时，`num` 的值确实发生了变化，但是页面上的数字并没有发生变化，显然代码是没有问题的。原因是虽然 `num` 的值发生了变化，但是我们要知道元素已经被渲染了。

因此这里要使用响应式数据，当数据的值发生变化时，Vue 会捕获到这一变化，并自动重新渲染该元素。

### `ref()`

在组合式 API 中，可以用 `ref()` 来声明响应式状态。

`ref()` 接受参数，并返回一个带有 `value` 属性的对象：

```js
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

如果你在 `setup()` 函数声明了响应式数据，你需要将它们包裹到对象里返回以将其暴露，此现象已在之前的实例中出现。

另外，在模板绑定（之前提到的插值表达式，绑定 HTML 属性）中使用 `ref` 数据时，我们不需要附加 `.value` ，他们会被自动解包。

### 更进一步？

https://cn.vuejs.org/guide/essentials/reactivity-fundamentals

## 计算属性

计算属性可以描述依赖响应式数据的复杂逻辑，同时计算属性本身也是响应式数据。

假如隔壁新闻网程序部的杨部长比吴副部长老 1 岁（只是一个无端的假设），那么我想实时地改动任意一个部长的年龄，需要确保另一个部长也能及时相应式的更改过来。那么这个情况就比较适合使用计算属性了，因为杨部长一直比吴副部长老 1 岁。

```js:line-numbers {13,15}
import { ref, computed, createApp } from "./vue.esm-browser.js"

const App2 = createApp({
  template: /*html*/ `
    <div>输入杨部长的年龄：<input v-model="youngAge"/></div>
    <div>输入吴副部长的年龄：<input v-model="wooAge"/></div>
    <div>杨部长的年龄：{{youngAge}}</div>
    <div>吴副部长的年龄：{{wooAge}}</div>
  `,
  setup() {
    const youngAge = ref(19)
    const wooAge = computed({
      get: () => youngAge.value * 1 + 1,
      set: (value) => {
        youngAge.value = value * 1 - 1
      },
    })
    return {
      youngAge,
      wooAge,
    }
  },
}).mount("#app2")
```

`computed` 接收一个 getter 函数，或者是接受一个包裹着 getter 函数和 setter 函数的对象，返回一个 `ref` 类型的响应式数据。当读取计算属性的值时，则根据 getter 函数计算出值来；当写入计算属性的值时，setter 函数根据写入的值来执行操作来修改其他的值或者是执行一些操作。

在上例中，两个输入框中的内容与 `youngAge`、`wooAge` 的值对应绑定，当你在输入框中修改两个输入框的值时，其绑定的值也会随之变化。不过这并不重要，我们研究的是 `youngAge` 和 `wooAge` 这两个值的变化关系：当 `youngAge` 的值发生变化时，由于 `wooAge` 已经正在被读取，因此这个变化会被其捕获到并执行 getter 函数使其值跟随着也发生响应式变化；相反如果更改 `wooAge` 的值，相当于对 `wooAge` 的值进行写入，因此会被捕获到执行 setter 函数，根据写入后的新值执行指令序列（在此处是将 `youngAge` 减 1）。

代码中还有一个有趣的现象是：在高亮行中我们对于数据的运算都有一个乘以 1 的操作，一个数乘以 1 不还是这个数吗？但是你并没有注意到一个问题，这个属性是数吗？显然它应该是一个字符串，如果你不对其进行乘法操作，那么 JavaScript 会将后面的数字转换成字符串，则上面的运算就变成了一个字符串拼接操作。

## 组件基础

组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。在实际应用中，组件常常被组织成一个层层嵌套的树状结构：

<img src="https://cn.vuejs.org/assets/components.B1JZbf0_.png" alt="组件树状结构">

这和我们嵌套 HTML 元素的方式类似。

### 定义组件

如果使用 Vite 或 WebPack 等打包工具，我们一般会使用之前提到过的单文件组件。

但是如果没有使用打包工具的条件，也可以使用一开始演示的 JavaScript 对象来定义：

```js
import { ref } from "vue"

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`,
}
```

上面的例子中定义了一个组件，并在一个 `.js` 文件里默认导出了它自己，但你也可以通过具名导出在一个文件中导出多个组件。

### 使用组件

要使用子组件，我们需要在父组件中引入：

```js
import "MyComponent" from "./MyComponent.js"
```

这个组件的 `export default` 即默认导出就会暴露出来供我们调用。在组合式 API 中，我们导入的组件即刻可用。如果你是选项式 API 的话，你需要在 `components` 选项中注册组件：

```js
import ButtonCounter from "./ButtonCounter.vue"

export default {
  components: {
    ButtonCounter,
  },
}
```

**在单文件组件中**，组件的标签名是区分大小写的，因此我们建议使用帕斯卡命名法（`PascalCase`）来命名组件。但是在使用组件的时候，我们也可以使用烤串命名法（`kebab-case`）甚至是小驼峰命名法（`camelCase`），Vue 在编译组件时会自动转换。

另外还有标签是否闭合问题，如果组件没有插槽或者是不写插槽（一对标签中间的内容），则可以使用自闭合标签：

```vue
<!-- 自闭合标签 -->
<MyComponents />
<!-- 如果组件有默认插槽，需要使用闭合标签 -->
<Mycomponent>jjj</Mycomponent>
<!-- 这些风格都是可以的 -->
<my-components />
<my-components></my-components>
<myComponents></myComponents>
<!-- ...... -->
```

### 传递参数

我们之前学习的 HTML 组件是可以填写参数的，比如 `a` 元素有 `href` 属性，`img` 元素有 `src` 属性等等。Vue 组件也是可以的。

在组件中定义参数，如果是组合式 API，需要用到 `defineProps()` 宏命令，此命令不需要使用 `import` 语句导入。在选项式 API 中，我们可以在组件的导出中使用 `props` 选项来定义：

```js
// 组合式 API
const props = defineProps(["title", "content"])
console.log(props.title)

// 选项式 API
export default {
  props: ["title", "subTitle", "content"],
  setup(props) {
    console.log(props.title)
  },
}
```

对于选项式 API，还有需要注意的地方是，在使用 `setup()` 钩子函数时需要将 `props`（以及后面会讲的 `emits`）一并传入才能使用。

当 props 被注册后，我们就可以使用它们了：

```vue
<BlogPost title="My journey with Vue" />

<!-- 另外也无需纠结使用什么命名风格，在单文件组件中，Vue 编译组件时会自动转换 -->
<BlogPost sub-title="Th Young" />
<BlogPost SubTitle="Th Young" />

<!-- 也可以配合 v-bind 绑定 JavaScript 表达式 -->
<BlogPost :title="post.title" />
```

更进一步： https://cn.vuejs.org/guide/components/props

### 监听事件

父组件通过 Props 向子组件**逐级**传递数据，而子组件通过**逐级**向上抛出 Emits 事件来向父元素传递信息。

假如有一个情景：有个子组件，需要在点击它的时候，告诉父组件执行一些操作（比如切换网页深浅颜色，甚至是告诉父元素一些信息，等等）。那么对于子元素而言，我们可以定义 Emits 事件，然后在特定条件向上抛出 Emits 事件。对于父元素而言，可以为其设置一个监听器来监听子元素抛出的 Emits，并根据事件来执行一些操作即可。

在抛出事件之前，需要先定义事件：在组合式 API 中，我们可以使用 `defineEmits()` 宏命令来定义事件（同 `defineProps()` 宏一样，不需要 `import` 导入）；在选项式 API 中，我们可以在组件的导出中使用 `emits` 选项来定义事件，和 props 相同，也需要将 emits 传入 `setup()` 钩子函数中。

向上抛出 Emits 事件会用到内置的 `$emits('emit-name', ...args)` 方法，其中 `emit-name` 是事件名，`...args` 是传递的参数。

子元素向上抛出事件之后，父元素可以使用 `v-on` 或者 `@` 来监听事件，如果 Emits 事件包含参数，那么需要使用回调函数来接收参数并执行指令。

```vue
<!-- 如果 Emit 事件不包含数据，直接在里面写需要执行的操作即可 -->
<Components @EmitEvent="options" />
<!-- 如果 Emit 事件包含数据，应该用一个函数来接受传过来的参数 -->
<Components @EmitEvent="function(n1, n2, ...){options}" />
```

### 插槽

在大多数情况下，使用属性传递参数足够了，但是都通过属性传递参数会让你写出来的组件用起来很反人类。我们也想用 HTML 那种把内容包在一对标签里面的方法来传递参数，这个时候就需要使用插槽了。

我们使用 Vue 的 `<slot>` 元素作为一个占位符：

#### 只有一个插槽的情况

```vue
<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <slot />
  </div>
</template>
```

这样的话，父元素通过插槽传递过来的内容就会替换到这里。

#### 有多个插槽的情况

可以给每一个 `<slot />` 标签添加一个 `name` 属性，这样就可以给每一个插槽分配一个独一无二的名字：

```vue
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

这类带 `name` 的插槽被称为具名插槽 (named slots)。没有提供 `name` 的 `<slot>` 插槽会隐式地命名为“default”。

要为具名插槽提供内容，可以在父组件中使用 `template` 元素，并用 `v-slot` 指令来定义它们的名字：

```vue
<BaseLayout>
  <template v-slot:header>
    <!-- header 插槽的内容放这里 -->
  </template>
</BaseLayout>
```

`v-slot` 有一个简写 `#`，`v-slot:header` 可以简写为 `#header`。

更进一步： https://cn.vuejs.org/guide/components/slots

## 绑定类和内联样式

在 Vue 中，可以用 v-bind 来绑定类和样式，而且 Vue 专门为其进行了功能增强。

### 绑定类

```vue
<div :class="{ active: isActive }"></div>
```

上面的代码中，`active` 类只有在 `isActive` 为真时才会被添加到 `<div>` 元素上，我们可以建一个响应式布尔型数据 `isActive` 来控制这个类是否添加到 `<div>` 元素之上。

```js
const isActive = ref(true)
```

聪明的小伙伴可能会发现，这个 `:class` 是一个属性均为布尔类型的对象结构，那么能不能直接弄一个响应式对象直接绑定到 `:class` 上呢？显然是可以的：

```js
const classObject = reactive({
  active: true,
  "text-danger": false,
})
```

```vue
<div :class="classObject"></div>
```

> [!tip]
> 这里的 `reactive()` 是 Vue 中用来定义响应式对象的 API，用法类似于 `ref()`。

还记得之前学过的计算属性吗？我们也可以绑定一个返回布尔类型对象的计算属性。

另外，也可以直接绑定数组，甚至在数组中嵌套一个对象！

```vue
<div :class="[{ ['activeClass', 'otherClass']: isActive }, 'errorClass']"></div>
```

显而易见，`errorClass` 类会一直被添加到 `<div>` 元素上，而 `activeClass` 和 `otherClass` 类则会根据 `isActive` 的值来决定是否添加。

### 绑定内联样式

由于样式表里的属性和 JavaScript 的对象也很像，因此内联样式也支持绑定 JavaScript 对象：

```js
const activeColor = ref("red")
const fontSize = ref(30)
```

```vue
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

对于 CSS 的属性名，可以使用 `camelCase` 形式命名，也可以使用 `kebab-case` 形式（需用双引号包裹）和 `PascalCase` 命名，Vue 在编译组件时同样会自动转换。

也可以直接绑定一个响应式对象：

```js
const styleObject = reactive({
  color: 'red',
  fontSize: '30px'
})
```

```vue
<div :style="styleObject"></div>
```

如果样式需要更复杂的逻辑，使用计算属性也可以。

我们仍然可以使用数组来绑定内联样式，数组会自动合并到一起，渲染上同一元素上。

总之，绑定内联样式和绑定 Class 大同小异，都是将其用 `v-bind` 绑定到一个对象或者有数组组合成的对象上。

## 结语

以上就是 Vue 基础的部分了。尽管这对于功能强大的 Vue 来说只是冰山一角，但是这些知识足以帮助你完成一些小型的 Vue 应用了。

回顾一下你学到的知识，试着用 Vue 做一些有趣的项目。若想了解更多的细节，我们建议你去阅读 [Vue 的官方文档](https://cn.vuejs.org/)。

