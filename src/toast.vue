<template>
  <div class="g-toast">
    <slot></slot>
    <span class="closeToast" v-if="closeButton" @click="clickClose">
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
      }
    },
    mounted() {
      if (this.isAutoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    methods: {
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
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.74);
  .g-toast {display: flex;align-items: center;color: white;font-style: $font-size;height: $toast-height;line-height: 1.8;position: fixed;top: 0;left: 50%;transform: translateX(-50%);background: $toast-bg;box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);padding: 0 16px;border-radius: 4px;
    .closeToast{margin-left: 12px;padding-left: 12px;border-left: 1px solid #ccc;line-height: 40px;
    }
  }

</style>
