# vue-wheel-zl   一个vue的轮子仓库
[![Build Status](https://travis-ci.org/xiaohuaye/vue-wheel-zl.svg?branch=master)](https://travis-ci.org/xiaohuaye/vue-wheel-zl)

## 介绍
简单的vue UI框架

## 开始使用

1. 添加全局css

使用本框架时，需要
使用css 
```
*,*::before,*::after{border-sizing: border-box;}
:root {--button-height: 32px;--font-size: 14px;--button-background: white;--button-active-background: #eee;--border-radius: 4px;--color: #333;--border-color: #999;--border-color-hover: #666;}
```
兼容性 IE不支持

2. 安装
`npm i -S zl-vue-wheel-1`

3. 引入
```
import {ButtonGroup,Button,Icon} from 'zl-vue-wheel-1'
import 'zl-vue-wheel-1/dist/index.css' 

export default {
  ...
  components:{
    'g-button': Button,
    'g-icon': Icon,
    ...
  }
}

```

## 文档

## 提问

## 变更记录




