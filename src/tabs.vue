<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'tabs',
  props: {
    selected: {
      type: String | Number,
      required: true
    }
  },
  data: function () {
    return {
      eventBus: new Vue()
    }
  },
  provide: function () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted: function () {
    this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>

<style scoped lang="scss">
  .tabs{
  }
</style>
