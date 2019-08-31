<template>
  <div class="tabs-pane" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabs-pane',
  inject: ['eventBus'],
  props: {
    name: {
      required: true,
      type: String | Number
    }
  },
  data () {
    return {
      active: false
    }
  },
  mounted: function () {
    this.eventBus.$on('update:selected', (option) => {
      this.active = option.toString() === this.name.toString()
    })
  }
}
</script>

<style scoped lang="scss">

</style>
