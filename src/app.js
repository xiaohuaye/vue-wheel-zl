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
    created(){
        /**
         * 检测手动触发事件
         * @file: app.js
         * @method created
         * @description: 使用dispatchEvent触发事件
         * @author: zl
         * @date: 2019/6/30
         * @contact: 908347816@qq.com
         */

        setTimeout(()=>{
            let event = new Event('change');
            let inputElement = this.$el.querySelector('.testEvent input')
            inputElement.dispatchEvent(event)
        },3000)
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
            console.log(e);
        }
    }
});





