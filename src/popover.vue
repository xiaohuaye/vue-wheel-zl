<template>
  <div class="wrapper">
    <div class="popTouch" @click="isShowPopHandle">
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
      isShowPopHandle(event){
        let {left,right,top,bottom} = event.target.getBoundingClientRect()
        this.isShowPop = !this.isShowPop
        this.$nextTick(()=>{
          let popDom = this.$refs.popovercontent
          if(popDom){
            popDom.style.left = `${left + window.scrollX}px`
            popDom.style.top = `${top + window.scrollY}px`
            popDom.style.transform = `translate(0,-100%)`
          }
          let windowClosePop = (e)=>{
            if(event.target === e.target && this.isShowPop  || popDom.contains(e.target)) return;
            this.isShowPop = false
            document.removeEventListener('click',windowClosePop)
          }
          if(this.isShowPop){
            document.body.append(popDom)
            document.addEventListener('click', windowClosePop)
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrapper{
    .popTouch{
      display: inline-block;
      border: 1px solid red;
    }
  }
  .popover-content{
    border: 1px solid blue;
    display: inline-block;
    position: absolute;
  }

</style>
