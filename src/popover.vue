<template>
  <div class="wrapper">
    <div class="popTouch" @click="ShowPopHandle" ref="popovertouch">
      <slot></slot>
    </div>
    <div v-if="isShowPop" ref="popovercontent" class="popover-content">
      <slot name="popover"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "popover",
    data(){
      return {
        isShowPop: false
      }
    },
    mounted(){

    },
    methods:{
      ShowPopHandle(event){
        let {left,right,top,bottom} = event.target.getBoundingClientRect()
        this.isShowPop = !this.isShowPop
        this.$nextTick(()=>{
          let popDom = this.$refs.popovercontent
          let popTouch = this.$refs.popovertouch
          this.setStyleToPop(left,top,popDom)
          this.showOrClosePop(event,popDom,popTouch)
        })
      },
      setStyleToPop(left,top,popDom){
        if(popDom){
          popDom.style.left = `${left + window.scrollX}px`
          popDom.style.top = `${top + window.scrollY}px`
        }
      },
      showOrClosePop(event,popDom,popTouch){
        let windowClosePop = (e)=>{
          if(popTouch.contains(e.target) && this.isShowPop  || popDom.contains(e.target)) return;
          this.isShowPop = false
          document.removeEventListener('click',windowClosePop)
        }
        if(this.isShowPop){
          document.body.append(popDom)
          document.addEventListener('click', windowClosePop)
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
    transform: translate(0,-100%);
    border: 1px solid $border-color;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.2));
    background: white;
    border-radius: $border-radius;
    box-shadow: 0 0 3px rgba(0,0,0,0.2);
    padding: 0.5em 1em;
    margin-top: -10px;
    max-width: 20em;
    word-break: break-all;
    &::before, &::after{
      content: '';
      display: block;
      border: 10px solid transparent;border-top-color: black;
      width: 0;
      height: 0;
      position: absolute;
      top: 100%;
      left: 10px;
    }
    &::after{
      border: 10px solid transparent;border-top-color: white;
      top: calc(100% - 1px);
    }
  }

</style>
