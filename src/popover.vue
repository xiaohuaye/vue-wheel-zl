<template>
  <div class="wrapper">
    <div class="popTouch" @click="ShowPopHandle" @mouseenter="ShowPopHandle" @mouseleave="ShowPopHandle"  ref="popovertouch">
      <slot></slot>
    </div>
    <div v-if="isShowPop" ref="popovercontent" class="popover-content" :class=`${position}-position`>
      <slot name="popover"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "popover",
    data(){
      return {
        isShowPop: false,
      }
    },
    props:{
      position:{
        type: String,
        default: 'top',
        validator(value){
          return ['top','bottom','left','right'].indexOf(value)>=0
        }
      },
      trigger:{
        type: String,
        default: 'click',
        validator(value){
          return ['click','hover'].indexOf(value)>=0
        }
      }
    },
    mounted(){

    },
    methods:{
      ShowPopHandle: function (event) {
        if (!(event.type === 'mouseenter' && this.trigger === 'hover' || event.type === 'click' && this.trigger === 'click' || event.type === 'mouseleave' && this.trigger === 'hover')) return
        let {left, right, top, bottom, width} = event.target.getBoundingClientRect()
        this.isShowPop = !this.isShowPop
        this.$nextTick(() => {
          let popDom = this.$refs.popovercontent
          let popTouch = this.$refs.popovertouch
          this.setStyleToPop(left, top, width, popDom)
          this.showOrClosePop(event, popDom, popTouch)
        })
      },
      setStyleToPop(left,top,width,popDom){
        if(popDom){
          switch (this.position === 'right') {
            case false:
              popDom.style.left = `${left + window.scrollX}px`
              popDom.style.top = `${top + window.scrollY}px`
              break
            case true:
              popDom.style.left = `${left + width + window.scrollX}px`
              popDom.style.top = `${top + window.scrollY}px`
              break
          }
        }
      },
      showOrClosePop(event,popDom,popTouch){
        let eventName = event.type === 'click'?'click':'mouseenter'
        let windowClosePop = (e)=>{
          if(popTouch.contains(e.target) && this.isShowPop  || popDom.contains(e.target)) return;
          this.isShowPop = false
          document.removeEventListener(eventName,windowClosePop)
        }
        if(this.isShowPop){
          document.body.append(popDom)
          document.addEventListener(eventName, windowClosePop)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #333;
  $border-radius: 4px;
  .wrapper{
    display: inline-block;
    .popTouch{
      display: inline-block;
    }
  }
  .popover-content{
    display: inline-block;
    position: absolute;
    border: 1px solid $border-color;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.2));
    background: white;
    border-radius: $border-radius;
    box-shadow: 0 0 3px rgba(0,0,0,0.2);
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before, &::after{
      content: '';
      display: block;
      border: 8px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      top: 100%;
      left: 10px;
    }
    &::after{
      border: 8px solid transparent;
    }
    &.top-position{
      transform: translate(0,calc(-100% - 10px) );
      &::before, &::after{
        border-top-color: black;
        border-bottom: none;
        top: 100%;
        left: 10px;
      }
      &::after{
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }
    &.bottom-position{
      transform: translate(0,calc(100% + 10px) );
      &::before, &::after{
        border-bottom-color: black;
        border-top: none;
        top: 0;
        left: 10px;
        transform: translateY(-100%);
      }
      &::after{
        border-bottom-color: white;
        top: calc(1.2px);
      }
    }
    &.left-position{
      transform: translate(calc(-100% - 10px) ,0);
      &::before, &::after{
        border-left-color: black;
        border-right: none;
        top: 0;
        left: 100%;
        transform: translate(0%,50%);
      }
      &::after{
        border-left-color: white;
        left: calc(100% - 1.2px);
      }
    }
    &.right-position{
      transform: translate(calc(10px) ,0);
      &::before, &::after{
        border-right-color: black;
        border-left: none;
        top: 0;
        left: 0;
        transform: translate(-100% , 50%);
      }
      &::after{
        border-right-color: white;
        left: calc(1.2px);
      }
    }
  }

</style>
