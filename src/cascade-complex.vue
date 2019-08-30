<template>
  <div class="cascadeItem" @click="tellMeIndex(sourceItem)">
    {{sourceItem.name}}
    <div v-if="sourceItem.children">
      <g-cascade-complex  v-for="item in sourceItem.children" :sourceItem="item" ></g-cascade-complex>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gCascadeComplex",
    props:{
      sourceItem: {
        type: Object
      }
    },
    mounted() {
    },
    methods:{
      tellMeIndex(sourceItem){
        this.eventBus.$emit('tellMeIndex',sourceItem)
        this.$emit('tellMeIndex',sourceItem)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cascadeItem{
  }
</style>
