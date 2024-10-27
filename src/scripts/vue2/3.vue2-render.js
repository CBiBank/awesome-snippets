const render = function (createElement) {
	// @returns {VNode}
	return createElement(
		// {String | Object | Function}
		// 一个 HTML 标签名、组件选项对象，或者
		// resolve 了上述任何一种的一个 async 函数。必填项。
		'div',

		// {Object} vue2-render-attrs
		// 一个与模板中 attribute 对应的数据对象。可选。
		{
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
