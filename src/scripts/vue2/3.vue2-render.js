const render = function (createElement) {
	// @returns {VNode}
	return createElement(
		// {String | Object | Function}
		// 一个 HTML 标签名、组件选项对象，或者
		// resolve 了上述任何一种的一个 async 函数。必填项。
		'div',

		// {Object}
		// 一个与模板中 attribute 对应的数据对象。可选。
		{
      // Component props
      props: {
        msg: 'hi',
        onCustomEvent: this.customEventHandler
      },
      // normal HTML attributes
      attrs: {
        id: 'foo'
      },
      // DOM props
      domProps: {
        innerHTML: 'bar'
      },
      // Event handlers are nested under "on", though
      // modifiers such as in v-on:keyup.enter are not
      // supported. You'll have to manually check the
      // keyCode in the handler instead.
      on: {
        click: this.clickHandler
      },
      // For components only. Allows you to listen to
      // native events, rather than events emitted from
      // the component using vm.$emit.
      nativeOn: {
        click: this.nativeClickHandler
      },
      // class is a special module, same API as `v-bind:class`
      class: {
        foo: true,
        bar: false
      },
      // style is also same as `v-bind:style`
      style: {
        color: 'red',
        fontSize: '14px'
      },
      // other special top-level properties
      key: 'key',
      ref: 'ref',
      // assign the `ref` is used on elements/components with v-for
      refInFor: true,
      slot: 'slot'
    },

		// {String | Array}
		// 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
		// 也可以使用字符串来生成“文本虚拟节点”。可选。
		[
			'Hello World',
			createElement('h1', '你好'),
			createElement(MyComponent, {
				props: {
					someProp: 'foobar'
				}
			})
		]
	)
}
