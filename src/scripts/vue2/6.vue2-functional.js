/*
context具有以下属性：
- data：传递给组件的整个数据对象 data.attrs data.on
- props：提供所有 prop 的对象
- children：VNode 子节点的数组
- slots：一个函数，返回了包含所有插槽的对象
- parent：对父组件的引用
- listeners：(2.3.0+) 一个包含了所有父组件为当前组件注册的事件监听器的对象。这是 data.on 的一个别名。
- injections：(2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的 property。
- scopedSlots：(2.6.0+) 一个暴露传入的作用域插槽的对象。也以函数形式暴露普通插槽。

*/
Vue.component('my-component', {
  functional: true,
  // Props 是可选的 vue@2.3.0+
  props: {},
  // 为了弥补缺少的实例，提供context作为上下文
  render: function (createElement, context) {
    // 可以使用render函数 或者 jsx语法
  }
})
