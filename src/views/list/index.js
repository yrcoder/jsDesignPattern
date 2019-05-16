import $ from 'jquery';
import createItem from './creatItem';
import listData from '../../../server/list';

export default class List {
	constructor(app) {
		this.app = app;
		this.$el = $('<div></div>');
	}

	// 获取数据
	loadData() {
		// return fetch('/api/list.json').then((result) => {
		// 	// const data = result.json();
		// 	console.log(result);
		// 	return result;
		// });
		return listData;
	}

	// 生成列表
	initItemList(data) {
		data.forEach((itemData) => {
			// 创建一个item然后init
			const item = createItem(this, itemData);
			item.init();
		});
	}

	// 渲染
	render() {
		this.app.$el.append(this.$el);
	}

	init() {
		const data = this.loadData();
		this.initItemList(data);
		this.render();
		// this.loadData()
		// 	.then((data) => {
		// 		this.initItemList(data);
		// 	})
		// 	.then(() => {
		// 		this.render();
		// 	});
	}
}
