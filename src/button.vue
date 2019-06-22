<template>
  <button class="g-button">
    <g-icon v-if="iconName && iconPosition !== 'right'" :icon-name="iconName"></g-icon>
    <slot></slot>
    <g-icon v-if="iconName && iconPosition === 'right'" :icon-name="iconName"></g-icon>
  </button>
</template>

<script>
    export default {
        props:{
            iconName:String,
            iconPosition: {
                type: String,
                validator: function (value) {
                  if(value !== 'left'&& value !== 'right'){
                    console.log(`${value}是无效的，iconPosition可以是'left'或者'right'`)
                  }
                  return true
                  //可查看传值内容返回true or false
                },
                default: 'left'
            }
        }
    }
</script>

<style lang="scss" scoped>

  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 0.63em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-background);

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-background);
    }

    &:focus {
      outline: none;
    }
  }

</style>
