<script setup lang="ts">
defineProps<{
  orderNo: string
  createdAt: string
  price: string
  factoryName: string
  factoryAddress: string
  location: string
  vehicleType: string
  vehicleNo: string
  transportDate: string
}>()

const goToDetail = (event: Event) => {
    event.preventDefault();
    uni.navigateTo({
        url: '/pages/homeOrder/homeOrder'
    });
}

const goToLiveMap = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    // uni.navigateTo({
    //     url: '/pages/liveMap/liveMap'
    // });
}

</script>

<template>
  <view class="order-card" @click="goToDetail">
    <view class="order-header">
      <view style="display: flex;gap: 4px;">
        <text class="order-no">No.</text>
        <view class="order-info">
            <text class="order-info__id">{{ orderNo }}</text>
            <text class="order-info__date">{{ createdAt }}</text>
        </view>
      </view>
      <van-divider vertical :style="{ height: '24px' }" />
      <text class="price">{{ price }}</text>
    </view>

    <view class="order-detail">
      <view class="order-row order-row--factory">
        <image src="@/static/icon/location-primary.png" class="img_icon"></image>
        <view style="display: flex; flex-direction: column;">
            <text>{{ factoryName }}</text>
            <text style="font-size: 10px; color: #667085">{{ factoryAddress }}</text>
        </view>
      </view>
      <view class="order-row">
        <image src="@/static/icon/flag.png" class="img_icon"></image>
        <text class="link" @click="goToLiveMap">{{ location }}</text>
      </view>
      <view class="order-row">
        <image src="@/static/icon/local-shipping.png" class="img_icon"></image>
        <view style="display: flex;gap: 10px;">
            <view class="badge">{{ vehicleType }}</view>
            <text class="badge">{{ vehicleNo }}</text>
        </view>
      </view>
      <view class="order-row">
        <image src="@/static/icon/request-delivery.png" class="img_icon"></image>
        <text>Transport date: {{ transportDate }}</text>
      </view>
    </view>

    <view class="actions">
      <van-button round size="small" plain type="default">Cancel</van-button>
      <van-button round size="small" type="primary">Queue</van-button>
    </view>
  </view>
</template>

<style scoped lang="scss">
.order-card {
    background: white;
    border-radius: 8px;
    padding: 12px 0;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 8px;
    text-align: left;
    box-shadow: 0px 1px 3px 0px #1018281A;
}

.order-card:not(:last-child) {
    margin-bottom: 12px;
}

.order-header {
    --van-divider-text-color: #{$app-gray-200};
    --van-border-width: 2px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    border-bottom: dashed 1px $app-gray-300;
    padding: 0 12px 8px 12px;
}

.order-no {  
    width: 28px;
    height: max-content;
    font-size: 14px;
    text-align: center;
    line-height: 28px;
    color: white;
    border-radius: 50%;
    background-color: $uni-color-primary;
}

.order-info {
    display: flex;
    flex-direction: column;
    text-align: left;

    .order-info__id {
        font-size: 14px;
        line-height: 24px;
        color: $app-gray-800;
    }

    .order-info__date {
        font-size: 12px;
        color: $app-gray-500;
    }
}

.price {
    height: max-content;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 160%;
    border-radius: 4px;
    padding: 4px 8px;
    color: $app-secondary-600;
    background: $app-secondary-50;
}

.order-detail {
  padding: 0 12px;
  font-size: 13px;
}

.order-row {
  position: relative;
  display: flex;
  align-items: center;
  margin: 6px 0;
}

.order-row--factory::after {
    content: '';
    width: 0;
    height: 10px;
    border-right: dashed 1px $app-gray-300;
    position: absolute;
    left: 11px;
    bottom: -8px;
}

.img_icon {
  width: 24px;
  height: 24px;
  margin-right: 6px;
}

.bold {
  font-weight: bold;
}

.link {
  color: #1989fa;
  cursor: pointer;
}

.badge {
    background: $app-gray-200;
    color: $app-gray-800;
    padding: 4px 6px;
    border-radius: 4px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 4px;
  padding: 0 12px;

  .van-button {
    --van-button-default-color: #{$app-gray-500};
    --van-button-default-border-color: #{$app-gray-300};
    padding: 8px 14px;
    font-size: 13px;
  }
}
</style>
