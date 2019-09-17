<template>
  <div class="g-swipe">
    <div class="g-swipe-window">
      <div class="g-swipe-inner" ref="inner">
        <slot></slot>
        <div v-if="childrenLength" class="indexForChildren">
          <div v-for="index in childrenLength" :class="{indexSelected: index === currentSelect + 1}" @click="clickChangeSelected(index - 1)"><span>{{index}}</span></div>
        </div>
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
        childrenLength: 0,
        currentSelect: 0,
        openLoop: true,
        clearT: null,
        lastSelectedNum: null,
        isClickChangeSelected: false
      }
    },
    computed:{
      isReverse(){
        return typeof(this.reverse) !== "undefined"
      },
      isInitOpenLoop(){
        return typeof(this.loop) !== "undefined"
      }
    },
    mounted() {
      this.currentSelect = this.selected
      this.lastSelectedNum = this.selected
      this.updateChildren()
      if(this.isInitOpenLoop){
        this.loopAll()
      }
      this.getChildrenLength()
    },
    updated() {
      this.updateChildren()
    },
    methods:{
      getChildrenLength(){
        this.childrenLength = this.$children.length
      },
      updateChildren(n = this.currentSelect){
        this.currentSelect = n
        this.$children.forEach((el,index)=>{
          el.swipeIndexNum = index
          if(this.isClickChangeSelected === false){
            el.isReverse = this.isReverse
          }else{
            if(this.lastSelectedNum >this.currentSelect){
              el.isReverse = true
            }else{
              el.isReverse = false
            }
          }
          this.$nextTick(()=>{
            el.currentSelect = n
          })
        })
      },
      clickChangeSelected(index){
        this.isClickChangeSelected = true
        this.basicChangeSelected(index)
        this.closeTimer()
        this.openTimer()
      },
      basicChangeSelected(index){
        this.lastSelectedNum = this.currentSelect
        this.updateChildren(index)
        this.$emit('activeIndex',{activeIndex: index})
      },
      openTimer(){
        if(this.openLoop) return
        this.openLoop = true
        this.loopAll()
      },
      closeTimer(){
        if(!this.openLoop) return
        this.openLoop = false
        clearTimeout(this.clearT)
      },
      loopAll(n = this.currentSelect){
        if(this.isInitOpenLoop){
          this.isClickChangeSelected = false
          let maxNum = this.$children.length - 1
          let run = ()=>{
            if(n > maxNum){
              n = 0
            }else if( n < 0){
              n = maxNum
            }
            this.basicChangeSelected(n)
            this.clearT = setTimeout(()=>{
                run()
              },3000)
            if(this.isReverse) {
              n--
            }else{
              n++
            }
          }
          this.clearT = setTimeout(()=>{
            run()
          })
        }else{
          this.openLoop = false
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
        .indexForChildren{
          position: absolute;
          left: 50%;
          bottom: 0;
          display: flex;
          transform: translate(-50%);
          >div{
            border: 1px solid red;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin: 10px;
            &.indexSelected{
              background-color: red;
            }
          }
        }
      }
    }
  }
</style>
