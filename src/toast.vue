<template>
  <div class="g-toast" ref="wrapper" :class="toastPositionClass">
    <div v-if="enableHtml" v-html="$slots.default[0]"></div>
    <div class="message" v-else-if="!enableHtml">
      <slot></slot>
    </div>
    <div class="line" v-if="!isAutoClose" ref="line"></div>
    <span class="closeToast" v-if="!isAutoClose" @click="clickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'g-toast',
  props: {
    isAutoClose: {
      type: [Boolean, Number],
      default: 2,
      validate (value) {
        return typeof value === 'boolean' || typeof value === 'number'
      }
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
      validator (value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }

  },
  mounted () {
    this.styleChange()
    this.autoCloseHandle()
  },
  computed: {
    toastPositionClass () {
      return `toast-${this.position}`
    }
  },
  methods: {
    styleChange () {
      /**
         *  样式的改变 -- line元素height
         */
      if (this.$refs.line) {
        this.$nextTick(() => {
          this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height + 'px'
        })
      }
    },
    autoCloseHandle () {
      /**
         * 自动关闭
         */
      if (this.isAutoClose) {
        setTimeout(() => {
          this.close()
        }, this.isAutoClose * 1000)
      }
    },
    close () {
      /**
         * @method 销毁toast组件实例
         */
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    clickClose () {
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
  $toast-animation-delay: 0.3s;
  @keyframes toast-fade-in {
    0%{opacity: 0;}
    100%{opacity: 1;}
  }
  @keyframes toast-slide-down {
    0%{opacity: 0;top:-10%;}
    100%{opacity: 1;top:10%;}
  }
  @keyframes toast-slide-up {
    0%{opacity: 0;bottom:-10%}
    100%{opacity: 1;bottom: 10%}
  }
  .g-toast {display: flex;align-items: center;min-height: $toast-min-height; color: white;font-style: $font-size;line-height: 1.8;position: fixed;left: 50%;background: $toast-bg;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);padding: 0 16px;border-radius: 4px;

    .closeToast {padding-left: 12px;flex-shrink: 0;}

    .message {padding: 5px;}

    .line {border-left: 1px solid white;margin-left: 16px;}

    &.toast-top {
      top: 10%;
      transform: translateX(-50%);
      animation: toast-slide-down $toast-animation-delay;
    }

    &.toast-bottom {
      bottom: 10%;
      transform: translateX(-50%);
      animation: toast-slide-up $toast-animation-delay;
    }

    &.toast-middle {
      top: 50%;
      transform: translate(-50%,-50%);
      animation: toast-fade-in $toast-animation-delay;
    }
  }

</style>
