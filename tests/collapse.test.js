const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
  it('Collapse存在.', () => {
    expect(Collapse).to.be.ok
  })
  it('CollapseItem存在.', () => {
    expect(CollapseItem).to.be.ok
  })

  it('Collapse默认打开item', () => {
    Vue.component('g-collapse', Collapse)
    Vue.component('g-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `<g-collapse class="collapse" :defaultopen="['111','222']">
    <g-collapse-item title="111" class="content">
      <div>123</div>
    </g-collapse-item>
    <g-collapse-item title="222" class="content">
      <div>456</div>
    </g-collapse-item>
    <g-collapse-item title="333" class="content">
      <div>789</div>
    </g-collapse-item>
  </g-collapse>`
    const vm = new Vue({
      el: div,
      data() {
        return {
          eventBus: new Vue(),
          open: this.defaultopen,
          singleMode: this.single !== undefined
        }
      },
      provide() {
        return {
          eventBus: this.eventBus
        }
      }
    })
    vm.$nextTick(() => {
      let contents = document.body.querySelectorAll('.content>div:nth-child(2)')
      let contentsArray = Array.prototype.slice.call(contents)
      contentsArray.map((content) => {
        if (content.innerText === '789') {
          expect(getComputedStyle(content).display).to.be.eq('none')
        } else {
          expect(getComputedStyle(content).display).to.be.eq('block')
        }
      })
    })
    vm.$el.remove()
    vm.$destroy()
  })

  it('Collapse的singleMode为false时，点击关闭功能', () => {
    Vue.component('g-collapse', Collapse)
    Vue.component('g-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `<g-collapse class="collapse" :defaultopen="['111','222']">
    <g-collapse-item title="111" class="content1">
      <div>123</div>
    </g-collapse-item>
    <g-collapse-item title="222" class="content1">
      <div>456</div>
    </g-collapse-item>
    <g-collapse-item title="333" class="content1">
      <div>789</div>
    </g-collapse-item>
  </g-collapse>`
    const vm = new Vue({
      el: div,
      data() {
        return {
          eventBus: new Vue(),
          open: this.defaultopen,
          singleMode: this.single !== undefined
        }
      },
      provide() {
        return {
          eventBus: this.eventBus
        }
      }
    })
    vm.$nextTick(() => {
      let titles = document.body.querySelectorAll('.content1>div:nth-child(1)')
      titles[0].click()
      setTimeout(() => {
        let contents = document.body.querySelectorAll('.content1>div:nth-child(2)')
        let contentsArray = Array.prototype.slice.call(contents)
        contentsArray.map((content) => {
          if (content.innerText === '789'|| content.innerText === '123') {
            expect(getComputedStyle(content).display).to.be.eq('none')
          } else {
            expect(getComputedStyle(content).display).to.be.eq('block')
          }
        })
        vm.$el.remove()
        vm.$destroy()
      }, 500)
    })
  })

  it('Collapse的singleMode为false时，点击打开功能', () => {
    Vue.component('g-collapse', Collapse)
    Vue.component('g-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `<g-collapse class="collapse" :defaultopen="['111','222']">
    <g-collapse-item title="111" class="content2">
      <div>123</div>
    </g-collapse-item>
    <g-collapse-item title="222" class="content2">
      <div>456</div>
    </g-collapse-item>
    <g-collapse-item title="333" class="content2">
      <div>789</div>
    </g-collapse-item>
  </g-collapse>`
    const vm = new Vue({
      el: div,
      data() {
        return {
          eventBus: new Vue(),
          open: this.defaultopen,
          singleMode: this.single !== undefined
        }
      },
      provide() {
        return {
          eventBus: this.eventBus
        }
      }
    })
    vm.$nextTick(() => {
      let titles = document.body.querySelectorAll('.content2>div:nth-child(1)')
      titles[2].click()
      setTimeout(() => {
        let contents = document.body.querySelectorAll('.content2>div:nth-child(2)')
        let contentsArray = Array.prototype.slice.call(contents)
        contentsArray.map((content) => {
          expect(getComputedStyle(content).display).to.be.eq('block')
        })
        vm.$el.remove()
        vm.$destroy()
      }, 500)
    })
  })

  it('Collapse的singleMode为true时，点击打开功能', () => {
    Vue.component('g-collapse', Collapse)
    Vue.component('g-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `<g-collapse class="collapse" :defaultopen="['111']" single>
    <g-collapse-item title="111" class="content3">
      <div>123</div>
    </g-collapse-item>
    <g-collapse-item title="222" class="content3">
      <div>456</div>
    </g-collapse-item>
    <g-collapse-item title="333" class="content3">
      <div>789</div>
    </g-collapse-item>
  </g-collapse>`
    const vm = new Vue({
      el: div,
      data() {
        return {
          eventBus: new Vue(),
          open: this.defaultopen,
          singleMode: this.single !== undefined
        }
      },
      provide() {
        return {
          eventBus: this.eventBus
        }
      }
    })
    vm.$nextTick(() => {
      let titles = document.body.querySelectorAll('.content3>div:nth-child(1)')
      titles[2].click()
      setTimeout(() => {
        let contents = document.body.querySelectorAll('.content3>div:nth-child(2)')
        let contentsArray = Array.prototype.slice.call(contents)
        contentsArray.map((content) => {
          if (content.innerText === '789') {
            expect(getComputedStyle(content).display).to.be.eq('block')
          } else {
            expect(getComputedStyle(content).display).to.be.eq('none')
          }
        })
        vm.$el.remove()
        vm.$destroy()
      }, 500)
    })
  })

})
