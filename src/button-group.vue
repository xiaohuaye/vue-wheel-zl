<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "button-group",
    mounted() {
      for(let node  of this.$el.children){
        let name = node.nodeName.toLowerCase()
        if(name !== 'button'){
          console.warn(`g-button-group的子元素应该是 g-button, 但现在有${name}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var/var_scss";
  .g-button-group{display: inline-flex;vertical-align: middle;
    .g-button{border-radius: 0;
      &:not(:first-child){margin-left: -1px;}
      &:first-child{border-top-left-radius: $border-radius;border-bottom-left-radius: $border-radius;}
      &:last-child{border-top-right-radius: $border-radius;border-bottom-right-radius: $border-radius;}
      &:hover{border-color: blue;position: relative;z-index: 1;}
    }
  }
</style>
