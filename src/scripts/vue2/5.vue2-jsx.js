/*
针对vue2兼容jsx 安装:
  - 如果是 `babel@7`，那么：pnpm add @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props -D
  - 如果是 `babel@6`，那么：pnpm add babel-plugin-transform-vue-jsx -D

在 `babel.config.js` 中配置：
  - presets: ['@vue/babel-preset-jsx']
  - 或者
  - "plugins": ["transform-vue-jsx"]
*/
const render = function (h) {
  return (
    <div
      // normal attributes or prefix with on props.
      id="foo"
      propsOnCustomEvent={this.customEventHandler}
      // DOM properties are prefixed with `domProps`
      domPropsInnerHTML="bar"
      // event listeners are prefixed with `on` or `nativeOn`
      onClick={this.clickHandler}
      nativeOnClick={this.nativeClickHandler}
      // other special top-level properties
      class={{ foo: true, bar: false }}
      style={{ color: 'red', fontSize: '14px' }}
      key="key"
      ref="ref"
      // assign the `ref` is used on elements/components with v-for
      refInFor
      slot="slot">
    </div>
  )
}
