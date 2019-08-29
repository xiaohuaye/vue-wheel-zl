<template>
  <div class="cascade">
    <div class="trigger" @click="isShowPopover = !isShowPopover">
      <slot></slot>
    </div>
    <div class="popover" v-if="isShowPopover">
      <g-cascade-complex v-for="item in this.dataSourceHandle" :sourceItem="item" @tellMeIndex="tellMeIndexes"></g-cascade-complex>
    </div>
  </div>
</template>

<script>
  import CascadeComplex from './cascade-complex'
  export default {
    name: "g-cascade",
    props:{
      dataSource:{
        type: Array
      }
    },
    data(){
      return{
        isShowPopover: false,
        dataSourceHandle: []
      }
    },
    components:{
      'g-cascade-complex': CascadeComplex
    },
    mounted() {
      this.dataSourceHandle = this.dataSource.map((item,index)=>{
        return { name:item.name , index:index , deep: 1}
      })
    },
    methods:{
      tellMeIndexes($event){
        console.log($event)
        this.dataSourceHandle = this.dataSource.map((item,index)=>{
          return { name:item.name , index:index, deep: 1}
        })
      },
      mapChildren(array,index,deep){
        deep++
        array.map((item,itemIndex)=>{
          return { name:item.name , index:itemIndex, deep: deep}
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var/var_scss";
  .cascade{
    border: 1px solid red;
    min-height: 15px;
  }
  .trigger{
    border: 1px solid blue;
    min-height: 15px;
  }
</style>
