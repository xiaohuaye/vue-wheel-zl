<template>
  <div class="g-toast" ref="wrapper">
    <div v-if="enableHtml" v-html="$slots.default[0]"></div>
    <div class="message" v-else-if="!enableHtml">
      <slot></slot>
    </div>
    <div class="line" v-if="!isAutoClose" ref="line"></div>
    <span class="closeToast" v-if="!isAutoClose" @click="clickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "zl-toast",
    props: {
      isAutoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 5
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml:{
        type: Boolean,
        default: false
      },
    },
    mounted() {
      this.styleChange()
      this.autoCloseHandle()
    },
    methods: {
      styleChange(){
        /**
         *  样式的改变 -- line元素height
         */
        this.$nextTick(()=>{
          this.$refs.line.style.height =  this.$refs.wrapper.getBoundingClientRect().height + 'px'
        })
      },
      autoCloseHandle(){
        /**
         * 自动关闭
         */
        if (this.isAutoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      close() {
        /**
         * @method 销毁toast组件实例
         */
        this.$el.remove()
        this.$destroy()
      },
      clickClose(){
        this.close()
        if(this.closeButton && typeof this.closeButton.callback === 'function'){
          this.closeButton.callback(this)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.74);
  .g-toast {display: flex;align-items: center;min-height:$toast-min-height; color: white;font-style: $font-size;line-height: 1.8;position: fixed;top: 0;left: 50%;transform: translateX(-50%);background: $toast-bg;box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);padding: 0 16px;border-radius: 4px;
    .closeToast{padding-left: 12px;flex-shrink: 0;
    }
    .message{
      padding: 5px;
    }
    .line{
      height: 100%;
      border-left: 1px solid white;
      margin-left: 16px;
    }
  }

</style>