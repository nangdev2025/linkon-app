<template>
  <view class="custom-navbar" :style="{ paddingTop: statusBarHeight + 'px', '--status-bar-height': statusBarHeight + 'px' }">
    <view class="navbar-content">
      <slot />
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const statusBarHeight = ref(20)

onMounted(() => {
    const sysInfo = uni.getSystemInfoSync()
    console.log(sysInfo)
    statusBarHeight.value = sysInfo.statusBarHeight || 20
})
</script>

<style scoped>
.custom-navbar {
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
}

.navbar-content {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border-bottom: 1px solid #f0f0f0;
}
</style>
