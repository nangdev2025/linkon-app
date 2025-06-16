
<script setup lang="ts">
	import { reactive } from 'vue';
	const stateData = reactive<any>({
		searchValue: '',
		isSearch: false,
		isEmpty:false,
		clickSearch: () => {
			stateData.isSearch = true
		},
		onSearch: (e : any) => {
			console.log(e, 'gggg');
		},

		onCancel: () => {
			stateData.isSearch = false
		},
		checkDetails:()=>{
			uni.navigateTo({
				url:'/pages/homeOrder/homeOrder'
			})
		}
	})
</script>


<template>
	<view>
		<view class="content">
			<view class="topShow">
				<template v-if="!stateData.isSearch">
					<view style="display: flex;align-items: center;">
						<image src="@/static/text.png" class="img_icon"></image>
						<text class="projectName">LinKon</text>
					</view>
					<view class="">
						<image src="@/static/text.png" class="img_icon" @click="stateData.clickSearch"></image>
						<van-badge :content="5">
							<image src="@/static/text.png" class="img_icon" style="margin-left: 20rpx;"></image>
						</van-badge>
					</view>
				</template>
				<template v-else>
					<view class="searchBox">
						<van-search v-model="stateData.searchValue" show-action placeholder="请输入搜索关键词"
							@search=" stateData.onSearch"> <template #action>
								<div @click="stateData.onCancel" style="color: white;">Cancel</div>
							</template>
						</van-search>
					</view>
				</template>
			</view>
		</view>
		<!-- 消息通知 -->
		<view class="notice">
			<view class="notice_content">
				Driver malfunction application. Go handle it
			</view>
			<view class="notice_button">
				<view class="button_box">
					handle
				</view>
			</view>
		</view>
		<!-- 订单 -->
		<view class="order_container" v-if="!stateData.isEmpty">
			<view class="order_list">
				<template v-for="item in 2">
					<view class="order_card" >
					<view @click="stateData.checkDetails">
						<view class="top">
							<image src="@/static/text.png" class="img_icon"></image>
							<view class="orderName">
								<view class="orderName_top">
									XCSKD501250416-003
								</view>
								<view class="orderName_bottom">
									Create at: 2024-07-07 14:00
								</view>
							</view>
							<view class="order_price">
								<view class="price">
									$450.000
								</view>
							</view>
						</view>
						<van-divider :dashed='true' style="margin-top: -10rpx;" />
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
						   <view class="vehicles">
						   	<image src="@/static/text.png" style="width: 50rpx;height: 50rpx;"></image>
						   	<view style="margin-left: 20rpx;">
						   		<view class="textStyle">
						   			Container Truck
						   		</view>
						   	</view>
						   </view>
						   <view class="vehicles">
						   	<image src="@/static/text.png" style="width: 50rpx;height: 50rpx;"></image>
						   	<view style="margin-left: 20rpx;">
						   		<view style="padding: 10rpx;">
						   			<text style="color: gray;">Transport date:</text> June 20,2025
						   		</view>
						   	</view>
						   </view>
						</view>
					</view>
					    <view class="fotter">
							<view class=""></view>
					    	<view class="fotter_button">
					    		Accept
					    	</view>
					    </view>
					</view>
				</template>
			</view>
		</view>
	    <!-- 空状态 -->
		 <view style="position: relative;" v-else>
		 	<van-empty description="" />
			<view style="width: 100%;text-align: center;font-size: 40rpx;">
				No orders at the moment
			</view>
			<view style="width: 100%;text-align: center;font-size: 40rpx;margin-top: 20rpx;color: gray;">
				Downward refresh immediately(20)
			</view>
		 </view>
	</view>
</template>

<style scoped lang="scss">
	.content {
		width: 100vw;
		height: 150rpx;
		background-color: #0098f6;

		.topShow {
			padding: 0 30rpx;
			padding-top: 100rpx;
			display: flex;
			justify-content: space-between;

			.img_icon {
				width: 30rpx;
				height: 30rpx;
			}

			.projectName {
				margin-left: 10rpx;
				font-size: 32rpx;
				font-weight: 900;
				color: white;
				font-style: italic;
			}

			.searchBox {
				margin-top: -35rpx;
				width: 100%;
			}
		}
	}

	.notice {
		width: 100vw;
		height: 80rpx;
		display: flex;
		background-color: #fffbe8;
		color: #ed6e0c;

		.notice_content {
			width: 80%;
			height: 100%;
			padding-left: 30rpx;
			line-height: 80rpx;

		}

		.notice_button {
			width: 20%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.button_box {
				padding: 10rpx;
				border: 1px solid #ed6e0c;
				border-radius: 30rpx;
			}
		}
	}

	.order_container {
		margin-top: 20rpx;
		width: 100vw;
		overflow-y: auto;
		display: flex;
		justify-content: center;
		.order_list {
			width: 90%;

			.order_card {
				width: 100%;
			    padding-bottom: 30rpx;
				border: 1px solid rgba(128, 128, 128, 0.5);
				border-radius: 30rpx;
                background-color: white;
				margin-bottom: 20rpx;
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
						width: 65%;

						.orderName_top {
							font-size: 30rpx;
						}

						.orderName_bottom {
							margin-top: 10rpx;
							font-size: 28rpx;
							color: rgba(128, 128, 128, 0.8);
						}

					}

					.order_price {
						width: 150rpx;
						height: 80rpx;
						display: flex;
						justify-content: center;
						align-items: center;

						.price {
							padding: 10rpx 20rpx;
							color: #db7463;
							background-color: #fff2ea;
						}
					}
				}

				.bottom {
					padding:0rpx 20rpx;
					.start{
						display: flex;
						align-items: center;
					}
					.end{
						margin-top: 10rpx;
						display: flex;
						align-items: center;
					}
					.vehicles{
						margin-top: 10rpx;
						display: flex;
						align-items: center;
						.textStyle{
							padding: 10rpx;
							background-color: #eaecf0;
						}
					}
				}
			    .fotter{
					width: 100%;
					margin-top: 50rpx;
					display: flex;
					justify-content: space-between;
					.fotter_button{
						margin-right: 30rpx;
						padding: 20rpx 30rpx;
						background-color: #0098f6;
						color: white;
						border-radius: 40rpx;
					}
				}
			}
		}
	}



	:deep(.van-search) {
		background-color: transparent;
	}

	:deep(.van-search__content) {
		border-radius: 30rpx;
	}

	:deep(.van-search__action) {
		background-color: transparent;
	}
</style>