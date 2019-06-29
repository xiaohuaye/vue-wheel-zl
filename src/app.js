import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from  './input'

Vue.component('g-icon',Icon)
Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)

new Vue({
    el: '#app',
    data:{
        isLoading1: false,
        isLoading2: false,
        isLoading3: false,
        isLoading4: false,
        isLoading5: false
    },
    /**
     *  函数定义
     *  @module function
     */
    methods: {
        submitSthOne(){
            /**
             * submitSthOne模拟事件回调
             * @file: app.js
             * @method submitSthOne
             * @description: submitSthOne模拟事件回调
             * @return {undefined} undefined
             * @author: zl
             * @date: 2019/6/22
             * @contact: 908347816@qq.com
             */

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
        inputChange(e){
            console.log(e.target.value);
        }
    }
});





