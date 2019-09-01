<template>
  <div class="cascade">
    <div class="trigger" @click="isShowPopover = !isShowPopover">
      <slot></slot>
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
        default: 5
      }
    },
    data() {
      return {
        isShowPopover: false,
        dataSourceHandle: [],
        eventBus: new Vue(),
        currentDeepNum: 0,
        last$event: {indexArray:[]}
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    components: {
      'g-cascade-complex': CascadeComplex
    },
    mounted() {
      this.initDataSourceHandle()
      this.eventBus.$on('tellMeIndex', (option) => {
        this.tellMeIndexes(option)
      })
    },
    methods: {
      tellMeIndexes($event) {
        if($event.indexArray.length > this.deep) return
        this.judgeDeepNum($event)
        this.initDataSourceHandle()
        for (let i = 0; i < $event.indexArray.length; i++) {
          for (let j = 0; j < this.dataSource.length; j++) {
            if (j === $event.indexArray[i]) {
              let dataSourceHandleCopy = this.dataSourceHandle
              let dataSourceCopy = this.dataSource
              this.complexDataSource(dataSourceHandleCopy,dataSourceCopy,i,j, $event,0)
            }
          }
        }
        this.parentDomHandle()
      },
      complexDataSource(dataSourceHandleCopy,dataSourceCopy,currentLoopDeep,indexSelected, $event,complexTime) {
        let $eventIndexArrayCopy = JSON.parse(JSON.stringify($event.indexArray))
        $eventIndexArrayCopy.splice(currentLoopDeep+1)
        let $eventIndexArrayCopySplice = {indexArray:$eventIndexArrayCopy}
        let hasChildren =  this.judgeHasChildren($eventIndexArrayCopySplice)
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
        dataSourceHandleCopy.children = dataSourceCopy.children.map((item, index) => {
          let arrayCopy = JSON.parse(JSON.stringify(dataSourceHandleCopy.indexArray))
          arrayCopy.push(index)
          return {name: item.name, indexArray: arrayCopy, children: []}
        })
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
          for(let i = 0;i<5;i++){
            let children =  document.body.querySelectorAll(`.children${i+1}>.cascadeItem`)
            if(children.length>0){
              document.body.querySelector(`.parent${i+1}`).innerHTML = ""
            }
            for (let j = 0;j<children.length;j++){
              document.body.querySelector(`.parent${i+1}`).appendChild(children[j])
            }
          }
        })
      },
      initDataSourceHandle() {
        this.dataSourceHandle = this.dataSource.map((item, index) => {
          let array = []
          array.push(index)
          return {name: item.name, indexArray: array, children: []}
        })
      }
    }
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
    }
    .parentLevel{
      min-width: 30px;
      min-height: 20px;
      border-left: 1px solid #ddd;
      padding: 10px;
    }
  }
</style>
