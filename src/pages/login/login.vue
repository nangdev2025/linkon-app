<script setup lang="ts">
	import { reactive, ref } from 'vue';
	import appConfig from '@/config/app-config.json';
	import LoginForm from '@/components/login/login-form.vue';

	// form steps: ['phone', 'otp']
	const currentStep = ref('phone');

	const stateData = reactive({
		form: {
			phone: '',
			code: ''
		},
		checked: false,
		gotoRegister:()=>{
			uni.navigateTo({
				url:'/pages/register/register'
			})
		},
		login:(code: string)=>{
			uni.showToast({
				title: 'Verifying...',
				icon: 'success'
			})
			uni.setStorageSync('token', code)
			uni.switchTab({
				url:'/pages/index/index'
			})
		},
		goOtpVerification:()=>{
			uni.showToast({
				title: 'Submitted!',
				icon: 'success'
			})
			currentStep.value = 'otp'
		}
	})
</script>

<template>
	<view class="login__wrapper">
		<view class="app-bg-radient login__bg"/>
		<view class="login__container">
			<view class="login__company">
				<image src="@/static/logo.png" :alt="appConfig.description" mode="" class="login__company-icon" />
				<view class="login__company-name">LINKON</view>
			</view>
			<view class="login__content">
				<LoginForm />
			</view>
		</view>
		<view class="login__welcome"/>
	</view>
</template>

<style scoped lang="scss">
	.login__wrapper {
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100vh;
		position: relative;
	}

	.login__bg {
		height: 320px;
		width: 100%;
		position: absolute;
		top: 0;
		z-index: 0;
	}

	.login__company {
		width: 100%;
		margin-top: 30px;
		text-align: center;

		.login__company-icon {
			width: 68px;
			height: 68px;
		}

		.login__company-name {
			width: 100%;
			text-align: center;
			font-size: 40px;
			font-weight: 900;
			color: var(--app-base-white);
			font-style: italic;
		}
	}

	.login__content {
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		margin-top: 56px;
	}

	.login__media {
		margin-top: 25px;
		object-fit: fill;
		width: 100%;
	}

	.login__container {
		height: 100%;
		position: relative;
		padding: 0 22px;
		z-index: 1;
	}

	.login__welcome {
		flex: 1;
		width: 100%;
		height: 320px;
		width: 100%;
		position: absolute;
		bottom: 0;
		z-index: 0;
		background-image: url('@/static/images/truck-login.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	:deep(.van-cell) {
		border-radius: 20px;
		border: 1px solid rgba(128, 128, 128, 0.5);
	}

	:deep(.van-field__label) {
		width: 10%;
	}

	:deep(.van-button--primary) {
		border-radius: 50rpx;
	}
</style>