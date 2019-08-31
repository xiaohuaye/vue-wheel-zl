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
      <div  v-for="(item,index) in deep" class="parentLevel" :class="`parent${index+1}`"></div>
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
        eventBus: new Vue()
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
        this.initDataSourceHandle()
        for (let i = 0; i < $event.indexArray.length; i++) {
          for (let j = 0; j < this.dataSource.length; j++) {
            let currentIndexArrayNum = $event.indexArray[i]
            let indexArrayNumFst = $event.indexArray[0]
            if (i === 0 && j === currentIndexArrayNum) {
              this.dataSourceHandle[j].children = this.dataSource[j].children.map((item, index) => {
                let arrayCopy = JSON.parse(JSON.stringify(this.dataSourceHandle[j].indexArray))
                arrayCopy.push(index)
                return {name: item.name, indexArray: arrayCopy, children: []}
              })
            } else if (i !== 0 && j === currentIndexArrayNum) {
              this.complexDataSource(this.dataSourceHandle[indexArrayNumFst].children, this.dataSource[indexArrayNumFst].children, i, $event,1)
            }
          }
        }
        this.parentDomHandle($event)
      },
      parentDomHandle($event){
        this.$nextTick(()=>{
          for( let i = $event.indexArray.length - 1 ; i< 5;i++){
            if(document.body.querySelector(`.parent${i+1}`)){
              document.body.querySelector(`.parent${i+1}`).innerHTML = ""
            }
          }
          for(let i = 0;i<5;i++){
            let children =  document.body.querySelectorAll(`.children${i+1}>.cascadeItem`)
            for (let j = 0;j<children.length;j++){
              document.body.querySelector(`.parent${i+1}`).appendChild(children[j])
            }
          }
        })
      },
      complexDataSource(dataSourceHandleFather, dataSourceFather, i, $event,u) {
        if (u === i) {
          if(!dataSourceFather[$event.indexArray[u]] || !dataSourceFather[$event.indexArray[u]].children|| !dataSourceHandleFather[$event.indexArray[u]]) return;
          dataSourceHandleFather[$event.indexArray[u]].children = dataSourceFather[$event.indexArray[u]].children.map((item, index) => {
            let arrayCopy = JSON.parse(JSON.stringify(dataSourceHandleFather[$event.indexArray[u]].indexArray))
            arrayCopy.push(index)
            return {name: item.name, indexArray: arrayCopy, children: []}
          })
        } else {
          u++
          if(!dataSourceFather[$event.indexArray[u]] ||!dataSourceFather[$event.indexArray[u]].children) return;
          this.complexDataSource(dataSourceHandleFather[$event.indexArray[u]].children, dataSourceFather[$event.indexArray[u]].children, i, $event,u)
        }
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

  }

  .trigger {

  }

  .popover{
    position: relative;
    border: 1px solid #cccccc;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    .cascadeItemGroup{
      display: flex;
      flex-direction: column;
    }
    .parent1{
      border: 1px solid red;
      min-width: 30px;
      min-height: 20px;
    }
    .parent2{
      border: 1px solid red;
      min-width: 30px;
      min-height: 20px;

    }
    .parent3{
      border: 1px solid red;
      min-width: 30px;
      min-height: 20px;

    }
    .parent4{
      border: 1px solid red;
      min-width: 30px;
      min-height: 20px;

    }
  }
</style>
