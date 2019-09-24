<template>
  <transition name="slide">
    <div v-if="visible" class="swipe-item" :class="{reverse: isReverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "swipe-item",
    data(){
      return{
        swipeIndexNum: 0,
        currentSelect: 0,
        isReverse: false
      }
    },
    computed:{
      visible(){
        return this.swipeIndexNum === this.currentSelect
      }
    }
  }

</script>

<style lang="scss" scoped>
  .swipe-item{
    z-index: 1;
  }
  .slide-leave-active{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .slide-enter-active,.slide-leave-active{
    transition: all .5s;
  }
  .slide-enter{
    transform: translateX(100%);
  }
  .slide-enter.reverse{
    transform: translateX(-100%);
  }
  .slide-leave-to{
    transform: translateX(-100%);
  }
  .slide-leave-to.reverse{
    transform: translateX(100%);
  }

</style>
