<template>
  <div class="collapse-item">
    <div @click="showHandle" class="title">
      {{title}}
    </div>
    <transition name="fade">
    <div v-show="isShow" class="content">
      <slot></slot>
    </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "collapse-item",
    inject:['eventBus'],
    props:{
      title:{
        type: String,
        require: true
      }
    },
    data(){
      return {
        open: [],
        isShow: false,
        singleMode: false
      }
    },
    mounted() {
      this.eventBus.$on('update:open', (option)=> {
        this.open = option.openArray
        this.singleMode = option.singleMode
        this.isShow = this.open.indexOf(this.title)>=0
      })
    },
    methods:{
      showHandle(){
          let index = this.open.indexOf(this.title)
          let array = JSON.parse(JSON.stringify(this.open))
          if(index<0){
            if(this.singleMode){
              array = []
            }
            array.push(this.title)
          }else{
            array.splice(index,1)
          }
          this.eventBus.$emit('update:open',{openArray:array,singleMode:this.singleMode})
      }
    }
  }
</script>

<style scoped lang="scss">
  .collapse-item{
    border-bottom: 1px solid #ccc;
    >.title{
      display: flex;
      align-items: center;
      min-height: 32px;
    }
    .content{
      border-top: 1px solid #ccc;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
