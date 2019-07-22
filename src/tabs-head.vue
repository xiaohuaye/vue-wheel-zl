<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="other">
      <slot name="other"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabs-head",
    inject:['eventBus'],
    props: {
    }
  }
</script>

<style scoped lang="scss">
  .tabs-head{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > .other{
      margin-left: auto;
    }
  }

</style>
