<template>
  <div class="wrapper">
    <input type="text" :value="inputValue" :disabled="disabled" :readonly="readonly" :class="{error}"
           @change="$emit('change',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @input ="$emit('input',$event.target.value)"
    >
    <div @click.stop="$emit('inputclear',{clear:''})">
      <g-icon v-if="isClearShow" icon="error" class="clearForInput" ></g-icon>
    </div>
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
    },
    clearable:{

    }
  },
  data(){
    return {
      inputValue: this.value
    }
  },
  mounted() {
  },
  computed:{
    isClearShow(){
      return typeof this.clearable !== 'undefined' && this.inputValue !== ''
    }
  },
  methods:{

  },
  watch:{
    value(newValue, oldValue){
      this.inputValue = newValue
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'var/var_scss';
  .wrapper {font-size: $font-size;display: inline-block;display: inline-flex;align-items: center;position: relative;

    > :not(:last-child) {margin-right: .5em;}

    > input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: $font-size;

      &:hover {border-color: $border-color-hover;}

      &:focus {box-shadow: inset 0 1px 3px $border-shadow-color;outline: none;}

      &[disabled], &[readonly] {color: #bbb;border-color: #bbb;cursor: not-allowed;}

      &.error {border-color: $red;}
    }

    > .icon-error {fill: $red;}

    > .error-message {color: $red;}

    .clearForInput {
      fill: #cccccc;
      position: absolute;
      right: 0;
      top: 25%;
      transform: translateX(-100%);
    }
  }
</style>
