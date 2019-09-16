<template>
  <div class="g-swipe">
    <div class="g-swipe-window">
      <div class="g-swipe-inner" ref="inner">
        <slot></slot>
      </div>
      <div v-if="childrenLength">
        <div v-for="index in childrenLength">{{index}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "swipe",
    props:{
      selected:{
        type: Number,
        default: 0
      },
      loop:{},
      reverse:{}
    },
    data(){
      return {
        childrenLength: 0
      }
    },
    computed:{
      isReverse(){
        return typeof(this.reverse) !== "undefined"
      }
    },
    mounted() {
      this.updateChildren(this.selected)
      this.loopAll()
      this.getChildrenLength()
    },
    updated() {
      this.updateChildren(this.selected)
    },
    methods:{
      getChildrenLength(){
        this.childrenLength = this.$children.length
      },
      updateChildren(n){
        this.$children.forEach((el,index)=>{
          el.swipeIndexNum = index
          el.currentSelect = n
          el.isReverse = this.isReverse
        })
      },
      loopAll(){
        if(typeof(this.loop) !== "undefined"){
          let n = this.selected
          let maxNum = this.$children.length - 1
          let run = ()=>{
            if(n > maxNum){
              n = 0
            }else if( n < 0){
              n = maxNum
            }
            this.updateChildren(n)
            this.$emit('activeIndex',{activeIndex: n})
            setTimeout(()=>{
              run()
            },3000)
            if(this.isReverse) {
              n--
            }else{
              n++
            }
          }
          setTimeout(()=>{
            run()
          },3000)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  *{
    box-sizing: border-box;
  }
  .g-swipe{
    display: inline-block;
    .g-swipe-window{
      overflow: hidden;
      border: 1px solid blue;
      .g-swipe-inner{
        position: relative;
      }
    }
  }
</style>
