import Item from './item';

// 补充：优惠商品的处理逻辑
function createDiscount(itemData) {
	// 用代理做折扣
	return new Proxy(itemData, {
		get(target, key) {
			if (key === 'name') {
				return `${target[key]} [折扣]`;
			}
			if (key === 'price') {
				return `原价：${target[key]}, 折后：${target[key] * 0.8}`;
			}
		},
	});
}
// 工厂函数
export default function (list, itemData) {
	if (itemData.discount) {
		itemData = createDiscount(itemData);
	}
	return new Item(list, itemData);
}
