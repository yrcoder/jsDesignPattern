import $ from 'jquery';
import ShoppingCart from './shoppingCart/index';
import List from './list/index';

export default class App {
	constructor(id) {
		this.$el = $(`#${id}`);
	}

	/**
	 * 初始化页面元素
	 */
	// 初始化购物车
	initShoppingCart() {
		const shoppingCart = new ShoppingCart(this);
		shoppingCart.init();
	}

	// 初始化列表
	initList() {
		const list = new List(this);
		list.init();
	}

	init() {
		this.initShoppingCart();
		this.initList();
	}
}
