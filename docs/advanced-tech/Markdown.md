# Markdown 基本语法

通过本部分，你能够：

- 了解 Markdown 的作用
- 可以使用 Markdown 撰写一些简单的文档

## Markdown 是什么

Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素。使用范围十分广泛，StackOverflow、CSDN、掘金、简书、GitBook、有道云笔记、V2EX、光谷社区等。主流的代码托管平台，如 GitHub、GitLab、BitBucket、Coding、Gitee 等等，都支持 Markdown 语法，很多开源项目的 README、开发文档、帮助文档、Wiki 等都用 Markdown 写作。

> [!WARNING]
> 请注意，Markdown 语法中所有符号均使用英文半角输入

## Markdown 语法

### Markdown 与 HTML

Markdown 部分兼容 HTML，你可以在里面使用一些简单的 HTML 元素！

```md
<div style="color:red;font-size:30px;">Youthol</div>
```

<div style="color:red;font-size:30px;">Youthol</div>

### 标题

```md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

请注意，`#` 和标题之间要以空格分隔

### 段落

对于 Markdown 段落书写，段落之间应该使用一个空行隔开，否则在一些 Markdown 解析器中会被视作一段。其次，段落开头不要留出空白字符。

在一行的末尾添加两个或多个空格，然后按回车键，即可创建一个换行，但由于 md 编辑器不同可能会差生不同效果，这时我们可以使用 `<br>` 进行手动换行。

### 强调语法

要加粗文本，请在单词或短语的前后各添加两个星号（ `**内部内容**` ）或下划线（ `__内部内容__` ）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（ `**内部内容**` ）。

要用斜体显示文本，请在单词或短语前后添加一个星号（ `*内部内容*` ）或下划线（ `**内部内容**` ）。要斜体突出单词的中间部分，请在字母前后各添加一个星号`*内部内容*`，中间不要带空格。

| md 语法                     | 效果                  |
| --------------------------- | --------------------- |
| 我是 `**星号加粗**`         | 我是 **星号加粗**     |
| 我是 `__下划线加粗__`       | 我是 **下划线加粗**   |
| 我是 `*星号斜体*`           | 我是 _星号斜体_       |
| 我是 `_下划线斜体_`         | 我是 _下划线斜体_     |
| 我是 `***星号加粗下划线***` | 我是 **_星号下划线_** |

### 引用语法

```md
> Dorothy followed her through many of the beautiful rooms in her castle.
```  

实际效果
> Dorothy followed her through many of the beautiful rooms in her castle.

嵌套应用

```md
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### 列表语法

**有序列表（注意数字后面存在空格）**

```md
1. First item
2. Second item
3. Third item
4. Fourth item
```

1. First item
2. Second item
3. Third item
4. Fourth item

另外，列表前面的数字可以打乱：

```md
1. First item
1. Second item
1. Third item
1. Fourth item
```

1. First item
1. Second item
1. Third item
1. Fourth item

**无序列表（相应符号后面存在空格）**

创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。
```
- First item
- Second item
- Third item
- Fourth item
```

示例：
- First item
- Second item
- Third item
- Fourth item

要在保留列表连续性的同时在列表中添加另一种元素，请将该元素缩进四个空格或一个制表符。如下所示：

```
1.  This is the first list item.
1.  Here's the second list item.

    I need to add another paragraph below the second list item.

1.  And here's the third list item.
```

1.  This is the first list item.
1.  Here's the second list item.

    I need to add another paragraph below the second list item.

1.   And here's the third list item.

### 代码语法

要将单词或短语表示为代码，请将其包裹在反引号 (` `` `) 中。代码块可以使用 ` ``` ` 包裹，在后面可以添加语言（如果有的话）。

```
At the command prompt, type `nano`.
```

At the command prompt, type `nano`.


### 链接&&图片语法

```
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。
```

这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。

```
![这是图片](/assets/img/philly-magic-garden.jpg "Magic Gardens")
```

![这是图片](https://markdown.com.cn/assets/img/philly-magic-garden.9c0b4415.jpg "Magic Gardens")

## Markdown 扩展语法

看到这里，你已经学习到大多数 Markdown 的语法了，这些语法在几乎所有的 Markdown 处理器中都可以得到支持。

相信你不难发现，Markdown 提供的这些功能其实远远不够。因此衍生了很多 Markdown 扩展语法，如今这些扩展语法也已被绝大多数 Markdown 处理器所支持。

可以在这里查看常用的 Markdown 扩展语法。

https://markdown.com.cn/extended-syntax/

## 更进一步......

-   [Markdown 详细教程](https://markdown.com.cn/)
