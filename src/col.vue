<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  let validate = value => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }

  export default {
    name: "zl-col",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      iPad: {
        type: Object,
        validate
      },
      narrowPC: {
        type: Object,
        validate
      },
      pc: {
        type: Object,
        validate
      },
      widePC: {
        type: Object,
        validate
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass: function () {
        let {span, offset, iPad, narrowPC, pc, widePC} = this;
        let postfixClassArray = [{type:iPad,postfix:'iPad'},{type:narrowPC,postfix:'narrowPC'},{type:pc,postfix:'pc'},{type:widePC,postfix:'widePC'}]
        let finClassArray = [span && `col-${span}`, offset && `offset-${offset}`]
        postfixClassArray.map(item=>{
          if(item.type && item.type.span){
            finClassArray.push(`col-${item.postfix}-${item.type.span}`)
          }
          if(item.type && item.type.offset){
            finClassArray.push(`offset-${item.postfix}-${item.type.offset}`)
          }
        })
        return finClassArray
      },
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

  /**
   * phone的样式
   */
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

  /**
   * iPad的样式
   */
  @media (min-width: 576px){
    $class-slug: col-iPad;

    @for $n from 1 through 24 {
      .col.#{$class-slug}-#{$n} {
        width: ($n / 24) * 100%
      }
    }

    $class-slug: col-iPad-offset;

    @for $n from 1 through 24 {
      .col.#{$class-slug}-#{$n} {
        width: ($n / 24) * 100%
      }
    }
  }

  /**
   *  narrowPC的样式
   */
  @media (min-width: 768px) {
    $class-slug: col-narrowPC;

    @for $n from 1 through 24 {
      .col.#{$class-slug}-#{$n} {
        width: ($n / 24) * 100%
      }
    }

    $class-slug: col-narrowPC-offset;

    @for $n from 1 through 24 {
      .col.#{$class-slug}-#{$n} {
        width: ($n / 24) * 100%
      }
    }
  }
  /**
   * pc的样式
   */
  @media (min-width: 992px) {
    $class-slug: col-pc;

    @for $n from 1 through 24 {
      .col.#{$class-slug}-#{$n} {
        width: ($n / 24) * 100%
      }
    }

    $class-slug: col-pc-offset;

    @for $n from 1 through 24 {
      .col.#{$class-slug}-#{$n} {
        width: ($n / 24) * 100%
      }
    }
  }

  /**
   * widePc的样式
   */
  @media (min-width: 1200px) {
    $class-slug: col-widePC;

    @for $n from 1 through 24 {
      .col.#{$class-slug}-#{$n} {
        width: ($n / 24) * 100%
      }
    }

    $class-slug: col-widePC-offset;

    @for $n from 1 through 24 {
      .col.#{$class-slug}-#{$n} {
        width: ($n / 24) * 100%
      }
    }
  }


</style>
