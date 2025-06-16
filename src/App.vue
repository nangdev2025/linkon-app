<script setup lang="ts">
	import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
	import routingIntercept from './permission';
	onLaunch(() => {
		// 路由拦截
		routingIntercept()
		//获取本地版本信息
		uni.getSystemInfo({
			success: function (res) {
				console.log('应用版本号：', res.appVersion);
				console.log('应用名称：', res.appName);
			}
		});

	});
	onShow(() => {
		console.log("App Show");
	});
	onHide(() => {
		console.log("App Hide");
	});
</script>