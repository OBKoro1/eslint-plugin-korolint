# eslint-plugin-korolint

ESLint插件，定制ESLint`rule`，有好的`idea`欢迎提`issue`。

### 学习ESLint插件开发

[手摸手教你写个ESLint 插件以及了解ESLint的运行原理](http://obkoro1.com/web_accumulate/accumulate/tool/ESLint%E6%8F%92%E4%BB%B6.html)

### 安装包

安装`eslint`:

```
$ npm i eslint -D
```

安装`eslint-plugin-korolint`

```
$ npm install eslint-plugin-korolint -D
```

## 配置

将插件添加到`.eslintrc`文件的`plugins`中：

### 继承插件配置

在插件中会将所有规则都导出，然后可以使用`extends`来继承插件的配置。

PS: 不止这种继承方式，即使你传入一个对象，一个文件，eslint也能继承其中的配置。

```js
// .eslintrc.js
module.exports = {
  extends: [ 'plugin:korolint/koroRule' ] // 继承插件导出的配置
}
```

### 引入插件一条条写入规则


```js
// .eslintrc.js
module.exports = {
  plugins: [ 'korolint' ],
  rules: { 
    "korolint/settimeout-no-number": "error"
    // 更多插件规则
 }
}
`
```

## 提供的规则

* settimeout-no-number: 禁止`setTimeout`的第二个参数是数字





