<template>
  <div class="collapse-wrapper" >
      <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "collapse",
    props:{
      defaultopen:{
        type: Array
      },
      single:{
      }
    },
    data(){
      return {
        eventBus: new Vue(),
        open: this.defaultopen,
        singleMode: this.single !== undefined
      }
    },
    provide(){
      return{
        eventBus: this.eventBus
      }
    },
    mounted() {
      if( this.singleMode && this.open.length>1){
        try {
          console.warn('单个item显示开启时不要默认开启多个item')
        }catch (e) {
          console.log('单个item显示开启时不要默认开启多个item')
        }
      }
      this.eventBus.$emit('update:open',{openArray:this.open,singleMode:this.singleMode})
      this.eventBus.$on('update:open', (option)=> {
        this.open = option.openArray
        this.$emit('update:defaultopen',this.open)
      })
    }
  }
</script>

<style scoped lang="scss">
  .collapse-wrapper{
    border: 1px solid #ccc;
    border-radius: 5px;
    >*:last-child{
      border-bottom: 0;
    }
  }
</style>
