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
      },
      loopAll(){
        if(typeof(this.loop) !== "undefined"){
          let maxNum = this.$children.length - 1
          let run = ()=>{
            if(this.currentSelect > maxNum){
              this.currentSelect = 0
            }else if( this.currentSelect < 0){
              this.currentSelect = maxNum
            }
            this.changeSelected(this.currentSelect)
            this.clearT = setTimeout(()=>{
                run()
              },3000)
            if(this.isReverse) {
              this.currentSelect--
            }else{
              this.currentSelect++
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
