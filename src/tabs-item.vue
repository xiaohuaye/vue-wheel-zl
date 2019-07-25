<template>
  <div @click="changeSelectOption" class="tabs-item" :class="{'active':active,'canIUse':!disabled }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabs-item",
    inject: ['eventBus'],
    props: {
      name: {
        required: true,
        type: Number| String
      },
      disabled: {
        type: Boolean,
        default: false
      }

    },
    data(){
      return {
        active: false,
      }
    },
    mounted: function(){
      this.eventBus.$on('update:selected',(option)=>{
          this.active = option.toString() === this.name.toString();
      })
    },
    methods: {
      changeSelectOption: function(){
        if (this.disabled) return
        this.eventBus.$emit('update:selected',this.name)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-item{
    cursor: not-allowed;
    flex-shrink: 0;
    padding: 0.5em 1em;
    color: #ddd;
    &.canIUse{
      cursor: pointer;
      color: black;
    }
    &.active{
      color: #20c1c8;
    }
  }


</style>
