import chai,{expect} from 'chai';
import {mount, shallowMount} from "@vue/test-utils";
import Cascade from "@/cascade";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import db from '../../src/db';
import Vue from 'vue'

chai.use(sinonChai);

describe('Cascade组件',()=>{
  it('存在', () => {
    expect(Cascade).to.be.ok
  })
  it('同步点开', (done) => {
    const wrapper = mount(Cascade,{
      propsData: {
        dataSource: [
          {
            name: '浙江',
            children: [
              {
                name: '杭州',
                children: [
                  { name: '上城',
                    children:[
                      {name: '落雨街道',
                        children:[
                          {name: '分享小区'},
                          {name: '萨德小区'}
                        ]
                      },
                      {name: '太阳街道'}
                    ]
                  },
                  { name: '下城' },
                  { name: '江干' }
                ]
              },
              { name: '嘉兴',
                children: [
                  { name: '南湖区' },
                  { name: '秀洲区' }
                ]
              }
            ]
          },
          {
            name: '福建',
            children: [
              { name: '福州',
                children: [
                  { name: '鼓楼区' },
                  { name: '将台区' },
                  { name: '仓山区' }
                ] }
            ]
          },
          {
            name: '安徽',
            children: [
              { name: '合肥',
                children: [
                  { name: '瑶海' },
                  { name: '庐阳' }
                ] }
            ]
          },
        ]
      }
    })
    const useElement = wrapper.find('.trigger')
    expect(wrapper.find('.popover').isVisible()).to.eq(false)
    useElement.trigger('click')
    Vue.nextTick(()=>{
      expect(wrapper.find('.popover').isVisible()).to.eq(true)
      let useElementChild1 =  wrapper.find('.sourceItemName')
      expect(wrapper.find('.children1').isEmpty()).to.eq(true)
      useElementChild1.trigger('click')
      Vue.nextTick(()=>{
        expect(wrapper.find('.children1').isEmpty()).to.eq(false)
        done()
      })
    })
  })
  it('异步点开', (done) => {
    function ajax(parentId = 0) {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(db.filter((item) => item.parent_id === parentId))
        })
      })
    }
    let source = null
    ajax().then((res)=>{
      source= res.map((item)=>{
        item.children = []
        return item
      })
    }).then(()=>{
      const wrapper = mount(Cascade,{
        propsData: {
          dataSource: source,
          callback:function (obj) {
            return ajax(obj.id)
          },
        }
      })
      wrapper.vm.$nextTick(()=>{
        const useElement = wrapper.find('.trigger')
        expect(wrapper.find('.popover').isVisible()).to.eq(false)
        useElement.trigger('click')
        Vue.nextTick(()=>{
          expect(wrapper.find('.popover').isVisible()).to.eq(true)
          let useElementChild1 =  wrapper.find('.sourceItemName')
          expect(wrapper.find('.parent1').isVisible()).to.eq(false)
          useElementChild1.trigger('click')
          Vue.nextTick(()=>{
            expect(useElementChild1.contains('.loading')).to.eq(true)
            setTimeout(()=>{
              expect(wrapper.find('.parent1').isVisible()).to.eq(true)
              done()
            },100)
          })
        })
      })
    })
  })
  it('点击外面关闭pop', (done) => {
    const wrapper = mount(Cascade,{
      propsData: {
        dataSource: [
          {
            name: '浙江',
            children: [
              {
                name: '杭州',
                children: [
                  { name: '上城',
                    children:[
                      {name: '落雨街道',
                        children:[
                          {name: '分享小区'},
                          {name: '萨德小区'}
                        ]
                      },
                      {name: '太阳街道'}
                    ]
                  },
                  { name: '下城' },
                  { name: '江干' }
                ]
              },
              { name: '嘉兴',
                children: [
                  { name: '南湖区' },
                  { name: '秀洲区' }
                ]
              }
            ]
          },
          {
            name: '福建',
            children: [
              { name: '福州',
                children: [
                  { name: '鼓楼区' },
                  { name: '将台区' },
                  { name: '仓山区' }
                ] }
            ]
          },
          {
            name: '安徽',
            children: [
              { name: '合肥',
                children: [
                  { name: '瑶海' },
                  { name: '庐阳' }
                ] }
            ]
          },
        ]
      }
    })
    const useElement = wrapper.find('.trigger')
    Vue.nextTick(()=>{
      expect(wrapper.find('.popover').isVisible()).to.eq(false)
      useElement.trigger('click')
      Vue.nextTick(()=>{
        expect(wrapper.find('.popover').isVisible()).to.eq(true)
        useElement.trigger('click')
        Vue.nextTick(()=>{
          expect(wrapper.find('.popover').isVisible()).to.eq(false)
          done()
        })
      })
    })
  })

  it('不可点击', (done) => {
    const wrapper = mount(Cascade,{
      propsData: {
        dataSource: [
          {
            name: '浙江',
            children: [
              {
                name: '杭州',
                children: [
                  { name: '上城',
                    children:[
                      {name: '落雨街道',
                        children:[
                          {name: '分享小区'},
                          {name: '萨德小区'}
                        ]
                      },
                      {name: '太阳街道'}
                    ]
                  },
                  { name: '下城' },
                  { name: '江干' }
                ]
              },
              { name: '嘉兴',
                children: [
                  { name: '南湖区' },
                  { name: '秀洲区' }
                ]
              }
            ]
          },
          {
            name: '福建',
            children: [
              { name: '福州',
                children: [
                  { name: '鼓楼区' },
                  { name: '将台区' },
                  { name: '仓山区' }
                ] }
            ]
          },
          {
            name: '安徽',
            children: [
              { name: '合肥',
                children: [
                  { name: '瑶海' },
                  { name: '庐阳' }
                ] }
            ]
          },
        ],
        itemDisabled:{key:'name',value:'浙江'}
      }
    })
    const useElement = wrapper.find('.trigger')
    expect(wrapper.find('.popover').isVisible()).to.eq(false)
    useElement.trigger('click')
    Vue.nextTick(()=>{
      expect(wrapper.find('.popover').isVisible()).to.eq(true)
      let useElementChild1 =  wrapper.find('.sourceItemName')
      expect(wrapper.find('.children1').isEmpty()).to.eq(true)
      useElementChild1.trigger('click')
      Vue.nextTick(()=>{
        expect(wrapper.find('.children1').isEmpty()).to.eq(true)
        done()
      })
    })
  })
})
