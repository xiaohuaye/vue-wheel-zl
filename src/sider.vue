<template>
  <transition name="slide">
    <div class="g-sider" v-if="visibility">
      <slot></slot>
      <button @click="visibility = false ">close</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "zl-sider",
    data(){
      return {
        visibility: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .g-sider{
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide-enter-active,.slide-leave-active {
    transition: all .5s;
  }
  .slide-enter,.slide-leave-to {
    opacity: 0;
    width: 0;
  }
</style>
