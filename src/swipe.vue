<template>
  <div class="g-swipe">
    <div class="g-swipe-window">
      <div class="g-swipe-inner" ref="inner">
        <slot></slot>
        <div v-if="childrenLength" class="indexForChildren">
          <div v-for="index in childrenLength" :class="{indexSelected: index === currentSelect + 1}" @click="changeSelected(index - 1)"><span>{{index}}</span></div>
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
        clearT: null
      }
    },
    computed:{
      isReverse(){
        return typeof(this.reverse) !== "undefined"
      }
    },
    mounted() {
      this.currentSelect = this.selected
      this.updateChildren()
      this.loopAll()
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
        this.$children.forEach((el,index)=>{
          el.swipeIndexNum = index
          el.currentSelect = n
          this.currentSelect = n
          el.isReverse = this.isReverse
        })
      },
      changeSelected(index){
        this.updateChildren(index)
        this.$emit('activeIndex',{activeIndex: index})
        clearTimeout(this.clearT)
        this.loopAll(index)
      },
      loopAll(n = this.currentSelect){
        console.log(n);
        if(typeof(this.loop) !== "undefined"){
          let maxNum = this.$children.length - 1
          let run = ()=>{
            if(n > maxNum){
              n = 0
            }else if( n < 0){
              n = maxNum
            }
            this.changeSelected(n)
            this.clearT = setTimeout(()=>{
                run()
              },3000)
            console.log(n);
            if(this.isReverse) {
              n--
            }else{
              n++
            }
          }
          this.clearT = setTimeout(()=>{
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
