<template>
  <transition name="slide">
    <div class="g-sider" v-if="Gvisibility">
      <slot></slot>
      <button v-if="visibility" @click="Gvisibility = false">close</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "g-sider",
    props:{
      visibility: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        Gvisibility : true
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
