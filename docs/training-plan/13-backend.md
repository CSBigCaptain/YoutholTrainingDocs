# Flask and Django



## 一个小Demo

```html
<template>
    <div>
        <div v-for="item in aLotOfData">
            <p>{{ item.source }}</p>
            <p>{{ item.name }}</p>
            <p>{{ item.link }}</p>
            <p>{{ item.contest_id }}</p>
            <p>{{ item.start_time }}</p>
            <p>{{ item.end_time }}</p>
        </div>
    </div>
</template>
<script>
const aLotOfData = [
  {
    "source": "CodeChef",
    "name": "Past INOI Problems",
    "link": "https://www.codechef.com/INOIPRAC",
    "contest_id": "INOIPRAC",
    "start_time": "2023-12-31T18:30:00+00:00",
    "end_time": "2025-05-14T18:30:00+00:00",
    "hash": "4f6b9828ebffc600396e5a0b380e9cf7d2ebc010"
  },
    // ...
]

const userInformation = [
    {
        "name": "张三",
        "password": "123456",
        "age": 20,
        "gender": "男",
        "email": "zhangsan@example.com",
    },
    // ...
]
</script>
```

当我们需要`处理`大量数据时，这些数据通常需要经过复杂的代码处理（例如账号的注册、登录、注销、修改密码等）才能生成，因此我们不可能每次都在html中手动编写`aLotOfData`和`userInformation`。

这时后端的作用就显现出来了：
- 后端负责`处理`数据，包括数据的存储、处理和业务逻辑等。

- 前端则主要负责`展示`数据和与用户的交互。

  

## 改进后的代码
> 先以Flask为例，我们需要获取洛谷的竞赛数据
### 后端部分
```python
from flask import Flask, jsonify
import requests

app = Flask(__name__)

# 不用管，这里后面会讲
####################
response = requests.get('https://contests.sdutacm.cn/contests.json')
aLotOfData = response.json()
####################
jsonData = []
for tempValue in aLotOfData:
    if tempValue['source'] == '洛谷':
        jsonData.append(tempValue)

@app.route('/api/data')
def get_data():
    return jsonify(jsonData)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
```


<hr>

```python
@app.route('/api/data')
```
> 这里创建了一个API`/api/data`
```python
return jsonify(jsonData)
```
> 这里将`jsonData`作为数据返回给API



### 前端部分

```html
<template>
    <div>
        <div v-for="item in userData">
            <p>{{ item.source }}</p>
            <p>{{ item.name }}</p>
            <p>{{ item.link }}</p>
            <p>{{ item.contest_id }}</p>
            <p>{{ item.start_time }}</p>
            <p>{{ item.end_time }}</p>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const userData = ref();
const API_URL = 'http://127.0.0.1:5000/api/data';

onMounted(async () => {
    const response = await axios.get(API_URL); /* 通过GET请求获取数据 */
    userData.value = response.data; /* 将数据赋值给userData */
});
</script>
```

<hr>

```javascript
const response = await axios.get(API_URL);
```
后端先通过API`API_URL`提供数据
然后前端通过请求方法`GET`获取数据

最后将获取到的数据赋值给`response`。

<hr>

```javascript
userData.value = response.data;
```

后端传的数据格式
```json
 {
    "source": "洛谷",
    "name": "CSP-J 2024 自测",
    "link": "https://www.luogu.org/contest/209924",
    "contest_id": "209924",
    "start_time": "2024-10-26T04:30:00+00:00",
    "end_time": "2024-11-09T06:00:00+00:00",
    "hash": "e769e1752e4ff4e579d06d707a4bd83af0c1d25a"
  },
```

> data中包含了source、name、link、contest_id、start_time、end_time、hash等所有从后端获取的数据。
>> 在 JavaScript 中，data 通常是一个对象，用于存储从后端获取的数据。

>value中存储着从data中获取到的全部数据
>>在 Vue 3 中，ref 是一个用于创建响应式数据的函数。ref 返回一个对象，这个对象有一个 value 属性，存储着实际的数据。