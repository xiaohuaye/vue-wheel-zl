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
      phone: {
        type: Object,
        validate
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
        let {span, offset, phone, iPad, narrowPC, pc, widePC} = this;
        return [span && `col-${span}`, offset && `offset-${offset}`,
          phone && [`col-phone-${phone.span}`],
          iPad && [`col-iPad-${iPad.span}`],
          narrowPC && [`col-narrowPC-${narrowPC.span}`],
          pc && [`col-pc-${pc.span}`],
          widePC && [`col-widePC-${widePC.span}`],
        ]

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

  @media (max-width: 576px) {
    $class-slug: col-phone;

    @for $n from 1 through 24 {
      .col.#{$class-slug}-#{$n} {
        width: ($n / 24) * 100%
      }
    }

    $class-slug: col-phone-offset;

    @for $n from 1 through 24 {
      .col.#{$class-slug}-#{$n} {
        width: ($n / 24) * 100%
      }
    }
  }

  @media (min-width: 576px) and(max-width: 768px) {
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

  @media (min-width: 768px) and(max-width: 992px) {
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

  @media (min-width: 992px) and(max-width: 1200px) {
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
