<template>
  <div class="cascadeItem">
    <div class="sourceItemName" @click.stop="tellMeIndex(sourceItem)">
      <div>{{sourceItem.name}}<g-icon v-if="sourceItem.children && sourceItem.children.length" icon="you"></g-icon>
        <g-icon v-if="iconLoading  && !sourceItem.children.length" icon="loading"></g-icon></div>
    </div>
    <div :class="`children${sourceItem.indexArray.length}`" style="visibility: hidden">
      <g-cascade-complex  v-for="(item,index) in sourceItem.children" :sourceItem="item" :key="index"></g-cascade-complex>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'
export default {
  name: 'gCascadeComplex',
  inject: ['eventBus'],
  props: {
    sourceItem: {
      type: Object
    },
  },
  data(){
    return {
      iconLoading: false
    }
  },
  mounted () {

  },
  methods: {
    tellMeIndex (sourceItem) {
      this.eventBus.$off('closeLoading')
      this.eventBus.$on('closeLoading',(option)=>{
        this.iconLoading = false
      })
      this.iconLoading = true
      this.eventBus.$emit('tellMeIndex', sourceItem)
    }
  },
  components:{
    'g-icon': Icon
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
