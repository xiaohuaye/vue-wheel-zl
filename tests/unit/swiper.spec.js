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
  it('选谁谁出现',(done)=>{
    const wrapper = mount(Swipe,{
      propsData:{
        selected: 1,
        timeDelay: 50
      },
      slots:{
        default:`<g-swipe-item class='box1'>1</g-swipe-item>
        <g-swipe-item class='box2'>2</g-swipe-item>
        <g-swipe-item class='box3'>3</g-swipe-item>`
      }
    })
    setTimeout(()=>{
      expect(wrapper.find('.box2').isVisible()).to.eq(true)
      done()
    },100)
  })
  it('点谁谁出现',(done)=>{
    const wrapper = mount(Swipe,{
      propsData:{
        timeDelay: 50,
        needNavigation:{}
      },
      slots:{
        default:`<g-swipe-item class='box1'>1</g-swipe-item>
        <g-swipe-item class='box2'>2</g-swipe-item>
        <g-swipe-item class='box3'>3</g-swipe-item>`
      }
    })
    setTimeout(()=>{
      console.log(wrapper.html());
      console.log(wrapper.find('.indexForChildren>div:nth-child(3)').element);
      wrapper.find('.indexForChildren>div:nth-child(3)').trigger('click')
      setTimeout(()=>{
        expect(wrapper.find('.box3').isVisible()).to.eq(true)
        done()
      },55)
    },55)
  })
  it('自动播放',(done)=>{
    const wrapper = mount(Swipe,{
      propsData:{
        loop: {},
        timeDelay: 50
      },
      slots:{
        default:`<g-swipe-item class='box1'>1</g-swipe-item>
        <g-swipe-item class='box2'>2</g-swipe-item>
        <g-swipe-item class='box3'>3</g-swipe-item>`
      }
    })
    setTimeout(()=>{
      expect(wrapper.find('.box1').isVisible()).to.eq(true)
      setTimeout(()=>{
        expect(wrapper.find('.box1').exists()).to.eq(false)
        done()
      },55)
    },55)
  })
  it('反向',()=>{
    const wrapper = mount(Swipe,{
      propsData:{
        loop: {},
        timeDelay: 50,
        reverse:{},
        selected: 1
      },
      slots:{
        default:`<g-swipe-item class='box1'>1</g-swipe-item>
        <g-swipe-item class='box2'>2</g-swipe-item>
        <g-swipe-item class='box3'>3</g-swipe-item>`
      }
    })
    Vue.nextTick(()=>{
      expect(wrapper.find('.box1').classes().indexOf('reverse')>0).to.eq(true)
    })
  })
  it('前进后退',(done)=>{
    const wrapper = mount(Swipe,{
      propsData:{
        timeDelay: 50,
        needForward:{}
      },
      slots:{
        default:`<g-swipe-item class='box1'>1</g-swipe-item>
        <g-swipe-item class='box2'>2</g-swipe-item>
        <g-swipe-item class='box3'>3</g-swipe-item>`
      }
    })
    Vue.nextTick(()=>{
      expect(wrapper.find('.spanBackward').exists()).to.eq(true)
      expect(wrapper.find('.spanForward').exists()).to.eq(true)
      wrapper.find('.spanForward').trigger('click')
        setTimeout(()=>{
          expect(wrapper.find('.box1').exists()).to.eq(false);
          done()
        },55)
    })
  })
})
