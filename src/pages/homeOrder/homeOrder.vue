<template>
	<view class="container">
		<view class="container_content">
			<view class="card">
				<view class="line"></view>
				<view style="margin-left: 20rpx;">
					<view class="">
						No. XCSKD501250416-004
					</view>
					<view style="margin-top: 10rpx;color: gray;">
						Create at: 2024-07-07 14:00
					</view>
				</view>
			</view>
			<view class="order_card">
				<view class="top">
					<image src="@/static/text.png" style="width: 180rpx;height: 120rpx;"></image>
					<view class="orderName">
						<view class="orderName_top">
							<view style="width: 130rpx;">
								Cost:
							</view>
							<view style="font-weight: 600">$500.000</view>
						</view>
						<view class="orderName_bottom">
							<view style="width: 130rpx;">
								Vehicle:
							</view>
							Container Truck
						</view>
						<view class="orderName_bottom">
							<view style="width: 130rpx;">
								Goods:
							</view>
							Industrial Machinery
						</view>
					</view>
				</view>
				<van-divider :dashed='true' style="margin-top: 0rpx;" />
				<view class="bottom">
					<view class="start">
						<image src="@/static/text.png" style="width: 50rpx;height: 50rpx;"></image>
						<view style="margin-left: 20rpx;">
							<view class="">
								Factory A
							</view>
							<view style="font-size: 25rpx;color: gray;">
								425 S.Palos Verdes Street, San Pedro, CA
							</view>
						</view>
					</view>
					<view class="end">
						<image src="@/static/text.png" style="width: 50rpx;height: 50rpx;"></image>
						<view style="margin-left: 20rpx;">
							<view style="color: #0098f6;font-size: 25rpx;">
								24208 San Michele Road,92551, United States
							</view>
						</view>
					</view>
					<van-divider :dashed='true' />
					<view class="end" style="margin-top: -10rpx;">
						<image src="@/static/text.png" style="width: 50rpx;height: 50rpx;"></image>
						<view style="margin-left: 20rpx;">
							<view style="font-size: 25rpx;">
								Payment method:Offline
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="receipt">
				<view style="padding:0rpx 20rpx;">
					<view style="color:#667085;font-weight:600 ;margin-top: 30rpx;">
						Shipping Receipt :
					</view>
					<view style="display: flex;margin-top: 20rpx;">
						<image src="@/static/text.png" style="width: 200rpx;height: 180rpx;border-radius: 20rpx;">
						</image>
						<image src="@/static/text.png"
							style="width: 200rpx;height: 180rpx;border-radius: 20rpx;margin-left: 20rpx;"></image>
					</view>
				</view>
			</view>
			<view class="price">
				<view style="padding:0rpx 20rpx;">
					<view style="color:#667085;font-weight:600 ;margin-top: 50rpx;">
						ADJUST PRICE
					</view>
					<view style="display: flex;margin-top: 20rpx;">
					<van-field v-model="stateData.price" label="$" style="font-size: 32rpx;"/>
					</view>
					<view style="text-align: right;margin-top: 20rpx;color: gray;font-style: italic;">
						The current freight charge is $600
					</view>
				</view>
			</view>
			<view style="width: 90%;position: fixed;bottom: 20rpx;">
				<van-button type="primary" size="large" @click="stateData.nextPage">Next</van-button>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { reactive } from 'vue'
	const stateData = reactive<any>({
		searchValue: '',
		isSearch: false,
		isEmpty: false,
		price:600,
		nextPage: () => {
			uni.navigateTo({
				url:'/pages/bindInformation/bindInformation'
			})
		}
	})
</script>

<style scoped lang="scss">
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
		display: flex;
		justify-content: center;

		.container_content {
			width: 90%;

			.card {
				width: 100%;
				height: 110rpx;
				display: flex;
				align-items: center;
				border-radius: 20rpx;
				overflow: hidden;
				background-color: white;
				margin-top: 20rpx;

				.line {
					width: 10rpx;
					height: 110rpx;
					background-color: red;
				}
			}

			.order_card {
				width: 100%;
				padding-bottom: 30rpx;
				border: 1px solid rgba(128, 128, 128, 0.5);
				border-radius: 30rpx;
				background-color: white;
				margin: 20rpx 0rpx;

				.top {
					display: flex;
					padding: 20rpx;

					.img_icon {
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;
					}

					.orderName {
						margin-left: 20rpx;
						width: 70%;

						.orderName_top {
							display: flex;
							font-size: 28rpx;
						}

						.orderName_bottom {
							display: flex;
							margin-top: 10rpx;
							font-size: 28rpx;
						}

					}
				}

				.bottom {
					padding: 0rpx 20rpx;

					.start {
						display: flex;
						align-items: center;
					}

					.end {
						margin-top: 10rpx;
						display: flex;
						align-items: center;
					}

					.vehicles {
						margin-top: 10rpx;
						display: flex;
						align-items: center;

						.textStyle {
							padding: 10rpx;
							background-color: #eaecf0;
						}
					}
				}

				.fotter {
					width: 100%;
					margin-top: 50rpx;
					display: flex;
					justify-content: space-between;

					.fotter_button {
						margin-right: 30rpx;
						padding: 20rpx 30rpx;
						background-color: #0098f6;
						color: white;
						border-radius: 40rpx;
					}
				}
			}

			.receipt {
				width: 100%;
				padding-bottom: 30rpx;
				border: 1px solid rgba(128, 128, 128, 0.5);
				border-radius: 30rpx;
				background-color: white;
				margin: 20rpx 0rpx;
			}
			
			.price {
				width: 100%;
				padding-bottom: 30rpx;
				border: 1px solid rgba(128, 128, 128, 0.5);
				border-radius: 30rpx;
				background-color: white;
				margin: 20rpx 0rpx;
			}
		}

	}
	:deep(.van-cell) {
		border-radius: 20rpx;
		border: 1px solid rgba(128, 128, 128, 0.5);
	}
	
	:deep(.van-field__label) {
		width: 10%;
	}
	:deep(.van-field__control){
		font-size: 32rpx;
	}
	:deep(.van-button--primary) {
		border-radius: 50rpx;
	}
</style>