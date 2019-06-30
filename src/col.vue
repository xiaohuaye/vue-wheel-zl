<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "zl-col",
    props:{
      span:{
         type: [Number,String]
      }
    }
  }
</script>

<style scoped lang="scss">
  .col{
    height: 100px;
    background: gray;
    width: 50%;
    border: 1px solid red;
  }

  $class-slug: col !default;

  @for $n from 1 through 24 {
    .col.#{$class-slug}-#{$n}{
      width: ($n / 24) * 100%
    }
  }
</style>
