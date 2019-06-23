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

    }
});



/**
 *  单元测试
 *  @module unitTest
 */
import chai from 'chai'
const  expect = chai.expect
{
    /**
     * @file: app.js
     * @see iconName
     * @description 测试iconName的入参
     * @author: zl
     * @date: 2019/6/23
     * @contact: 908347816@qq.com
     */
    const constructor = Vue.extend(Button)
    const button = new constructor({
        propsData: {
            iconName: 'set'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-set')
}

{
    /**
     * @file: app.js
     * @see loading
     * @description 测试loading的入参
     * @author: zl
     * @date: 2019/6/23
     * @contact: 908347816@qq.com
     */
    const constructor = Vue.extend(Button)
    const button = new constructor({
        propsData: {
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
}

{
    /**
     * @file: app.js
     * @see loading
     * @description 测试loading的入参
     * @author: zl
     * @date: 2019/6/23
     * @contact: 908347816@qq.com
     */
    const constructor = Vue.extend(Button)
    const button = new constructor({
        propsData: {
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
}






