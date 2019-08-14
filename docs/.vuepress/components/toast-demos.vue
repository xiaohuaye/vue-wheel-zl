<template>
    <div>
      <g-button @click="handleClick">点击</g-button>
    </div>
</template>

<script>
  import Toast from '../../../src/toast'
  import Button from '../../../src/button'
  import Vue from 'vue'
  import PluginToast from '../../../src/plugin-toast'

  Vue.use(PluginToast);

  export default {
    name: "toast-demos",
    components:{
      'g-toast': Toast,
      'g-button': Button
    },
    methods:{
      handleClick(){
        console.log(Vue)
        Vue.$toast('toast')
      }
    }
  }
</script>

<style scoped>

</style>
