<template>
  <div class="g-footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-footer"
  }
</script>

<style scoped lang="scss">
  .g-footer{
    justify-content: flex-end;
  }
</style>
