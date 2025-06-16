<template>
	<view class="container">
		<view class="container_box">
			<view style="width: 100%;padding-top: 80rpx;position: relative;">
				<van-icon size="40rpx" color='white' name="arrow-left" style="position: absolute;left: 30rpx;" />
				<view style="width: 100%;text-align: center;font-size: 32rpx;color: white;">
					Binding Information
				</view>
			</view>
			<!--  -->
			<view class="content">
				<view class="card">
					<view style="width: 90%" >
						<view style="margin-top: 40rpx;color: gray;">
							Please select the license plate number
						</view>
						<view style="display: flex;width: 100%;height: 100rpx;margin-top: 20rpx;">
							<view style="width: 80%;height: 50rpx;">
								<uni-data-select v-model="stateData.licensePlate" :localdata="stateData.range"
									@change="stateData.changePlate" placeholder='Please Select'></uni-data-select>
							</view>
							<view
								style="width: 60rpx;height: 60rpx;border: 1px solid gray;border-radius: 10rpx;display: flex;justify-content: center;align-items: center;margin-left: 30rpx;">
								<van-icon size="40rpx" color='red' name="plus" />
							</view>
						</view>
						<view style="color: gray;">
							Please select the license plate number
						</view>
						<view style="display: flex;width: 100%;height: 100rpx;margin-top: 20rpx;">
							<view style="width: 80%;height: 50rpx;">
								<uni-data-select v-model="stateData.licensePlate" :localdata="stateData.range"
									@change="stateData.changePlate" placeholder='Please Select'></uni-data-select>
							</view>
							<view
								style="width: 60rpx;height: 60rpx;border: 1px solid gray;border-radius: 10rpx;display: flex;justify-content: center;align-items: center;margin-left: 30rpx;">
								<van-icon size="40rpx" color='red' name="plus" />
							</view>
						</view>
						<view class="">
							<text style="color: gray;">The license plate number</text> D123456 
						</view>
						<view class="" style="margin-top: 10rpx;">
							<text style="color: gray;">information you selected is as follows</text>
						</view>
					</view>
				</view>
			</view>
		    <view style="width: 100%;display: flex;justify-content: center;">
		    	<view style="width: 90%;position: fixed;bottom: 20rpx;">
		    		<van-button type="primary" size="large" @click="stateData.submit">Submit</van-button>
		    	</view>
		    </view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { reactive, ref } from 'vue'
	const stateData = reactive({
		licensePlate: '',
		licenseDriver: '',
		range: [
			{ value: 0, text: "渝AF2036" },
			{ value: 1, text: "渝BF2036" },
			{ value: 2, text: "渝CF2036" },
		],
		changePlate: () => {
		},
		submit:()=>{
			
		}
	})
</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		height: 100vh;

		.container_box {
			width: 100%;
			height: 50vh;
			background: linear-gradient(to bottom, #099af6, white);

			.content {
				width: 100%;
				margin-top: 30rpx;
				display: flex;
				justify-content: center;
				.card {
					width: 90%;
					border-radius: 30rpx;
					background-color: white;
					display: flex;
					justify-content: center;
					padding-bottom: 20rpx;
				}
			}
		}
	}
	:deep(.uni-select__input-box){
		border-radius: 30rpx;
	}
	:deep(.uni-select__input-text){
		font-size: 32rpx;
	}
	:deep(.van-button--primary) {
		border-radius: 50rpx;
	}
</style>