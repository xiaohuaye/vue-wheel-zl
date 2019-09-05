document.addEventListener('click',(e)=>{
  let {target} = e
  callbacks.forEach((item)=>{
    if(target === item.el || item.el.contains(target)){
      console.log("inside");
      return
    }
    item.callback()    //绑定的函数的调用
  })
})
let callbacks = []

export default {
  bind: function (el , binding, vnode) {
    callbacks.push({el, callback: binding.value})
  }
}
