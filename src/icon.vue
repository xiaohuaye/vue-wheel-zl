<template>
  <svg class="icon" :class="{loading:isLoading}" aria-hidden="true">
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>

<script>
  import  './svg'
  export default {
    name: "icon",
    props: {
      icon: String
    },
    computed: {
      isLoading: function () {
        if( this.icon === 'loading'){
          return true
        }else {
          return false
        }
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @keyframes loading-dash {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
  }

  .icon {width: 1em;height: 1em;vertical-align: -0.15em;fill: currentColor;overflow: hidden;}

  .loading {animation: 1s loading-dash linear infinite;}
</style>
