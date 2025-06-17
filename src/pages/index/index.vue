<script setup lang="ts">
	import { reactive } from 'vue';
	import FactoryPicker from '@/components/top-bar/factory-picker.vue';
	import SearchBar from '@/components/top-bar/search-bar.vue';
	import OrderList from '@/components/order/order-list.vue';

	const stateData = reactive<any>({
		searchValue: '',
		isSearch: false,
		clickSearch: () => {
			stateData.isSearch = true
		},
		onSearch: (e : any) => {
			console.log('onSearch' , e);
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
	<view class="app-bg-radient container">
		<view class="content">
			<view class="header">
				<template v-if="!stateData.isSearch">
					<view class="nav">
						<view>
							<FactoryPicker />
						</view>
						<view>
							<image src="@/static/icon/search.png" class="img_icon" @click="stateData.clickSearch"></image>
							<van-badge :content="5">
								<image src="@/static/icon/notifications.png" class="img_icon" style="margin-left: 20rpx;"></image>
							</van-badge>
						</view>
					</view>
				</template>
				<template v-else>
					<SearchBar 
						v-model="stateData.searchValue"
						@search="stateData.onSearch"
						@cancel="stateData.onCancel"
					/>
				</template>
			</view>
			<OrderList />
		</view>
	</view>
</template>

<style scoped lang="scss">
	.container {
		min-height: 100vh;
		width: 100%;
	}

	.content {
		display: block;
		padding: 8rpx 0 16rpx 0;

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 32rpx;
			min-height: 44px;

			.nav {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}

			.img_icon {
				width: 24px;
				height: 24px;
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