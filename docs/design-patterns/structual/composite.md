---
nav:
  title: 设计模式
  order: 10
group:
  title: 结构型
  order: 3
title: 组合模式
order: 6
---

# 组合模式

**组合模式**（Composite）通常用于将对象组合成树形结构以表示“部分-整体”的层次结构，组合模式使得用户对单个对象和组合对象的使用具有一致性。

**基本结构**

组合模式主要有三种角色：

- 抽象组件（Component）：抽象类，主要定义了参与组合的对象的公共接口
- 子对象（Leaf）：组成组合对象的最基本对象
- 组合对象（Composite）：由子对象组合起来的复杂对象

理解组合模式的关键是要理解组合模式对单个对象和组合对象使用的一致性。
