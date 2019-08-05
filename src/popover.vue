<template>
  <div class="wrapper">
    <div class="popTouch" @click="ShowPopHandle" @mouseenter="ShowPopHandle" @mouseleave="ShowPopHandle"  ref="popovertouch">
      <slot></slot>
    </div>
    <div v-if="isShowPop" ref="popovercontent" class="popover-content" :class=`${position}-position`>
      <slot name="popover" :closePop="closePop"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "g-popover",
    data(){
      return {
        isShowPop: false,
        popDom : null,
        popTouch: null
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
      this.popTouch = this.$refs.popovertouch
    },
    methods:{
      ShowPopHandle: function (event) {
        if (!(event.type === 'mouseenter' && this.trigger === 'hover' || event.type === 'click' && this.trigger === 'click' || event.type === 'mouseleave' && this.trigger === 'hover')) return
        if (this.isShowPop) {
          this.closePop(event)
        } else {
          this.openPop(event)
        }
      },
      openPop(event){
        this.isShowPop = true
        this.$nextTick(() => {
          this.setStyleToPop(event)
          let eventName = event.type === 'click'?'click':'mouseenter'
          document.body.append(this.popDom)
          document.addEventListener(eventName, this.windowClosePopListener)
        })
      },
      windowClosePopListener(event){
        if(this.popTouch.contains(event.target) && this.isShowPop  || this.popDom.contains(event.target)) return;
        this.closePop(event)
      },
      closePop(event){
        this.isShowPop = false
        let eventName = event? event.type === 'click'?'click':'mouseenter' : 'click'
        document.removeEventListener(eventName,this.windowClosePopListener)
      },
      setStyleToPop(event){
        this.popDom = this.$refs.popovercontent
        let {left, top, width} = event.target.getBoundingClientRect()
        switch (this.position === 'right') {
          case false:
            this.popDom.style.left = `${left + window.scrollX}px`
            this.popDom.style.top = `${top + window.scrollY}px`
            break
          case true:
            this.popDom.style.left = `${left + width + window.scrollX}px`
            this.popDom.style.top = `${top + window.scrollY}px`
            break
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
