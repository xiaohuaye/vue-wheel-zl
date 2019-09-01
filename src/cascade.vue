<template>
  <div class="cascade">
    <div class="trigger" @click="isShowPopover = !isShowPopover">
      <slot></slot>
      <g-input v-model="selectSource"></g-input>
    </div>
    <div class="popover" v-show="isShowPopover">
      <div class="cascadeItemGroup">
        <g-cascade-complex v-for="(item,index) in this.dataSourceHandle" :sourceItem="item"
                           :key="index"></g-cascade-complex>
      </div>
      <div  v-for="(item,index) in deep" class="parentLevel" :class="`parent${index+1}`" v-show="currentDeepNum > index"></div>
    </div>
  </div>
</template>

<script>
  import CascadeComplex from './cascade-complex'
  import Vue from 'vue'

  export default {
    name: 'g-cascade',

    props: {
      dataSource: {
        type: Array
      },
      deep:{
        type: Number,
        default: 10
      },
      callback: {
        type: Function
      }
    },
    data() {
      return {
        isShowPopover: false,
        dataSourceHandle: [],
        eventBus: new Vue(),
        currentDeepNum: 0,
        selectEventIndexArray: []
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
    computed:{
      selectSource(){
        let dataSourceHandle = this.dataSourceHandle
        let result = ''
        for(let i = 0;i<this.selectEventIndexArray.length;i++){
          if(i === 0){
            result += dataSourceHandle[this.selectEventIndexArray[i]].name
          }else{
            result += '/' + dataSourceHandle[this.selectEventIndexArray[i]].name
          }
          dataSourceHandle = dataSourceHandle[this.selectEventIndexArray[i]].children
        }
        return result
      }
    },
    methods: {
      tellMeIndexes($event) {
        console.log($event);
        this.selectEventIndexArray = $event.indexArray
        if($event.indexArray.length > this.deep) return
        this.initDataSourceHandle()
        for (let i = 0; i < $event.indexArray.length; i++) {
          for (let j = 0; j < this.dataSource.length; j++) {
            if (j === $event.indexArray[i]) {
              let dataSourceHandleCopy = this.dataSourceHandle
              let dataSourceCopy = this.dataSource
              this.complexDataSource(dataSourceHandleCopy,dataSourceCopy,i,j, $event)
            }
          }
        }
        if(!this.callback){
          this.parentDomHandle()
        }
      },
      complexDataSource(dataSourceHandleCopy,dataSourceCopy,currentLoopDeep,indexSelected, $event) {
        let $eventIndexArrayCopy = JSON.parse(JSON.stringify($event.indexArray))
        $eventIndexArrayCopy.splice(currentLoopDeep+1)
        let $eventIndexArrayCopySplice = {indexArray:$eventIndexArrayCopy}
        let hasChildren =  this.judgeHasChildren($eventIndexArrayCopySplice)
        if(this.callback){
          hasChildren = true
        }
        if(!hasChildren) return
        for(let u = 0; u<$eventIndexArrayCopySplice.indexArray.length;u++){
          if (u === 0) {
            dataSourceHandleCopy = dataSourceHandleCopy[$eventIndexArrayCopySplice.indexArray[u]]
            dataSourceCopy = dataSourceCopy[$eventIndexArrayCopySplice.indexArray[u]]
          } else {
            dataSourceHandleCopy = dataSourceHandleCopy.children[$eventIndexArrayCopySplice.indexArray[u]]
            dataSourceCopy = dataSourceCopy.children[$eventIndexArrayCopySplice.indexArray[u]]
          }
        }
        if(this.callback && currentLoopDeep === $event.indexArray.length - 1){
          this.callback($event).then(res=>{
            console.log('res',res);
            res = res.map(item=>{
              item.children = []
              return item
            })
            this.$set(dataSourceCopy,'children',res)
            this.judgeDeepNum($event)
            console.log(dataSourceCopy.children);
            dataSourceHandleCopy.children = dataSourceCopy.children.map((item, index) => {
              let arrayCopy = JSON.parse(JSON.stringify(dataSourceHandleCopy.indexArray))
              arrayCopy.push(index)
              let obj = {}
              for(let key in item){
                  obj[key] = item[key]
              }
              obj.indexArray = arrayCopy
              return obj
            })
            this.parentDomHandle()
          })
        }else{
          this.judgeDeepNum($event)
          dataSourceHandleCopy.children = dataSourceCopy.children.map((item, index) => {
            let arrayCopy = JSON.parse(JSON.stringify(dataSourceHandleCopy.indexArray))
            arrayCopy.push(index)
            let obj = {}
            for(let key in item){
              if(key === 'children'){
                obj.children = []
              }else{
                obj[key] = item[key]
              }
            }
            obj.indexArray = arrayCopy
            return obj
          })
        }
      },
      judgeDeepNum($event){
        this.currentDeepNum = this.judgeHasChildren($event)?$event.indexArray.length: $event.indexArray.length -1
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
            return obj.hasOwnProperty('children') && obj.children.length > 0
          }
        }
      },
      parentDomHandle(){
        this.$nextTick(()=>{
          setTimeout(()=>{
            for(let i = 0;i<5;i++){
              let children =  document.body.querySelectorAll(`.children${i+1}>.cascadeItem`)
              console.log('children',children);
              if(children.length>0){
                document.body.querySelector(`.parent${i+1}`).innerHTML = ""
              }
              for (let j = 0;j<children.length;j++){
                document.body.querySelector(`.parent${i+1}`).appendChild(children[j])
              }
            }
          },2000)
        })
      },
      initDataSourceHandle() {
        this.dataSourceHandle = this.dataSource.map((item, index) => {
          let array = []
          array.push(index)
          let obj = {}
          for(let key in item){
            if(key === 'children'){
              obj.children = []
            }else{
              obj[key] = item[key]
            }
          }
          obj.indexArray = array
          return obj
        })
      }
    },
    components: {
      'g-cascade-complex': CascadeComplex
    },
  }
</script>

<style lang="scss" scoped>
  @import "var/var_scss";
  .cascade {
    position: relative;
    display: flex;
  }

  .trigger {

  }

  .popover{
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
    .cascadeItemGroup{
      display: flex;
      flex-direction: column;
      padding: 10px;
      max-height: 220px;
      overflow-y: hidden;
      &:hover{
        overflow-y: auto;
      }
    }
    .parentLevel{
      min-width: 30px;
      min-height: 20px;
      border-left: 1px solid #ddd;
      max-height: 220px;
      padding: 10px;
      overflow-y: hidden;
      &:hover{
        overflow-y: auto;
      }
    }
  }
</style>
