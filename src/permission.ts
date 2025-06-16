/**
 * @description 自定义路由拦截
 */
// 白名单
const whiteList = [
	// 注意入口页必须直接写 '/'
	// 支持正则表达式   { pattern: /^\/pages\/list.*/ }, 
	'/pages/login/login',
	'/pages/register/register'
]

export default async function () {
	const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']
	// 用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
	list.forEach(item => {
		uni.addInterceptor(item, {
			invoke(e) {
				// 获取token
				let authorization = uni.getStorageSync('token')
				// 获取要跳转的页面路径（url去掉"?"和"?"后的参数）
				const url = e.url.split('?')[0]
				//根据自身需求 修改判断进行拦截便可
				// 判断是否存在token
				if (!authorization) {
					// 判断当前窗口是白名单，如果是则不重定向路由
					let pass = false
					if (whiteList) {
						pass = whiteList.some((item) => {
							return url == item
						})
					}
					// 不是白名单并且没有token
					if (!pass) {
						uni.showToast({
							title: '请登录',
							icon: "none",
							duration: 1500
						})
						setTimeout(() => {
							uni.redirectTo({
								url: "/pages/login/login"
							})
						}, 1500)
						return false
					}
				}
				return e
			},
			fail(err) { // 失败回调拦截
				uni.showToast({
					title: '请登录',
					icon: "none",
					duration: 1500
				})
				setTimeout(() => {
					uni.redirectTo({
						url: "/pages/login/login"
					})
				}, 1500)
				console.log(err, '没有权限')
				return false
			}
		})
	})
}