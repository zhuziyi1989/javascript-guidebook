---
nav:
  title: 基本语法
  order: 1
group:
  title: 运算符
  order: 5
title: 更新表达式
order: 8
---

# 更新表达式

更新表达式包括**前自增/自减运算符**和**后自增/自减运算符**。

🌰 **示例：**

**前自增：先自增，再赋值**

```js
let foo = 10;

// 前自增
const a = ++foo;

console.log(a);
// 11
console.log(foo);
//
```

**前自减：先自减，再赋值**

```js
let foo = 10;

// 前自减
const b = --foo;

console.log(b);
// 9
console.log(foo);
// 9
```

**后自增：先赋值，再自增**

```js
let foo = 10;

// 后自增
const c = foo++;

console.log(b);
// 10
console.log(foo);
// 11
```

**后自减：先赋值，再自减**

```js
let foo = 10;

// 后自减
const d = foo--;

console.log(d);
// 10
console.log(foo);
// 9
```

前自增/前自减与后自增/后自减的异同点：

- **相同点**：无论是前自增/前自减还是后自增/后自减，对于变量而言，没有区别，都是自身`+1`/`-1`
- **不同点**：
  - 前自增/前自减：先自增/自减（变量自身），后赋值（将变量的值赋值给自增表达式的结果）
  - 后自增/后自减：先赋值，后自增/自减

> 为什么后自增后自减优先级很高却后操作？

前置操作返回加（减）1 的值，所以返回对象本身，这是左值（`++i`，先自增后操作）

后置操作为右值，同样对其操作数 `+1`/`-1`，但操作后产生操作数原来的、未修改的值为表达式的结果（可理解为 `i++` 为先操作，后自增）。实际上，由于后自增（减）优先级很高，因此会先自增（减），但在自增（减）前会创建一个副本，用来保存操作数原来的值，操作后会返回副本的值给表达式。

建议：只有在必要时才使用后置操作符，尽量使用前置操作符。因为前置操作需要做的工作更少，而后置操作必须先保存操作数原来的值，对于 int 型对象和指针，编译器会优化掉这项额外的工作，但对于更多复杂的迭代器类型，这种额外的工作可能会花费更大的代价。