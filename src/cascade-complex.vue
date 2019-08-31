<template>
  <div class="cascadeItem">
    <div class="sourceItemName" @click.stop="tellMeIndex(sourceItem)">{{sourceItem.name}}</div>
    <div v-if="sourceItem.children" :class="`children${sourceItem.indexArray.length}`">
      <g-cascade-complex  v-for="(item,index) in sourceItem.children" :sourceItem="item" :key="index"></g-cascade-complex>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gCascadeComplex',
  inject: ['eventBus'],
  props: {
    sourceItem: {
      type: Object
    },
  },
  mounted () {
  },
  methods: {
    tellMeIndex (sourceItem) {
      this.eventBus.$emit('tellMeIndex', sourceItem)
      this.$emit('tellMeIndex', sourceItem)
    }
  }
}
</script>

<style lang="scss" scoped>
  .cascadeItem{
    display: flex;
    height: 25px;
    flex-direction: column;
    >.children{
    }
    >.sourceItemName{
    }
  }
</style>
