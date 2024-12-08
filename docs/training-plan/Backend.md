# 为什么要学后端，他和前端有什么区别
当一个网站需要实时显示最新的数据，即动态数据，就需要后端。
后端就是网站的"大脑"，它负责处理所有的业务逻辑，数据存储，数据处理，数据传输等等。
而前端就是网站的"脸"，它负责展示数据，与用户进行交互。
实现后端的技术有很多，比如Java，Python，PHP，Node.js等等。本次课程使用Python。

# 前置知识
## 1.Python中的字典和列表
### 字典
```python
dic = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

print(dic["name"])
```

### 列表
```python
list = [1, 2, 3, 4, 5]
print(list[0])
```

### 列表和字典融合
```python
#字典里面包列表
dic = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "friends": ["Alice", "Bob", "Charlie"]
}

#列表里面包字典
list = [
    {#下标为0的字典
        "name": "Alice",
        "age": 25,
        "city": "Los Angeles"
    },
    {#下标为1的字典
        "name": "Bob",
        "age": 35,
        "city": "Chicago"
    },
    {#下标为2的字典
        "name": "Charlie",
        "age": 40,
        "city": "San Francisco"
    }
]

print(dic["friends"][0])
print(list[0]["name"])
```

## 2. 什么是Json
```json
{
    "name": "John",
    "age": 30,
    "city": "New York"
}

[
    {
        "name": "Alice",
        "age": 25,
        "city": "Los Angeles"
    }
]
```
我们通常使用Json格式来存储和传输数据。
Json中的键值对类似于Python中的字典，但是Json中的键值对都是字符串。
Json中的列表和Python中的列表是一样的。

## 3.什么是GET请求和POST请求
### **GET 请求** — **点菜**

- 你进了饭馆，想看看菜单。你没有要求改变任何东西，只是想了解有哪些菜可以选择。你向服务员询问菜单（请求），然后服务员给你一份菜单（返回数据）。
  - **目的**：获取菜单（数据）。
  - **请求**：你只是询问菜单，不做其他修改。
  - **返回数据**：服务员给你一份菜单，上面列着所有可供选择的菜肴。

### **POST 请求** — **点餐**

- 当你决定好吃什么后，你告诉服务员你想点某几道菜（请求），这时你向服务员发送了一个点餐的请求。服务员会接受你的订单（提交数据），然后去厨房准备这些菜肴。
  - **目的**：提交点餐请求（数据），修改厨房的准备工作。
  - **请求**：你告诉服务员你要点的菜肴，实际上是发送了你点餐的数据。
  - **返回数据**：服务员可能会告诉你餐点准备时间，或者给你一个确认单（数据），你知道菜肴已被接受并且正在准备中。

> GET请求和POST请求是HTTP协议中的两种请求方式。

## 4.什么是API
API可以简单的理解为后端提供给前端调用的接口。
前端通过发送指令给后端，后端接收指令并处理，然后返回结果给前端。这个调用的窗口就叫做API。

- **你（顾客）**：你拿出手机打开饭馆的点餐应用，想点几道菜。
- **API（服务员）**：饭馆提供了一个点餐 API，顾客通过这个 API 提交订单。
- **饭馆（服务器）**：饭馆接受请求（API 调用），根据顾客的需求提供相应的服务（点餐、准备菜肴等）。

**GET 请求** 让你获取数据（菜单），**POST 请求** 让你提交数据（点餐），而 API 就是你与饭馆（服务器）之间进行所有这些操作的桥梁。

> API本质就是一个函数，这个函数可以接收前端发送的指令，处理后返回结果。
> API负责处理前端的GET请求和POST请求。
> API全称是Application Programming Interface，翻译过来就是应用程序编程接口。

# 什么是Flask
Flask是一个Python的后端框架
> 所谓的框架就是别人已经写好的库，我们只需要调用它就可以实现一些功能。

## 安装Flask
```bash
pip install flask
```

## 创建Flask项目
后端
```python
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/sayhello")
def hello_world():
    return "Hello, World!"

app.run(port=5000)
```
> 我们可以看到在Flask中创建API需要我们的一行代码：
> 使用@app.route("/sayhello")来定义一个API，这个API的URL是/sayhello

前端
```vue
<template>
  <div v-if="flag">
    NOW Flag is true
    <p>{{ temp }}</p>
  </div>
  <div v-else>
    NOW Flag is false
    <button @click="sayHello">Click</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const flag = ref(false);
const temp = ref("");
const URL = "http://127.0.0.1:5000";
async function sayHello() {
  const response = await axios.get(URL + "/sayhello");
  temp.value = response.data;
  flag.value = true;
}
</script>
```

> 这里用到了axios库，这个库是用来发送GET POST请求的。
>  {{ temp }} 是Vue中的模板语法，用来显示变量的值。
> async是异步的意思，我们之后会详细讲解，有兴趣的同学可以提前了解一下。

