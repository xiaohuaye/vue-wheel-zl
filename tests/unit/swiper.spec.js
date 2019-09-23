import chai,{expect} from 'chai';
import {mount, shallowMount} from "@vue/test-utils";
import Swipe from "@/swipe";
import swipeItem from "@/swipe-item"
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Vue from 'vue'

chai.use(sinonChai);

describe('swipe组件存在',()=>{
  it('存在', () => {
    expect(Swipe).to.exist
  })
  it('swipe默认时第一个',(done)=>{
    Vue.component('g-swipe-item',swipeItem)
    const wrapper = mount(Swipe,{
      propsData:{
      },
      slots:{
        default:`<g-swipe-item class='box1'>1</g-swipe-item>
        <g-swipe-item class='box2'>2</g-swipe-item>
        <g-swipe-item class='box3'>3</g-swipe-item>`
      }
    })
    setTimeout(()=>{
      expect(wrapper.find('.box1').isVisible()).to.eq(true)
      done()
    },100)
  })
})
