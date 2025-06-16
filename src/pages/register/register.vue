<template>
	<view class="loginIcon">
		<view class="backgroundBox"></view>
		<view class="container">
			<view class="loginBox">
				<image src="@/static/logo.png" mode="" class="img_icon"></image>
				<view class="projectName">
					LinKon
				</view>
			</view>
			<view class="mainContent">
				<view class="mainContent_box">
					<view class="titleTips">
						Welcome To Linkon
					</view>
					<view class="titleText">
						Enter your information to register
					</view>
					<view class="form">
						<van-field v-model="stateData.form.name" style="margin-bottom: 20rpx;"/>
						<van-field v-model="stateData.form.phone" label="+84" placeholder="请输入用户名" />
						<van-field v-model="stateData.form.code" center clearable placeholder="Code"
							style="margin-top: 20rpx;">
							<template #button>
								<view style="color: #0098f6;font-weight: 600;">
									Get Code
								</view>
							</template>
						</van-field>
					</view>
					<view style="margin-top: 25rpx;">
						<van-checkbox v-model="stateData.checked" shape="square">
							Please read and agree to the <text style="color: #0098f6;"> Terms of
								Service</text> and <text style="color: #0098f6;"> Privacy Policy</text>
						</van-checkbox>
					</view>
					<view style="margin-top: 35rpx;">
						<van-button type="primary" size="large">REGISTER</van-button>
					</view>
					<view style="margin-top: 20rpx;width: 100%;text-align: center;">
						Already have an account?<text style="color: #0098f6;" @click="stateData.gotoLogin">Sign In</text>
					</view>

				</view>
			</view>
			<view style="margin-top: 20rpx;">
				<image src="@/static/text.png" mode="" class="img_footer"></image>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { reactive, ref } from 'vue'
	const stateData = reactive({
		form: {
			name:'Swift Tom Anderson',
			phone: '',
			code: ''
		},
		checked: false,
		gotoLogin:()=>{
			uni.navigateTo({
				url:'/pages/login/login'
			})
		}
	})
</script>

<style scoped lang="scss">
	.loginIcon {
		width: 100vw;
		height: 100vh;
		display: flex;
		position: relative;
        overflow: hidden;
		.backgroundBox {
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 60vh;
			background: linear-gradient(to bottom, #099af6, white);
			z-index: -1;
		}

		.loginBox {
			width: 100%;
			padding-top: 80rpx;
			text-align: center;

			.img_icon {
				width: 100rpx;
				height: 100rpx;
			}

			.projectName {
				width: 100vw;
				text-align: center;
				font-size: 64rpx;
				font-weight: 900;
				color: white;
				font-style: italic;
			}
		}

		.mainContent {
			width: 100vw;
			padding-top: 20rpx;
			margin: 0 auto;
			display: flex;
			justify-content: center;

			.mainContent_box {
				width: 90%;

				.titleTips {
					font-size: 50rpx;
					font-weight: 700;
				}

				.titleText {
					margin-top: 20rpx;
				}
			}

		}

		.form {
			margin-top: 20rpx;
		}

		.img_footer {
			width: 100%;
			height: calc(100vh - 980rpx);
		}
	}

	:deep(.van-cell) {
		border-radius: 20rpx;
		border: 1px solid rgba(128, 128, 128, 0.5);
	}

	:deep(.van-field__label) {
		width: 10%;
	}

	:deep(.van-checkbox__icon) {
		margin-top: -25rpx;
	}

	:deep(.van-button--primary) {
		border-radius: 50rpx;
	}
	:deep(.van-field__control){
		font-size: 32rpx;
	}
</style>