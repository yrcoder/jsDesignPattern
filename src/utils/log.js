export default type => function (target, name, descriptor) {
		// const { oldValue } = descriptor;
		descriptor.value = function () {
			//  此处统一上报日志
			console.log('日志==>', type);
			// 执行原有方法
			// return oldValue.apply(this);
		};
		return descriptor;
	};
