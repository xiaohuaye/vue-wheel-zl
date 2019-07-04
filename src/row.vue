<template>
  <div class="row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "zl-row",
    props: {
      gutter: {
        type: [Number,String]
      },
      align: {
        type: String,
        validate(value){
          ['left','right','center'].includes(value)
        }
      }
    },
    computed: {
      rowStyle: function () {
        let {gutter} = this
        return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
      },
      rowClass: function () {
        let {align} = this
        return [ align && `align-${align}`]
      }
    },
    mounted() {
      this.$children.forEach(vm=>{
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style scoped lang="scss">
  .row{
    display: flex;
    flex-wrap: wrap;
  }
  .row.align-left{
    justify-content: flex-start;
  }
  .row.align-right{
    justify-content: flex-end;
  }
  .row.align-center{
    justify-content: center;
  }
</style>
