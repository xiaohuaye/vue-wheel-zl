<template>
  <div class="g-swipe">
    <div class="g-swipe-window">
      <span v-if="isNeedForward" class="spanForward" @click="Forward"><g-icon icon="left" ></g-icon></span>
      <span v-if="isNeedForward" class="spanBackward" @click="Backward"><g-icon icon="you" ></g-icon></span>
      <div class="g-swipe-inner" ref="inner" @mouseenter="closeTimer" @mouseleave="openTimer" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
        <slot></slot>
        <div v-if="childrenLength" class="indexForChildren">
          <div v-for="index in childrenLength" :class="{indexSelected: index === currentSelect + 1}" @click="clickChangeSelected(index - 1)"><span>{{index}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: "swipe",
    props:{
      selected:{
        type: Number,
        default: 0
      },
      loop:{},
      reverse:{},
      needForward:{}
    },
    data(){
      return {
        childrenLength: 0,
        currentSelect: 0,
        openLoop: true,
        clearT: null,
        lastSelectedNum: null,
        isClickChangeSelected: false,
        originSiteX: null,
        endSiteX: null,
        originSiteY: null,
        endSiteY: null,
      }
    },
    computed:{
      isNeedForward(){
        return typeof(this.needForward) !== "undefined"
      },
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
      this.getChildrenLength()
      this.updateChildren()
      if(this.isInitOpenLoop){
        this.loopAll()
      }
    },
    updated() {
      this.updateChildren()
    },
    methods:{
      Forward(){
        let index = 0
        if(this.currentSelect - 1 < 0){
          index = this.childrenLength - 1
        }else{
          index = this.currentSelect - 1
        }
        this.clickChangeSelected(index)
        this.$nextTick(()=>{
          this.openTimer()
        })
      },
      Backward(){
        let index = 0
        if(this.currentSelect + 1 > this.childrenLength - 1){
          index = 0
        }else{
          index = this.currentSelect + 1
        }
        this.clickChangeSelected(index)
        this.$nextTick(()=>{
          this.openTimer()
        })
      },
      onTouchEnd(e){
        this.endSiteX  = e.changedTouches[0].clientX
        this.endSiteY  = e.changedTouches[0].clientY
        if(Math.abs(this.endSiteX - this.originSiteX) / Math.sqrt(3) > Math.abs(this.endSiteY - this.originSiteY)){
          if(this.endSiteX - this.originSiteX>0){
            this.Forward()
          }else{
            this.Backward()
          }
        }
      },
      onTouchMove(e){
      },
      onTouchStart(e){
        this.closeTimer()
        this.originSiteX  = e.touches[0].clientX
        this.originSiteY  = e.touches[0].clientY
      },
      getChildrenLength(){
        let length = 0
        this.$children.forEach(function (child) {
          if(child.$vnode.componentOptions.tag === "g-swipe-item"){
            length ++
          }
        })
        this.childrenLength = length
      },
      updateChildren(n = this.currentSelect){
        this.currentSelect = n
        let indexNum = 0
        this.$children.forEach((el,index)=>{
          if(el.$vnode.componentOptions.tag === "g-swipe-item"){
            el.swipeIndexNum = indexNum
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
              console.log(1111)
              console.log(n);
              el.currentSelect = n
            })
            indexNum ++
          }
        })
      },
      clickChangeSelected(index){
        this.isClickChangeSelected = true
        this.basicChangeSelected(index)
        this.closeTimer()
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
          let maxNum = this.childrenLength - 1
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
    },
    components:{
      'g-icon': Icon
    }
  }
</script>

<style lang="scss" scoped>
  *{
    box-sizing: border-box;
  }
  .g-swipe{
    width: 100%;
    height: 100%;
    display: inline-block;
    .g-swipe-window{
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
        .spanForward,.spanBackward {
          height: 100%;
          width: 10%;
          font-size: 40px;
          text-align: center;
          vertical-align: center;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }
        .spanForward{
          left: 0;
          top: 0;
        }
        .spanBackward{
          right: 0;
          top: 0;
        }
      }
      .g-swipe-inner{
        width: 100%;
        height: 100%;
        position: relative;
        .indexForChildren{
          position: absolute;
          left: 50%;
          bottom: 0;
          display: flex;
          transform: translate(-50%);
          >div{
            background-color: white;
            width: 15px;
            height: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin: 5px;
            cursor: pointer;
            font-size: 12px;
            &.indexSelected{
              background-color: #666;
            }
          }
        }
      }
    }
</style>
