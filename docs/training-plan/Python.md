# 第十二周培训：Python 配置及基础

by 赵盛宇
> [!WARNING]
> 请注意：文档我会尽量写详细一些，如果你没有相关基础，可能会觉得晦涩难懂，但是我们希望你能够耐心去查阅你不懂的知识，在这里篇幅受限制，我只作简单的框架描述，如果你有任何不懂的问题，可以直接询问我

## Anaconda

Anaconda 是一个开源的 Python 和 R 编程语言的发行版，主要用于数据科学、机器学习、深度学习和大数据处理的环境。通俗地讲，Anaconda 就像是一个**“工具箱”**，里面装满了各种用来做数据分析、机器学习和开发的工具，让我们可以更方便地安装和管理这些工具。

### Anaconda 的几个关键点：

1. **集成了很多常用的工具和库**：安装 Anaconda 后，你就不需要一个一个去下载安装那些常用的 Python 库了（比如 NumPy、Pandas、TensorFlow、Scikit-Learn 等），因为 Anaconda 已经帮你打包好了。这就像买了一个套装工具箱，里面螺丝刀、扳手什么的全都有，不用自己去凑。

2. **带有 Conda 包管理器**：Conda 是 Anaconda 自带的包管理器和环境管理器，可以用它来轻松安装、更新和卸载各种 Python 库和工具。此外，它还可以创建“虚拟环境”，也就是让你在同一台电脑上同时使用不同版本的 Python 和库，这对于避免版本冲突特别有用。

3. **Jupyter Notebook**：Anaconda 还集成了 Jupyter Notebook，这是一个很受欢迎的工具，用来写 Python 代码、进行数据分析和展示结果。它就像一个“代码本”，可以一边写代码一边看结果，特别方便学习和做数据科学实验。

4. **跨平台支持**：Anaconda 支持 Windows、macOS 和 Linux 系统，所以无论你用的是什么操作系统，都可以用 Anaconda 来做数据科学。

### 为什么要用 Anaconda？

如果你是做数据分析、机器学习或者是深度学习的新手，Anaconda 可以帮你省去很多麻烦。它提供了一站式的工具管理和环境配置，减少了安装和设置的复杂度，让你更快地开始编程和实验

Anaconda 就是一个“全家桶”，让你在做数据科学和机器学习的时候不用东拼西凑各种工具，而且它还帮你把环境和工具管理这件事变得更简单。所以，如果你对数据科学感兴趣，不妨试试 Anaconda，它能让你的学习和开发过程轻松不少。

### 如果你是第一次使用 Py 语言

你只需要了解，安装 conda 是你学习 py 的一个前置条件

### 如果你有一些代码基础，让我来向你解释为什么要这样做

1. 首先是 pip 和 conda 的选择，因为 conda 已经集成了很多功能，所以新手用起来相对哦方便一些，比如虚拟环境管理等，如果你习惯使用 pip，也是没有问题的，我在这里贴心给几条建议，

   **`pip`**：适合纯 Python 项目，尤其是那些从 PyPI 安装即可满足需求的情况。由于 PyPI 上的软件包更为丰富，所以 `pip` 适用于开发者需要一些 `conda` 仓库中没有的库时。

   **`conda`**：适合需要使用多种编程语言，或者依赖较多的科学计算包（如 NumPy、SciPy、Pandas 等）的项目。`conda` 提供了一站式的包管理和环境管理，非常适合数据科学和机器学习应用。

   问：_使用 conda 的同时可以使用 pip 吗？_

   答：是的，可以在使用 `conda` 的同时使用 `pip`，两者可以结合起来使用。不过，在混合使用时需要注意一些细节，以避免潜在的包冲突或环境管理问题。并且，你要**优先使用 `conda` 安装包**：如果一个包既可以通过 `conda` 安装，也可以通过 `pip` 安装，建议优先使用 `conda`。这是因为 `conda` 安装的包会自动处理所有依赖，并且这些包通常是预编译好的二进制文件，更容易兼容。**`pip` 安装会影响依赖关系**：当你用 `pip` 安装包时，它不会检查是否会影响到 `conda` 的依赖树。这意味着如果 `pip` 安装的包有和已安装的 `conda` 包冲突的依赖，可能会导致环境中的包不稳定。所以，尽量避免在一个环境中频繁切换使用 `conda` 和 `pip`。**安装顺序**：如果需要混合使用，建议先用 `conda` 安装包，然后再使用 `pip`。`pip` 安装时会在当前环境中记录已安装的包信息，并有可能覆盖一些依赖。正确的顺序如下：

   1. 先用 `conda` 安装尽可能多的包。
   2. 然后用 `pip` 安装 `conda` 中无法找到的包。

