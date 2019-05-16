import $ from 'jquery';
import StateMachine from 'javascript-state-machine';
import getCart from '../shoppingCart/getCart';
import log from '../../utils/log';

export default class Item {
	constructor(list, data) {
		this.list = list;
		this.data = data;
		this.$el = $('<div></div>');
		this.cart = getCart();
	}

	initContent() {
		const { $el, data } = this;
		$el.append($(`<p>名称：${data.name}</p>`));
		$el.append($(`<p>价格：${data.price}</p>`));
	}

	initBtn() {
		const { $el } = this;
		const $btn = $('<button>');
		const updateText = (title) => {
			$btn.text(title);
		};
		// 状态管理
		const fsm = new StateMachine({
			init: '加入购物车',
			transitions: [
				{
					name: 'addToCart',
					from: '加入购物车',
					to: '从购物车删除',
				},
				{
					name: 'deleteFromCart',
					from: '从购物车删除',
					to: '加入购物车',
				},
			],
			methods: {
				// 加入购物车
				onAddToCart: () => {
					this.addToCartHandle();
					updateText(fsm.state);
				},
				// 删除
				onDeleteFromCart: () => {
					this.deleteFromCartHandle();
					updateText(fsm.state);
				},
			},
		});
		$btn.click(() => {
			if (fsm.is('加入购物车')) {
				fsm.addToCart();
			} else {
				fsm.deleteFromCart();
			}
		});
		updateText(fsm.state);
		$el.append($btn);
	}

	// 添加到购物车
	@log('add')
	addToCartHandle() {
		this.cart.add(this.data);
	}

	// 从购物车删除
	@log('del')
	deleteFromCartHandle() {
		this.cart.del(this.data.id);
	}

	render() {
		this.list.$el.append(this.$el);
	}

	init() {
		this.initContent();
		this.initBtn();
		this.render();
	}
}