## 项目实战
我们需要获取最近的比赛信息，而且有个条件，我们只需要获取洛谷的比赛信息
```python
from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/getRecentContest")
def getRecentContest():
    response = requests.get("https://contests.sdutacm.cn/contests.json")
    contests = response.json()

    realContests = []
    for contest in contests:
        if contest["source"] == "洛谷":
            realContests.append(contest)
    return jsonify(realContests)

app.run(port=5000)
```

```vue
<template>
  <div>
     <div v-for="item in temp" :key="item.id">
        <p>{{ item.source }}</p>
        <p>{{ item.name }}</p>
        <p>{{ item.start_time }}</p>
        <p>{{ item.end_time }}</p>
     </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const temp = ref([])
const URL = "http://127.0.0.1:5000/getRecentContest";
async function getRecentContest() {
    const response = await axios.get(URL);
    temp.value = response.data;
}

onMounted(() => {
    getRecentContest();
})
</script>
```
这样我们就可以获取洛谷的比赛信息了。

# 课后巩固
## 什么是异步
异步就是指在执行某个操作时，不会阻塞当前线程，可以继续执行其他操作。
```python
def task1():
    print("task1 start")
    print("task1 done")

def task2():
    print("task2 start")
    print("task2 done")

def main():
    task1()
    task2()

main()
```
```bash
task1 start
task1 done
task2 start
task2 done
```
我们发现task1和task2是顺序执行的，也就是说task1执行完之后，task2才会执行。


```python
async def task1():
    print("task1 start")
    await asyncio.sleep(1)
    print("task1 done")

async def task2():
    print("task2 start")
    await asyncio.sleep(1)
    print("task2 done")

async def main():
    await task1()
    await task2()

asyncio.run(main())
```
```
task1 start
task2 start
task1 done
task2 done
```
我们发现task1和task2是同时执行的，也就是说task1执行到await asyncio.sleep(1)时，task2也开始执行。

这样的好处是提高了程序的执行效率，当我们要处理的任务很多时，不能只等待一个任务完成，然后再执行下一个任务，而是可以同时执行多个任务。
比如说执行100个任务，如果按照顺序执行，那么需要100秒，如果同时执行，那么只需要1秒。

## 浅提一下对象
在刚刚的代码中，我们定义了response = await axios.get(URL)，这里的response就是一个对象。
我们axios.get(URL)返回的就是一个对象，这个对象有很多属性和方法，都是放在Json中的。而它有个固定属性叫做data，可以用来获取对象中的数据。
同样的，前端的response也有个固定属性叫做value,可以用来获取对象中的数据。

这里只给大家提一嘴对象，让大家对对象有个初步的了解，具体的可以去网上查查资料。

## app=Flask(__name__)
app=Flask(__name__)是Flask框架的固定写法，__name__是Python中的一个内置变量，它代表当前模块的名称。
这样做的目的是为了方便Flask框架找到当前模块的名称，从而找到当前模块的静态文件和模板文件。

## @app.route("/sayhello")
@的意思是装饰器，装饰器是Python中的一个概念，它可以在不修改函数代码的情况下，给函数添加一些额外的功能。
这里我们使用app.route装饰器来定义一个API，这个API的URL是/sayhello。
route是Flask框架中的一个装饰器，它用来定义一个API，这个API的URL是/sayhello。
methods是route装饰器的参数，它用来指定这个API支持的请求方式，这里我们指定支持GET和POST请求。

## 列表特有的for循环
在刚刚的代码中，我们用的是普通的for循环，其实列表还有个特有的for循环，叫做列表推导式。
```python
realContests = [contest for contest in contests if contest["source"] == "洛谷"]
```
## 学会使用API文档
我们通常写API时，需要给前端提供API文档，API文档通常是放在后端的README.md文件中。
这样前端才能知道后端有哪些API，每个API的URL是什么，每个API支持哪些请求方式，每个API的参数是什么，每个API的返回值是什么。
比如我们刚刚写的API，就可以这样写：
```markdown
# API文档
## 获取最近的比赛信息
### URL: /getRecentContest
### 请求方式: GET
### 参数: 无
### 返回值: 比赛信息列表(List)
```
其中参数和返回值都是可选的，根据实际情况填写，可以是String，也可以是List，也可以是Dict等等。

## 调试API

可以去网上了解调试工具——APIFOX

https://apifox.com/

## CORS跨域问题
CORS是跨域资源共享（Cross-Origin Resource Sharing）的缩写。
跨域问题通常发生在前后端不在同一台服务器上时，比如前端在localhost:8080，后端在localhost:5000，那么前端发送请求时，就会产生跨域问题。
我们在Flask中使用Flask-CORS来解决跨域问题。

# 课后作业
将之前做的二面大作业迁移到Vue中，并且使用Flask作为后端，写一个注册登录功能。
要求:
1. 注册登录功能需要使用Flask作为后端，并且使用Json格式来存储用户信息。
2. 需要写API文档，供前端调用API。
3. 提交作业时，需要提交README.md文件，API文档需要放在README.md文件中。前端需要（npm run build）打包，后端只需要将代码打包。