2. 如果你觉得 conda 在 Django 开发中过于臃肿，你可以放弃使用 conda，而仅仅使用 pip，这都是没有问题的

### 安装

我会现场演示，https://www.anaconda.com/download为下载地址

网速不够快可以下载群文件

## Py 的基础

Python 是一种简单易学的编程语言，尤其适合入门学习。通过讲解 Python 基础语法（变量、条件判断、循环等），可以逐步感受到编程的思维方式。我们可以结合之前学过的 JavaScript 来比较，这样有助于理解。

### 1. **变量**

变量是用来存储数据的地方，就像存放数据的“盒子”。在 Python 中，定义变量时不需要特别声明数据类型，直接赋值即可：

```python
# Python 变量
name = "Alice"
age = 25
```

相对于 JavaScript，需要使用 `var`、`let` 或 `const` 来声明变量，而 Python 更加简洁：

```javascript
// JavaScript 变量
let name = "Alice"
let age = 25
```

Python 直接使用等号赋值，可以简化代码写法，同时变量类型会根据赋值自动推断。

> 注意 ⚠️：
>
> Python 是**强类型**语言，而 JavaScript 是**弱类型**语言。这两个概念影响着我们如何处理变量和数据类型。用通俗的话来解释一下：
>
> ### 1. **什么是强类型和弱类型？**
>
> - **强类型**语言（Python）：变量的数据类型是固定的，不能轻易改变。比如，如果一个变量是整数类型，你不能把它当作字符串来用，或者和字符串直接相加。如果尝试这样做，程序会报错。
>
> - **弱类型**语言（JavaScript）：变量的数据类型是可以灵活变化的。你可以把一个数字和字符串相加，JavaScript 会尝试自动转换数据类型以使操作成功，即使这可能会导致一些奇怪的结果。
>
> ### 2. **通俗解释强类型（Python）**
>
> 在 Python 中，类型就像是“管控很严的保安”。你告诉它一个变量是什么类型，它就会严格地要求你按这个类型来使用：
>
> ```python
> # Python 示例
> number = 10       # 这是一个整数
> text = "Hello"    # 这是一个字符串
>
> # 下面这行会报错，因为不能把整数和字符串相加
> result = number + text
> ```
>
> 这里 Python 不允许把不同类型的数据随便混合，必须先转换类型，比如使用 `str()` 把整数转换成字符串，再做连接操作。
>
> ### 3. **通俗解释弱类型（JavaScript）**
>
> 在 JavaScript 中，类型就像是“随和的保安”。你可以告诉它一个变量是数字，然后马上让它变成字符串，JavaScript 会试着帮你搞定：
>
> ```javascript
> // JavaScript 示例
> let number = 10 // 这是一个数字
> let text = "Hello" // 这是一个字符串
>
> // 这个操作不会报错，结果是 "10Hello"
> let result = number + text
> ```
>
> JavaScript 会把 `number` 自动转换成字符串，然后进行拼接。这种灵活性有时很方便，但也可能引发意想不到的问题。
>
> ### 4. **区别总结**
>
> - **Python 的强类型**：更安全，防止意外的类型转换，能强制开发者明确地处理数据类型。
> - **JavaScript 的弱类型**：更灵活，但有时可能导致难以发现的错误，尤其是在隐式类型转换时。
>
> ### 5. **举个生活中的例子**
>
> - **强类型（Python）**：就像严格的规定“叉子只能用来叉食物，不能用来喝汤”，任何违背这个规则的操作都不被允许。
> - **弱类型（JavaScript）**：则像是一个“万能餐具”，可以用来叉食物，也可以用来喝汤——只要你觉得能用，它都能配合，但有时候效果可能会很奇怪。
>
> Python 的强类型特性更适合编写需要高可靠性的程序，而 JavaScript 的弱类型特性更适合快速开发和原型制作。

