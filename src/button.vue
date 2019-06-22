<template>
  <button class="g-button" @click="$emit('click')">
    <g-icon v-if="iconNameCurrent && iconPosition !== 'right'" :icon-name="iconNameCurrent"></g-icon>
    <slot></slot>
    <g-icon v-if="iconNameCurrent && iconPosition === 'right'" :icon-name="iconNameCurrent"></g-icon>
  </button>
</template>

<script>
  export default {
    props: {
      iconName: String,
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
        let iconName = this.loading ? 'loading' : this.iconName;
        return iconName
      }
    },
    methods: {}

  }
</script>

<style lang="scss" scoped>

  .g-button {font-size: var(--font-size);height: var(--button-height);padding: 0 0.63em;border-radius: var(--border-radius);border: 1px solid var(--border-color);background: var(--button-background);
    &:hover {border-color: var(--border-color-hover);}
    &:active {background-color: var(--button-active-background);}
    &:focus {outline: none;}
  }

</style>
