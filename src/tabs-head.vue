<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="other">
      <slot name="other"></slot>
    </div>
    <div class="line"></div>
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
    position: relative;
    > .other{
      margin-left: auto;
    }
    >.line{
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 10px;
      border-radius: 5px;
      background-color: green;
    }
  }

</style>
