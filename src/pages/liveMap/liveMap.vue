<template>
	<view class="container">
		<TopNavbar>
			<view>🏠 Home</view>
    		<button @click="goHome">Home</button>
		</TopNavbar>
		<view class="container_content">
			Live Map
		</view>
	</view>
</template>

<script setup lang="ts">
import TopNavbar from '@/components/top-bar/topBar.vue';

const goHome = () => uni.switchTab({ url: '/pages/index/index' });
</script>

<style scoped lang="scss">
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
		display: flex;
		justify-content: center;

		.container_content {
			padding-top: var(--status-bar-height);
			width: 90%;
		}
	}
</style>