<template>
  <div class="col" :class="[ span && `col-${span}`, offset &&`offset-${offset}`]"
       :style="colStyle">
    <div style="border:1px solid green">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "zl-col",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colStyle: function () {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    height: 100px;
    width: 50%;
    border: 1px solid red;
    padding: 0 10px;
  }

  $class-slug: col !default;

  @for $n from 1 through 24 {
    .col.#{$class-slug}-#{$n} {
      width: ($n / 24) * 100%
    }
  }

  $class-slug: offset;

  @for $n from 1 through 24 {
    .col.#{$class-slug}-#{$n} {
      margin-left: ($n / 24) * 100%
    }
  }
</style>
