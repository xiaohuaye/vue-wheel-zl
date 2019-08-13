<template>
  <button class="g-button" @click="$emit('click')">
    <g-icon v-if="iconNameCurrent && iconPosition !== 'right'" :icon="iconNameCurrent"></g-icon>
    <slot></slot>
    <g-icon v-if="iconNameCurrent && iconPosition === 'right'" :icon="iconNameCurrent"></g-icon>
  </button>
</template>

<script>
  import Icon from './icon'
  export default {
    components: {
      gIcon: Icon
    },
    props: {
      icon: String,
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        validator: function (value) {
          if (value !== 'left' && value !== 'right') {
            console.warn(`${value}是无效的，iconPosition可以是'left'或者'right'`)
          }
          return true
          //可查看传值内容返回true or false
        },
        default: 'left'
      }
    },
    data: function () {
      return {}
    },
    computed: {
      iconNameCurrent: function () {
        let icon = this.loading ? 'loading' : this.icon;
        return icon
      }
    },
    methods: {}

  }
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $button-height: 32px;
  $font-size: 14px;
  $button-background: white;
  $button-active-background: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  .g-button {font-size: $font-size;height: $button-height;padding: 0 0.63em;border-radius: $border-radius;border: 1px solid $border-color;background: $button-background;
    &:hover {border-color: $border-color-hover;}
    &:active {background-color: $button-active-background;}
    &:focus {outline: none;}
  }

</style>
