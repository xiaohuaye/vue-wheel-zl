<template>
  <div>
    <g-cascade :data-source="source"></g-cascade>
    <pre>
      <code>{{content}}</code>
    </pre>
    <div class="items">
      这是同步数据的写法，如果是异步请继续。同步的写法对数据格式有要求：
      <pre>
        <code>
          source: [
          {
            name: '浙江',
            children: [
              {
                name: '杭州',
                children: [
                  {
                    name: '上城',
                    children: [
                      {
                        name: '落雨街道',
                        children: [
                          {name: '分享小区'},
                          {name: '萨德小区'}
                        ]
                      },
                      {name: '太阳街道'}
                    ]
                  },
                  {name: '下城'},
                  {name: '江干'}
                ]
              },
              {
                name: '嘉兴',
                children: [
                  {name: '南湖区'},
                  {name: '秀洲区'}
                ]
              }
            ]
          },
          {
            name: '福建',
            children: [
              {
                name: '福州',
                children: [
                  {name: '鼓楼区'},
                  {name: '将台区'},
                  {name: '仓山区'}
                ]
              }
            ]
          },
          {
            name: '安徽',
            children: [
              {
                name: '合肥',
                children: [
                  {name: '瑶海'},
                  {name: '庐阳'}
                ]
              }
            ]
          },
        ]
        </code>
    </pre>
      1. source必须是数组，里面是对象；
      2. 对象内部必须有 <code>name</code> 和 <code>children</code>,而  <code>children</code>是数组，里面重复嵌套即可。
    </div>

    <div>
      <div class="items">
        <header>异步请求</header>
      </div>
      <g-cascade v-if="initSource" :data-source="initSource" :callback="callBack"></g-cascade>
      <pre>
        <code>{{content1}}</code>
      </pre>
      <div class="items">
        1. 初始化的数据如果不是一开始就写在data中，需要在挂载的时候再去请求，则需要加上 <code>v-if="initSource"</code>
        <br>
        2. initSource的初始化数据需要的格式还是数组，并且有<code>name</code>，<code>children</code>字段，<span style="color: red;">children为空数组</span>
        <pre>
          <code>
            eg:[{
              children: [],
              id: (...),
              k1: (...),
              k2: (...),
              k3: (...),
              k4: (...),
              k5: (...),
              k6: (...)
              k7: (...),
              name: (...),
              parent_id: (...)
            }]
          </code>
        </pre>
        <br>
        3. callBack是请求数据的函数，采用的是 <span style="color: red;">Promise</span> 的调用方法，请使用Promise的接口调用方式。
        4. callBack的返回的数据格式要求同initSource一致
        5. 关于参数，由于异步情况相对复杂，在点击事件里，将渲染此点击元素的对象作为callBack的参数。比如你点击北京，则将请求数据中
        关于北京这个对象的全部数据结构返回。使用时只需要在请求的方法参数中按顺序书写你要的对象的key。
        <pre>
          <code>
            eg：也就是当前例子的使用方式
            data () {
              return {
                source: null,
                callBack: function (obj) {
                  return ajax(obj.id)  //请求函数将返回一个promise
                },
              }
            }

            // 初始的数据需要第一次赋值，并且处理对象中没有children属性这种情况
            mounted () {
              ajax().then((res)=>{
                this.source= res.map((item)=>{
                  item.children = []
                  return item
                })
              })
          </code>
        </pre>
      </div>
    </div>

    <div>
      <div class="items">
        <header>清空</header>
      </div>
      <g-cascade v-if="initSource" clearable :data-source="initSource" :callback="callBack"></g-cascade>
      <div class="items">
        <pre>
          <code>{{content2}}</code>
        </pre>
      </div>
      <div class="items">
        添加 <code>clearable</code> 即可，这里组合使用了 <a href="/vue-wheel-zl/components/input.html">input</a> 的方式
      </div>
    </div>

    <div>
      <div class="items">
        <header>disabled</header>
      </div>
      <g-cascade v-if="initSource" :data-source="initSource" :callback="callBack" :itemDisabled="{key:'id',value:1}"></g-cascade>
      <div class="items">
        <pre>
          <code>{{content3}}</code>
        </pre>
      </div>
      <div class="items">
        <code>itemDisabled</code>传一个对象，把需要禁用的key和value传入，暂时不支持多条件禁用
      </div>
    </div>

  </div>
</template>

<script>
  import Cascade from '../../../src/cascade'
  import CascadeComplex from '../../../src/cascade-complex'
  import db from '../../../src/db'

  function ajax(parentId = 0) {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(db.filter((item) => item.parent_id === parentId))
      },300)
    })
  }

  export default {
    name: "cascade-demos",
    data() {
      return {
        source: [
          {
            name: '浙江',
            children: [
              {
                name: '杭州',
                children: [
                  {
                    name: '上城',
                    children: [
                      {
                        name: '落雨街道',
                        children: [
                          {name: '分享小区'},
                          {name: '萨德小区'}
                        ]
                      },
                      {name: '太阳街道'}
                    ]
                  },
                  {name: '下城'},
                  {name: '江干'}
                ]
              },
              {
                name: '嘉兴',
                children: [
                  {name: '南湖区'},
                  {name: '秀洲区'}
                ]
              }
            ]
          },
          {
            name: '福建',
            children: [
              {
                name: '福州',
                children: [
                  {name: '鼓楼区'},
                  {name: '将台区'},
                  {name: '仓山区'}
                ]
              }
            ]
          },
          {
            name: '安徽',
            children: [
              {
                name: '合肥',
                children: [
                  {name: '瑶海'},
                  {name: '庐阳'}
                ]
              }
            ]
          },
        ],
        initSource: null,
        content: `<g-cascade :data-source="source"></g-cascade>`,
        content1: `<g-cascade v-if="initSource" :data-source="initSource" :callback="callBack"></g-cascade>`,
        content2: `<g-cascade v-if="initSource" clearable :data-source="initSource" :callback="callBack"></g-cascade>`,
        content3: `<g-cascade v-if="initSource" :data-source="initSource" :callback="callBack" :itemDisabled="{key:'id',value:1}"></g-cascade>`,
        callBack: function (obj) {
          return ajax(obj.id)
        },
      }
    },
    mounted () {
      ajax().then((res)=>{
        this.initSource= res.map((item)=>{
          item.children = []
          return item
        })
      })
    },
    components: {
      'g-cascade': Cascade,
      'g-cascade-complex': CascadeComplex,
    }
  }
</script>

<style lang="scss" scoped>
  .items {
    margin-top: 10px;
  }

  header {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
