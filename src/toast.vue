<template>
  <div class="g-toast" ref="wrapper" :class="toastPositionClass">
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
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }

    },
    mounted() {
      this.styleChange()
      this.autoCloseHandle()
    },
    computed: {
      toastPositionClass() {
        return `toast-${this.position}`
      }
    },
    methods: {
      styleChange() {
        /**
         *  样式的改变 -- line元素height
         */
        if(this.$refs.line){
          this.$nextTick(() => {
            this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height + 'px'
          })
        }
      },
      autoCloseHandle() {
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
        this.$emit('close')
        this.$destroy()
      },
      clickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
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
  @keyframes toast-fade-in {
    0%{opacity: 0;}
    100%{opacity: 1;}
  }
  .g-toast {display: flex;align-items: center;min-height: $toast-min-height; color: white;font-style: $font-size;line-height: 1.8;position: fixed;left: 50%;background: $toast-bg;box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);padding: 0 16px;border-radius: 4px;
    animation: toast-fade-in 1s;

    .closeToast {padding-left: 12px;flex-shrink: 0;}

    .message {padding: 5px;}

    .line {border-left: 1px solid white;margin-left: 16px;}

    &.toast-top {
      top: 10%;
      transform: translateX(-50%);
    }

    &.toast-bottom {
      bottom: 10%;
      transform: translateX(-50%);
    }

    &.toast-middle {
      top: 50%;
      transform: translateX(-50%);
    }
  }

</style>
