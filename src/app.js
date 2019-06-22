import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-icon',Icon)
Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el: '#app',
    data:{
        isLoading1: false,
        isLoading2: false,
        isLoading3: false,
        isLoading4: false,
        isLoading5: false
    },
    methods: {
        submitSthOne(){
            this.isLoading1 = true
            setTimeout(()=>{
                this.isLoading1 = false
            },2000)
        },
        submitSthTwo(){
            this.isLoading2 = true
            setTimeout(()=>{
                this.isLoading2 = false
            },2000)
        },
        submitSthThree(){
            this.isLoading3 = true
            setTimeout(()=>{
                this.isLoading3 = false
            },2000)
        },
        submitSthFour(){
            this.isLoading4 = true
            setTimeout(()=>{
                this.isLoading4 = false
            },2000)
        },
        submitSthFive(){
            this.isLoading5 = true
            setTimeout(()=>{
                this.isLoading5 = false
            },2000)
        },

    }
})
