import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('g-icon',Icon)
Vue.component('g-button',Button)

new Vue({
    el: '#app',
    data:{
        isLoading1: false,
        isLoading2: false,
        isLoading3: false
    },
    methods: {
        submitSthOne(){
            console.log('submitSthOne被点击了')
            this.isLoading1 = true
            setTimeout(()=>{
                this.isLoading1 = false
            },2000)
        },
        submitSthTwo(){
            console.log('submitSthTwo被点击了')
            this.isLoading2 = true
            setTimeout(()=>{
                this.isLoading2 = false
            },2000)
        },
        submitSthThree(){
            console.log('submitSthThree被点击了')
            this.isLoading3 = true
            setTimeout(()=>{
                this.isLoading3 = false
            },2000)
        }
    }
})
