<template>
  <div class="g-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "zl-layout",
    data(){
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted() {
      this.$children.forEach(vm=>{
        if(vm.$options.name === 'zl-sider'){
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  .g-layout{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  .hasSider{
    flex-direction: row;
  }
</style>
