<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  let validate = value => {
    if( typeof(value) === "string" ){
      value = JSON.parse(value)
    }
    console.log(value);
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
    name: "g-col",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      iPad: {
        type: [Object,String],
        validate
      },
      narrowPC: {
        type: [Object,String],
        validate
      },
      pc: {
        type: [Object,String],
        validate
      },
      widePC: {
        type: [Object,String],
        validate
      }
    },
    data() {
      return {
        gutter: 0,
        iPadObj: this.iPad,
        narrowPCObj: this.narrowPC,
        pcObj: this.pc,
        widePCObj: this.widePC
      }
    },
    created(){
      if(this.narrowPCObj && typeof (this.narrowPCObj ) === 'string') {
        this.narrowPCObj = JSON.parse(this.narrowPCObj)
      }
      if(this.iPadObj && typeof (this.iPadObj ) === 'string') {
        this.iPadObj = JSON.parse(this.iPadObj)
      }
      if(this.pcObj && typeof (this.pcObj ) === 'string') {
        this.pcObj = JSON.parse(this.pcObj)
      }
      if(this.widePCObj && typeof (this.widePCObj ) === 'string') {
        this.widePCObj = JSON.parse(this.widePCObj)
      }
    },
    computed: {
      colClass: function () {
        let {span, offset, iPadObj, narrowPCObj, pcObj, widePCObj} = this;
        let postfixClassArray = [{type:iPadObj,postfix:'iPad'},{type:narrowPCObj,postfix:'narrowPC'},{type:pcObj,postfix:'pc'},{type:widePCObj,postfix:'widePC'}]
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
