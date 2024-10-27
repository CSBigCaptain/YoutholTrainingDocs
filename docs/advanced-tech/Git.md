# Git 教学

## 写在前面

- 本文存在大量示范命令，请根据自己的实际情况修改后执行那些命令。
- 在阅读之前，需要了解一些前置的概念，因为本文不会提及详细的步骤，比如文件/目录的概念、终端(Terminal)的基本操作。
- 由于众所周知的原因，Github在国内的可访问性随机，需要一些手段，本文不提供。

## 简介

- Git是由Linux之父Linus为了帮助管理Linux内核开发而开发的版本控制软件。
- 与之类似的软件还有SVN，Git与其有很大不同。
- 需要注意的是Git和Github的关系，Git是一个管理代码的软件，Github是一个代码托管平台，提供Git服务，并不像看起来一样有隶属的关系。

    -代码托管平台不止有Github，还有Gitee和Gitlab，你甚至还可以搭建自己的。

## 安装

- 如果你使用Linux，那么使用你的发行版所带的包管理器就可以非常方便地安装上，例：
```bash
sudo pacman -S git #For ArchLinux
```

- 如果你使用Windows，请前往`https://git-scm.com/downloads`
具体教程参见：`https://blog.csdn.net/qq_41918107/article/details/137904621`
    - 这其中有很多东西不需要弄明白，跟着教程做起来就可以。

另外的，你可以使用Git Desktop，提供了一个Git的图形界面，不需要使用命令行即可操作，下载页面在`https://git-scm.com/downloads/guis`

但是我强烈不推荐使用，不要惧怕命令行，之后你会经常遇到它。

本文仅以命令行Git为示范。

## 基本概念

- 仓库：repository，或者简写为repo，仓库即为你存放项目代码的地方。
    - 仓库分为本地仓库和远程仓库，顾名思义，不在本地的就是远程仓库，一般我们在本地仓库完成修改，再提交到远程仓库。
- 分支：branch，你的代码也许需要加一个改动，但是你并不确定这个新的改动是否合适，拿就创建一个新的分支，不用担心原始代码会被修改，如果你满意新改动的效果，可以在之后将分支合并入主分支。
- 暂存区：index，临时保存你所做的改动。

## 工作流程

### 简明
来到你想要存放你的程序代码文件的地方，执行：
```bash
git init
```
这时候Git就在此目录初始化了一个仓库，如果你执行：
```bash
ls -a #For Linux
```
就可以看到一个名为`.git`的文件夹，不要动里面的东西，这里面的东西由git管理。我们可以在里面写代码了。

我们也可以选择站在巨人的肩膀上，指克隆其他人的代码到本地，进行我们想要的修改，执行：(如果你要克隆其他人的代码，上面初始化仓库的命令是不需要执行的)
```bash
git clone https://github.com/username/repo.git
cd repo
```
我们克隆了位于github上的username/repo这个仓库，这个仓库是虚构的，仅用作例子。

然后进入我们刚刚克隆到本地的仓库。

前略后略，你对仓库中的文件进行了修改，比如你修改了`filename`这个文件，你对你的改动非常满意，所以你想要将代码提交到远程仓库，怎么办呢？

在提交到远程仓库之前，你需要将代码首先提交到本地仓库，执行：
```bash
git add filename
```
这一步将你修改的文件添加到了index(暂存区)，将用于提交。

或者，你可以选择把所有文件都添加进去，执行：
```bash
git add .
```
添加到index后，执行：
```bash
git commit -m 'info'
```
> [!WARNING]
> 请注意，在Windows系统中提交说明应使用双引号`""`

info是提交说明，在团队协作的时候你最好遵守一定的规范，但如果是你私人的项目，那其实随你喜欢。

这一步会把我们的修改提交到本地仓库，最后这一步会把修改提交到远程仓库。
```bash
git push origin master
```
是不是疑惑？`origin`是什么？`master`是什么？还记得我们上面提到的分支的概念吗？`origin`是远程仓库分支的名字，`master`是本地仓库分支的名字，你应该把你做了修改的分支提交到远程分支，分支的名字并不是严格的。

查看本地分支的，执行：
```bash
git branch
```
这会列出本地仓库中的分支的名字，
```bash
git branch -r
```
这会列出远程仓库的分支的名字（`r`即`remote`），
```bash
git branch -a
```
这会列出所有分支的名字（`a`即`all`），包括本地仓库的和远程仓库的。

成功的话，去托管网站看看你的代码是不是已经被提交了？恭喜。


### 分支操作

你有个新的idea，需要对代码进行修改，但你不确定你的修改会不会达到你期待的效果，为了保护原始代码，可以创建一个新的分支，执行：
```bash
git checkout -b new-feature
```
如果你要切换回分支，执行：
```bash
git checkout master
```
这里假设你的主分支名为`master`，如果你想要切换到`new-feature`，那么把上面的`master`换成`new-feature`即可，很方便吧？

这里我创建了一个名为`new-feature`的分支，并切换到这个分支，然后我进行了修改，假设我对后效比较满意，我可以选择把这个分支合并入主分支。

我们先将其提交到本地仓库的`new-feature`分支，执行：
```bash
git add .
git commit -m 'new feature'
```
然后，切换到主分支，执行：
```bash
git checkout master
```
然后，合并`new-feature`分支到主分支，执行：
```bash
git merge new-feature
```
如果成功的话，恭喜，新的修改已经成功添加了。

已经合并的`new-feature`分支也不会自动删除，除非你手动删除，否则会一直保存在你的本地仓库中，执行：
```bash
git branch -d new-feature #删除已经合并的分支
```

但如果你并不满意`new-feature`这个修改，你可以直接删除这个分支，并不会影响你的原始代码，放心，他们被git保护得很安全。
```bash
git branch -D new-feature #强制删除未合并的分支
```
这样就可以了。

### 远程仓库管理

添加远程仓库，执行：
```bash
git remote add origin remote-address
```
`origin`是你为你这个远程仓库起的名字，随你喜欢，一般是`origin`。

`remote-address`是你远程仓库的地址（也称为上游upstream），对于Github，有两种地址可选，SSH和HTTPS，但后者因为安全性Github不允许其进行身份验证，只能用于拉取公开（public）的仓库。

删除远程仓库，执行：
```bash
git remote rm origin
```
`origin`是你远程仓库的名字，这只是在本地删除了与这个远程仓库的关联而已，不用担心远程仓库会受到影响。

修改远程仓库，执行：
```bash
git remote set-url --push origin newURL
```
你可以用上面的命令修改`origin`的url。

### 小技巧
1. 当我们执行：
    ```bash
    git push origin master
    ```
    的时候，我们可以加入`-u`参数，例如：
    ```bash
    git push -u origin master
    ```
    可以把`origin`这个远程仓库设置为`master`的默认上游，这样如果你只是要将本地的`master`提交到远程的话，直接简略执行：
    ```bash
    git push
    ```
    即可，非常方便吧？

### 文件管理

取消跟踪文件
```bash
git rm --cached filename
```
取消跟踪`filename`这个文件并提交，在下一次push后，远程仓库就会移除这个文件了。