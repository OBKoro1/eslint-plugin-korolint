# setTimeout 第二个参数禁止是数字 (settimeout-no-number)

setTimeout 的第二个参数，如果是数字的话，很容易就成为魔鬼数字，没有人知道为什么是这个数字, 以及这个数字有什么含义。

### 判定条件

`setTimeout`的第二个参数如果是数字就报错！

### 错误示例

```js
setTimeout(() => {
  console.log(11);
}, 1000);
```

```js
setTimeout(function() {
  console.log(11);
}, 1000);
```

```js
setTimeout(test, 1000);
```

### 正确示例

```js
setTimeout(() => {
  console.log(11);
}, someNumber);
```

```js
setTimeout(function() {
  console.log(11);
}, someNumber);
```

```js
setTimeout(test, someNumber);
```

### 修复

插件提供了自动修复功能，在检测出错误代码之后，会自动修复，如下：

```js
// 修复前
setTimeout(() => {

}, 1000)
// 修复后 变量名故意写错,为了让用户去修改它
const countNumber1 = 1000
setTimeout(() => {

}, countNumber2)
```