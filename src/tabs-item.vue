<template>
  <div @click="changeSelectOption" class="tabs-item" :class="{'active':active }">
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
      }
    },
    data(){
      return {
        active: false
      }
    },
    mounted: function(){
      this.eventBus.$on('update:selected',(option)=>{
          this.active = option.toString() === this.name.toString();
      })
    },
    methods: {
      changeSelectOption: function(){
        this.eventBus.$emit('update:selected',this.name)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-item{
    flex-shrink: 0;
    padding: 0.5em 1em;
    cursor: pointer;
  }
  .tabs-item.active{
    color: #20c1c8;
  }
</style>
