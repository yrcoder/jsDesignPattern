import $ from 'jquery';
import getCart from './getCart';

export default class ShoppingCart {
	constructor(app) {
		this.app = app;
		this.$el = $('<div></div>').css({
			padding: '10px',
			border: '1px solid #ccc',
		});
		this.cart = getCart();
	}

	initBtn() {
		const $btn = $('<button>购物车</button>');
		$btn.click(() => {
			this.showCart();
		});
		this.$el.append($btn);
	}

	showCart() {
		alert(this.cart.getList());
	}

	render() {
		this.app.$el.append(this.$el);
	}

	init() {
		this.initBtn();
		this.render();
	}
}
