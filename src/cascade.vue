<template>
  <div class="cascade" ref="cascade" v-click-outside="close">
    <div class="trigger" @click="toggle">
      <slot></slot>
      <g-input v-model="selectSource" :clearable= "clearable" @inputclear="selectEventIndexArray = [];"></g-input>
    </div>
    <div class="popover" v-show="isShowPopover">
      <div class="cascadeItemGroup">
        <g-cascade-complex v-for="(item,index) in this.dataSourceHandle" :sourceItem="item" :itemDisabled="itemDisabled"
                           :key="index" ></g-cascade-complex>
      </div>
      <div v-for="(item,index) in deep" class="parentLevel" :class="`parent${index+1}`"
           v-show="currentDeepNum > index && !isLoading"></div>
    </div>
  </div>
</template>

<script>
  import CascadeComplex from './cascade-complex'
  import Vue from 'vue'
  import Input from './input'
  import ClickOutside from './click-outside'

  export default {
    name: 'g-cascade',
    directives:{ClickOutside},
    props: {
      dataSource: {
        type: Array
      },
      deep: {
        type: Number,
        default: 10
      },
      callback: {
        type: Function
      },
      clearable:{},
      itemDisabled:{
        type: Object,
        validator(value){
          if(!value.hasOwnProperty('key')){
            console.warn('此禁用参数对象上必须有key的属性')
            return false
          }else{
            if(!value['key']){
              console.warn('此禁用参数对象上key属性必须有值')
              return false
            }
          }
          if(!value.hasOwnProperty('value')){
            console.warn('此禁用参数对象上必须有value的属性')
            return false
          }
          return true
        }
      }
    },
    data() {
      return {
        isShowPopover: false,
        dataSourceHandle: [],
        eventBus: new Vue(),
        currentDeepNum: 0,
        selectEventIndexArray: [],
        isLoading: false,
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.initDataSourceHandle()
      this.eventBus.$on('tellMeIndex', (option) => {
        this.tellMeIndexes(option)
      })
    },
    computed: {
      selectSource: {
        get:function () {
          let dataSourceHandle = this.dataSourceHandle
          let result = ''
          for (let i = 0; i < this.selectEventIndexArray.length; i++) {
            if (i === 0) {
              result += dataSourceHandle[this.selectEventIndexArray[i]].name
            } else {
              result += '/' + dataSourceHandle[this.selectEventIndexArray[i]].name
            }
            dataSourceHandle = dataSourceHandle[this.selectEventIndexArray[i]].children
          }
          return result
        },
      }
    },
    methods: {
      toggle(){
        if(this.isShowPopover){
          this.close()
        }else{
          this.open()
        }
      },
      close(){
        this.isShowPopover = false
      },
      open(){
        this.isShowPopover = true
      },
      tellMeIndexes($event) {
        this.selectEventIndexArray = $event.indexArray
        if ($event.indexArray.length > this.deep) return
        this.$emit('selectEvent',$event)
        this.initDataSourceHandle()
        for (let i = 0; i < $event.indexArray.length; i++) {
          for (let j = 0; j < this.dataSource.length; j++) {
            if (j === $event.indexArray[i]) {
              let dataSourceHandleCopy = this.dataSourceHandle
              let dataSourceCopy = this.dataSource
              this.complexDataSource(dataSourceHandleCopy, dataSourceCopy, i, j, $event)
            }
          }
        }
        if (!this.callback) {
          this.parentDomHandle()
        }
      },
      complexDataSource(dataSourceHandleCopy, dataSourceCopy, currentLoopDeep, indexSelected, $event) {
        let $eventIndexArrayCopy = JSON.parse(JSON.stringify($event.indexArray))
        $eventIndexArrayCopy.splice(currentLoopDeep + 1)
        let $eventIndexArrayCopySplice = {indexArray: $eventIndexArrayCopy}
        let hasChildren = this.judgeHasChildren($eventIndexArrayCopySplice)
        if (this.callback) {
          hasChildren = true
        }
        if (!hasChildren) return
        for (let u = 0; u < $eventIndexArrayCopySplice.indexArray.length; u++) {
          if (u === 0) {
            dataSourceHandleCopy = dataSourceHandleCopy[$eventIndexArrayCopySplice.indexArray[u]]
            dataSourceCopy = dataSourceCopy[$eventIndexArrayCopySplice.indexArray[u]]
          } else {
            dataSourceHandleCopy = dataSourceHandleCopy.children[$eventIndexArrayCopySplice.indexArray[u]]
            dataSourceCopy = dataSourceCopy.children[$eventIndexArrayCopySplice.indexArray[u]]
          }
        }
        if (this.callback && currentLoopDeep === $event.indexArray.length - 1) {
          this.callback($event).then(res => {
            console.log(res);
            res = res.map(item => {
              item.children = []
              return item
            })
            this.$set(dataSourceCopy, 'children', res)
            this.judgeDeepNum($event)
            dataSourceHandleCopy.children = dataSourceCopy.children.map((item, index) => {
              let arrayCopy = JSON.parse(JSON.stringify(dataSourceHandleCopy.indexArray))
              arrayCopy.push(index)
              let obj = {}
              for (let key in item) {
                obj[key] = item[key]
              }
              obj.indexArray = arrayCopy
              return obj
            })
            this.parentDomHandle()
            this.isLoading = false
          })
        } else {
          this.judgeDeepNum($event)
          dataSourceHandleCopy.children = dataSourceCopy.children.map((item, index) => {
            let arrayCopy = JSON.parse(JSON.stringify(dataSourceHandleCopy.indexArray))
            arrayCopy.push(index)
            let obj = {}
            for (let key in item) {
              if (key === 'children') {
                obj.children = []
              } else {
                obj[key] = item[key]
              }
            }
            obj.indexArray = arrayCopy
            return obj
          })
          this.isLoading = false
        }
      },
      judgeDeepNum($event) {
        if (this.judgeHasChildren($event)) {
          this.currentDeepNum = $event.indexArray.length
          this.isLoading = true
        } else {
          this.currentDeepNum = $event.indexArray.length - 1
        }
      },
      judgeHasChildren($event) {
        let obj = this.dataSource
        for (let i = 0; i < $event.indexArray.length; i++) {
          if (i === 0) {
            obj = obj[$event.indexArray[i]]
          } else {
            obj = obj.children[$event.indexArray[i]]
          }
          if (i + 1 === $event.indexArray.length) {
            return obj.hasOwnProperty('children') && obj.children && obj.children.length > 0
          }
        }
      },
      parentDomHandle() {
        this.$nextTick(() => {
          for (let i = 0; i < 5; i++) {
            let children = this.$refs.cascade.querySelectorAll(`.children${i + 1}>.cascadeItem`)
            if (children.length > 0) {
              this.$refs.cascade.querySelector(`.parent${i + 1}`).innerHTML = ""
            }
            for (let j = 0; j < children.length; j++) {
              this.$refs.cascade.querySelector(`.parent${i + 1}`).appendChild(children[j])
            }
          }
          this.eventBus.$emit('closeLoading',false)
        })
      },
      initDataSourceHandle() {
        this.dataSourceHandle = this.dataSource.map((item, index) => {
          let array = []
          array.push(index)
          let obj = {}
          for (let key in item) {
            if (key === 'children') {
              obj.children = []
            } else {
              obj[key] = item[key]
            }
          }
          obj.indexArray = array
          return obj
        })
      }
    },
    components: {
      'g-cascade-complex': CascadeComplex,
      'g-input': Input
    },
  }
</script>

<style lang="scss" scoped>
  @import "var/var_scss";

  .cascade {
    position: relative;
    display: inline-flex;
    z-index:auto;
  }

  .trigger {

  }

  .popover {
    border: 1px solid #cccccc;
    border-radius: 5px;
    overflow: hidden;
    display: inline-flex;
    position: absolute;
    left: 0;
    top: 100%;
    background: white;
    margin-left: -2px;
    margin-right: -2px;
    @extend .box-shadow;

    .cascadeItemGroup {
      background: white;
      display: flex;
      flex-direction: column;
      padding: 10px;
      max-height: 220px;
      overflow-y: auto;
      white-space: nowrap;
      z-index: 1;
    }

    .parentLevel {
      background: white;
      min-width: 30px;
      min-height: 20px;
      border-left: 1px solid #ddd;
      max-height: 220px;
      padding: 10px;
      overflow-y: auto;
      white-space: nowrap;
      z-index: 1;
    }
  }
</style>