### 2. **条件判断（if 语句）**

条件判断用来做“如果…那么…”的逻辑，类似于生活中的决策过程。在 Python 中，可以使用 `if`、`elif` 和 `else` 来处理多种情况：

```python
# Python 条件判断
if age >= 18:
    print("You are an adult.")
elif age < 12:
    print("You are a child.")
else:
    print("You are a teenager.")
```

要注意的是，py 可以使用 and or

#### 1.使用 `and`（与）

当使用 `and` 时，所有条件都必须为 `True`，整个表达式才会为 `True`。

```python
# 示例：if 语句中的 and
age = 25
is_student = True

if age > 18 and is_student:
    print("You are an adult student.")
else:
    print("Condition not met.")
```

在这个例子中，只有当 `age` 大于 18 且 `is_student` 为 `True` 时，才会执行 `print("You are an adult student.")`。

#### 2. 使用 `or`（或）

当使用 `or` 时，只要有一个条件为 `True`，整个表达式就会为 `True`。

```python
# 示例：if 语句中的 or
age = 16
is_student = False

if age < 18 or is_student:
    print("You are either under 18 or a student.")
else:
    print("Condition not met.")
```

在这个例子中，只要 `age` 小于 18 或者 `is_student` 为 `True`，就会执行 `print("You are either under 18 or a student.")`。

#### 3. 结合 `and` 和 `or`

可以同时使用 `and` 和 `or`，在复杂条件时加上括号来明确优先级。

```python

# 示例：结合 and 和 or
age = 20
is_student = False
has_membership = True

if (age > 18 and is_student) or has_membership:
    print("Eligible for discount.")
else:
    print("Not eligible for discount.")
```

这里的逻辑是：如果年龄大于 18 且是学生，或者有会员资格，那么就符合条件。

###

JavaScript 中的 `if` 结构非常相似：

```javascript
// JavaScript 条件判断
if (age >= 18) {
  console.log("You are an adult.")
} else if (age < 12) {
  console.log("You are a child.")
} else {
  console.log("You are a teenager.")
}
```

Python 的缩进（缩进 4 个空格）是语法的一部分，用于表示代码块，而 JavaScript 使用花括号 `{}` 来标记。

### 3. **循环（for 和 while）**

编程中经常需要重复执行一些操作，循环语句可以简化这种重复任务。

#### **for 循环**

在 Python 中，`for` 循环可以遍历序列（如列表、字符串）：

```python
# Python for 循环
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

在 JavaScript 中，`for` 循环更像传统的循环控制（通过计数器）：

```javascript
// JavaScript for 循环
let fruits = ["apple", "banana", "cherry"]
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
```

Python 的 `for` 循环简洁直观，直接操作元素，而不是通过索引来访问。

#### **while 循环**

`while` 循环在条件为真时持续执行，可以用于重复某个动作直到条件改变：

```python
# Python while 循环
count = 0
while count < 5:
    print("Count is:", count)
    count += 1
