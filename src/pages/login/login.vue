<script setup lang="ts">
	import { reactive, ref } from 'vue';
	import appConfig from '@/config/app-config.json';
	import PhoneNumberForm from '@/components/login/phone-number-form.vue';
	import OtpVerificationForm from '@/components/login/otp-verification-form.vue';

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
	<view class="app-bg-radient login__wrapper">
		<view class="login__container">
			<view class="login__company">
				<image src="@/static/logo.png" :alt="appConfig.description" mode="" class="login__company-icon" />
				<view class="login__company-name">
					{{ appConfig.companyName }}
				</view>
			</view>
			<view class="login__content">
				<phone-number-form v-if="currentStep === 'phone'" @go-next="stateData.goOtpVerification" />
				<otp-verification-form v-else @login-submit="stateData.login"/>
			</view>
		</view>
		<view class="login__welcome" />
	</view>
</template>

<style scoped lang="scss">
	.login__wrapper {
		display: grid;
		grid-template-rows: auto 1fr;
		// width: 100vw;
		height: 100vh;
		padding: 0 20rpx;

		.login__company {
			width: 100%;
			padding-top: 80rpx;
			text-align: center;

			.login__company-icon {
				width: 68px;
				height: 68px;
			}

			.login__company-name {
				width: 100%;
				text-align: center;
				font-size: 24px;
				font-weight: 900;
				color: white;
				font-style: italic;
			}
		}

		.login__content {
			width: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			margin-top: 80rpx;
		}

		.login__media {
			margin-top: 25rpx;
			object-fit: fill;
			width: 100%;
		}
	}

	.login__container {
		width: 100%;
		height: 100%;
	}

	.login__welcome {
		flex: 1;
		margin-top: 25rpx;
		width: 100%;
		background-image: url('@/static/images/truck-login.png');
		background-size: cover;
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
</style>