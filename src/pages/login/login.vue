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
		login:()=>{
			uni.switchTab({
				url:'/pages/index/index'
			})
		},
		goNext:()=>{
			currentStep.value = 'otp'
		}
	})
</script>

<template>
	<view class="app-bg-radient min-width-100dvw min-height-100dvh login__wrapper">
		<view class="login__company">
			<image src="@/static/logo.png" :alt="appConfig.description" mode="" class="img_icon" />
			<view class="projectName">
				{{ appConfig.companyName }}
			</view>
		</view>
		<view class="login__content">
			<phone-number-form v-if="currentStep === 'phone'" @goNext="stateData.goNext" />
			<otp-verification-form v-else />
		</view>
		<view>
			<picture>
				<source media="(min-width: 600px)" srcset="@/static/images/truck-login@2x.png" type="image/png" />
				<source srcset="@/static/images/truck-login.png" type="image/png" />
				<img class="login__media" src="@/static/images/truck-login.png" alt="vehicle-login" />
			</picture>
		</view>
	</view>
</template>

<style scoped lang="scss">
	.login__wrapper {
		.login__company {
			width: 100%;
			padding-top: 80rpx;
			text-align: center;

			.img_icon {
				width: 68px;
				height: 68px;
			}

			.projectName {
				width: 100%;
				text-align: center;
				font-size: 24px;
				font-weight: 900;
				color: white;
				font-style: italic;
			}
		}

		.login__content {
			width: 100vw;
			padding-top: 78rpx;
			margin: 0 auto;
			display: flex;
			justify-content: center;
		}

		.login__media {
			margin-top: 25rpx;
			object-fit: fill;
			width: 100%;
			// height: 100%;
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
</style>