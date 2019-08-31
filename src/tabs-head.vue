<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="other">
      <slot name="other"></slot>
    </div>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
export default {
  name: 'tabs-head',
  inject: ['eventBus'],
  props: {

  },
  data () {
    return {
      lineInitPosition: 0
    }
  },
  mounted () {
    this.lineInitPosition = this.$refs.line.getBoundingClientRect().left
    this.eventBus.$on('update:selected', (option) => {
      this.$children.map(child => {
        if (option.toString() === child.name.toString()) {
          this.$refs.line.style.transform = `translateX(${child.$el.getBoundingClientRect().left - this.lineInitPosition}px)`
          this.$refs.line.style.width = child.$el.getBoundingClientRect().width + 'px'
        }
      })
    })
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
      height: 2px;
      border-radius: 5px;
      background-color: #3e999f;
      transition: all 0.35s;
    }
  }

</style>
