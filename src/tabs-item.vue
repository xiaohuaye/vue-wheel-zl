<template>
  <div @click="changeSelectOption" class="tabs-item">
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
    mounted: function(){
      this.eventBus.$on('update:selected',(option)=>{
        if(option.toString() === this.name.toString()){
          console.log(`${this.name}被点中了`)
        }
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
  }
</style>
