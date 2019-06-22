<template>
  <button class="g-button">
    <svg class="icon" v-if="iconName && iconPosition !== 'right'" aria-hidden="true">
      <use :xlink:href=`#i-${iconName}`></use>
    </svg>
    <slot></slot>
    <svg class="icon" v-if="iconName && iconPosition === 'right'" aria-hidden="true">
      <use :xlink:href=`#i-${iconName}`></use>
    </svg>
  </button>
</template>

<script>
    export default {
        props:{
            iconName:String,
            iconPosition: {
                type: String,
              validator: function (value) {
                  console.log(value)
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
    padding: 0 0.5em;
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