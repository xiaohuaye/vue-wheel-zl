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
      this.initDataSourceHandle()
    },
    methods:{
      tellMeIndexes($event){
        this.initDataSourceHandle()
        console.log('$event',$event) //name indexArray
        // let array = []
        for(let i=0;i<$event.indexArray.length;i++) { //深度
          for (let j = 0; j < this.dataSource.length; j++) {  //广度
            if (i < $event.indexArray.length) {
              let currentIndexArrayNum =  $event.indexArray[i]
              let indexArrayNumFst = $event.indexArray[0]
              if(i === 0 && j === currentIndexArrayNum){
                this.dataSourceHandle[j].children = this.dataSource[j].children.map((item,index) =>{
                  let indexArray = this.dataSourceHandle[j].indexArray.push(index)
                  return { name:item.name , indexArray:indexArray ,children:[]}
                })
              }else if( i !== 0 && j === currentIndexArrayNum){
                function f(dataSourceHandleFather,dataSourceFather){
                   let u = 1
                   if( u === i){
                     dataSourceHandleFather[$event.indexArray[u]].children = dataSourceFather[$event.indexArray[u]].children.map((item,index) =>{
                       let indexArray = dataSourceHandleFather[$event.indexArray[u]].indexArray.push(index)
                       return { name:item.name , indexArray:indexArray ,children:[]}
                     })
                   }else{
                     u++
                     f(dataSourceHandleFather[$event.indexArray[u]].children,dataSourceFather[$event.indexArray[u]].children)
                   }
                }
                f(this.dataSourceHandle[indexArrayNumFst].children,this.dataSource[indexArrayNumFst].children)
              }
            }
          }
        }
      },
      complexDataSource(array,source,$event){
        let obj = {
          name: source.name,
          indexArray:source.indexArray
        }
        if(source.indexArray.length <= $event.indexArray.length){
          obj.children = []
        }
        array.push(obj)
      },
      initDataSourceHandle(){
        this.dataSourceHandle = this.dataSource.map((item,index)=>{
          let indexArray = [index]
          return { name:item.name , indexArray:indexArray ,children:[]}
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
