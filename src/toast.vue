<template>
  <div class="g-toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "zl-toast"
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0,0,0,0.74);
  .g-toast{display: flex;align-items: center;color: white;font-style: $font-size;height: $toast-height;line-height: 1.8;position: fixed;top: 0;left: 50%;transform: translateX(-50%);
    background: $toast-bg;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    padding: 0 16px;
    border-radius: 4px;
  }
</style>
