---
title: 快速上手
---

# 快速上手

设置全局的盒模型： `*,*::before,*::after{border-sizing: border-box;}`

### 按需引入
```
import 'zl-vue-wheel-1/dist/index.css'
//建议按需引入
import {ButtonGroup,Button,Icon} from 'zl-vue-wheel-1'

export default {
  ...
  components:{
    'g-button': Button,
    ...
  }
}
```
