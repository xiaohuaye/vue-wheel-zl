<template>
  <div class="cascadeItem">
    <div class="sourceItemName" @click.stop="tellMeIndex(sourceItem)">
      <div :class="{disabled: isDisabled}">{{sourceItem.name}}
        <g-icon v-if="sourceItem.children && sourceItem.children.length" icon="you"></g-icon>
        <g-icon v-if="iconLoading  && sourceItem.children && !sourceItem.children.length" icon="loading"></g-icon>
      </div>
    </div>
    <div :class="`children${sourceItem.indexArray.length}`" style="visibility: hidden">
      <g-cascade-complex v-for="(item,index) in sourceItem.children" :sourceItem="item" :key="index"
                         :itemDisabled="itemDisabled"></g-cascade-complex>
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
      itemDisabled: {
        type: Object
      }
    },
    data() {
      return {
        iconLoading: false
      }
    },
    mounted() {
    },
    computed: {
      isDisabled() {
        return this.itemDisabled ? this.sourceItem[this.itemDisabled.key] === this.itemDisabled.value : false
      }
    },
    methods: {
      tellMeIndex(sourceItem) {
        if (this.isDisabled) {
          return
        }
        this.eventBus.$off('closeLoading')
        this.eventBus.$on('closeLoading', (option) => {
          this.iconLoading = false
        })
        this.iconLoading = true
        this.eventBus.$emit('tellMeIndex', sourceItem)
      }
    },
    components: {
      'g-icon': Icon
    }
  }
</script>

<style lang="scss" scoped>
  .cascadeItem {
    display: flex;
    height: 25px;
    flex-direction: column;

    > .children {
    }

    > .sourceItemName {
      .disabled {
        color: #eee;
        cursor: not-allowed;
      }
    }
  }
</style>
