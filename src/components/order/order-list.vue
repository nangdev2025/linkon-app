<script setup lang="ts">
import { ref } from 'vue'
import OrderCard from './order-card.vue'

const loading = ref(false)
const finished = ref(false)
const orders = ref([
  {
    orderNo: 'XCSKD501250416-001',
    createdAt: '2024-07-07 14:00',
    price: '$550.000',
    factoryName: 'Factory A',
    factoryAddress: '425 S. Palos Verdes Street, San Pedro, CA',
    location: '24208 San Michele Road, 92551, United States',
    vehicleType: 'Container Truck',
    vehicleNo: '1234 T 567',
    transportDate: 'June 20, 2025',
  },
  {
    orderNo: 'XCSKD501250416-002',
    createdAt: '2024-07-07 14:00',
    price: '$550.000',
    factoryName: 'Factory A',
    factoryAddress: '425 S. Palos Verdes Street, San Pedro, CA',
    location: '24208 San Michele Road, 92551, United States',
    vehicleType: 'Container Truck',
    vehicleNo: '1234 T 567',
    transportDate: 'June 20, 2025',
  },
  {
    orderNo: 'XCSKD501250416-002',
    createdAt: '2024-07-07 14:00',
    price: '$550.000',
    factoryName: 'Factory A',
    factoryAddress: '425 S. Palos Verdes Street, San Pedro, CA',
    location: '24208 San Michele Road, 92551, United States',
    vehicleType: 'Container Truck',
    vehicleNo: '1234 T 567',
    transportDate: 'June 20, 2025',
  },
  {
    orderNo: 'XCSKD501250416-003',
    createdAt: '2024-07-07 14:00',
    price: '$550.000',
    factoryName: 'Factory A',
    factoryAddress: '425 S. Palos Verdes Street, San Pedro, CA',
    location: '24208 San Michele Road, 92551, United States',
    vehicleType: 'Container Truck',
    vehicleNo: '1234 T 567',
    transportDate: 'June 20, 2025',
  },
  {
    orderNo: 'XCSKD501250416-004',
    createdAt: '2024-07-07 14:00',
    price: '$550.000',
    factoryName: 'Factory A',
    factoryAddress: '425 S. Palos Verdes Street, San Pedro, CA',
    location: '24208 San Michele Road, 92551, United States',
    vehicleType: 'Container Truck',
    vehicleNo: '1234 T 567',
    transportDate: 'June 20, 2025',
  },
  {
    orderNo: 'XCSKD501250416-005',
    createdAt: '2024-07-07 14:00',
    price: '$550.000',
    factoryName: 'Factory A',
    factoryAddress: '425 S. Palos Verdes Street, San Pedro, CA',
    location: '24208 San Michele Road, 92551, United States',
    vehicleType: 'Container Truck',
    vehicleNo: '1234 T 567',
    transportDate: 'June 20, 2025',
  }
])

const onLoad = () => {
  // Simulate async load
  setTimeout(() => {
    // load more logic here
    loading.value = false
    finished.value = true
  }, 1000)
}
</script>

<template>
    <view class="order_container">
        <!-- 订单 -->
        <view v-if="orders.length">
            <van-list
                v-model:loading="loading"
                :finished="finished"
                @load="onLoad"
                class="order_list"
            >
                <OrderCard v-for="(item, index) in orders" :key="item.orderNo" v-bind="item"/>
            </van-list>
        </view>
        <!-- 空状态 -->
        <view class="order_empty" v-else>
            <image src="@/static/images/no-order.png" style="width: 320px;height: 320px;"></image>
            <view style="position: absolute; bottom: 26px;">
                <view style="width: 100%;text-align: center;font-size: 40rpx;">
                    No orders at the moment
                </view>
                <view style="width: 100%;text-align: center;font-size: 40rpx;margin-top: 20rpx;color: gray;">
                    Downward refresh immediately(20)
                </view>
            </view>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.order_container {
    margin-top: 20rpx;
    overflow-y: auto;
    min-height: 100vh;
    padding: 0 32rpx;
}
.order_empty {
    position: relative;
}
</style>