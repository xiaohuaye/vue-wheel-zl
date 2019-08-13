<template>
  <div class="wrapper">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :class="{error}"
           @change="$emit('change',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @input ="$emit('input',$event.target.value)"

    >
    <template v-if="error">
      <g-icon icon="error" class="icon-error"></g-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    name: 'ZLInput',
    components: {
      'g-icon': Icon
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      readonly: {
        type: Boolean
      },
      error: {
        type: String
      }
    }
  }
</script>

<style scoped lang="scss">
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $border-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  .wrapper {font-size: $font-size;display: inline-block;display: inline-flex;align-items: center;

    > :not(:last-child) {margin-right: .5em;}

    > input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: $font-size;

      &:hover {border-color: $border-color-hover;}

      &:focus {box-shadow: inset 0 1px 3px $border-shadow-color;outline: none;}

      &[disabled], &[readonly] {color: #bbb;border-color: #bbb;cursor: not-allowed;}

      &.error {border-color: $red;}
    }

    > .icon-error {fill: $red;}

    > .error-message {color: $red;}
  }
</style>