```

在 JavaScript 中：

```javascript
// JavaScript while 循环
let count = 0
while (count < 5) {
  console.log("Count is:", count)
  count++
}
```

两者的 `while` 结构基本一致，但 Python 的语法更简洁，减少了使用花括号的繁琐。

### 4. **编程的思维方式**

- **抽象思维**：将复杂的问题分解成多个简单的步骤（比如使用变量来存储数据，通过条件判断来做决策）。
- **流程控制**：通过条件和循环让程序能够灵活响应不同情况，而不是一成不变。
- **自动化**：编程就是用计算机自动化地完成重复的任务，从简单的打印输出，到复杂的数据处理。

通过 Python 和 JavaScript 的对比，可以更好地理解编程中的基础概念。编程不仅是学会语法，更重要的是掌握如何解决问题的思维方式。

## py 进阶

仅仅会最基础的语法当然不能够胜任任何开发

Python 的进阶知识涵盖了许多高级特性和编程概念，可以帮助你更深入地理解和使用这门语言。以下是一些重要的进阶主题：

### 1. **面向对象编程（OOP）**

- **类和对象**：使用类来定义数据结构和行为，通过对象实例化类。
- **继承**：允许一个类继承另一个类的属性和方法，以实现代码重用。
- **多态**：允许不同类的对象以相同的方式进行操作，通常通过方法重写实现。
- **封装**：限制对对象内部状态的直接访问，使用 getter 和 setter 方法。

```python
class Animal:
    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

# 使用
dog = Dog()
cat = Cat()
print(dog.speak())  # Woof!
print(cat.speak())  # Meow!
```

### 2. **装饰器（Decorators）**

装饰器是用于在不改变函数代码的前提下，添加额外功能的工具。它们常用于日志记录、权限检查、性能监控等。

```python
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
```

### 3. **生成器（Generators）**

生成器是一种特殊类型的迭代器，可以用 `yield` 关键字来生成值。它们在每次调用时都会保存当前状态，适合处理大数据集或无限序列。

```python
def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

for number in count_up_to(5):
    print(number)
```

### 4. **上下文管理器（Context Managers）**

上下文管理器用于简化资源管理，确保资源在使用后被正确释放，通常使用 `with` 语句实现。

```python
with open("file.txt", "r") as file:
    data = file.read()
# 不需要显式关闭文件，Python 会自动处理
```

### 5. **异常处理（Exception Handling）**

使用 `try`、`except` 块来捕捉和处理异常，确保程序的健壮性。

```python
try:
    value = int(input("Enter a number: "))
    print(10 / value)
except ValueError:
    print("Invalid input, please enter a number.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
```

### 6. **模块和包**

- **模块**：Python 文件包含 Python 代码，使用 `import` 语句导入其他模块。
- **包**：包含多个模块的目录，通常有一个 `__init__.py` 文件。

### 7. **列表推导式（List Comprehensions）**

使用更简洁的方式生成列表。

```python
squares = [x**2 for x in range(10)]  # 生成 0 到 9 的平方数
```

### 8. **Lambda 函数**

无名函数，用于快速定义简单的函数。

```python
add = lambda x, y: x + y
print(add(2, 3))  # 5
```

### 9. **正则表达式（Regular Expressions）**

用于字符串匹配和操作的强大工具，可以使用 `re` 模块。

```python
import re

pattern = r'\d+'  # 匹配数字
result = re.findall(pattern, "There are 2 apples and 3 bananas.")
print(result)  # ['2', '3']
```

### 10. **异步编程（Asyncio）**

用于处理并发任务的库，适合 I/O 密集型任务。

```python
import asyncio

async def main():
    print("Hello")
    await asyncio.sleep(1)
    print("World")

asyncio.run(main())
```

### 11. **数据类（Data Classes）**

使用 `dataclasses` 模块，可以更方便地创建存储数据的类。

```python
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

point = Point(1, 2)
print(point)  # Point(x=1, y=2)
```

这些进阶知识将帮助你更深入地理解 Python，提高编程能力和解决问题的能力。
