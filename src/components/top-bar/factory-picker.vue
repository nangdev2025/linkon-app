<script setup lang="ts">
import { computed, ref } from 'vue'

const factories = ref([
  {
    id: 'factory1',
    name: 'Factory 1',
    address: '234 Elm Street, Apt 56B, Los Angeles, CA 90001\nUnited States'
  },
  {
    id: 'factory2',
    name: 'Factory 2',
    address: 'Mme Claire Dubois, 18 Rue de la République, 75001 Paris, France'
  }
]);
const showPicker = ref(false);
const selectedFactory = ref('');
const factoryDisplayed = computed(() => {
  return factories.value.find(factory => factory.id === selectedFactory.value)?.name ?? 'Factory A Name';
})

const confirmSelection = () => {
  showPicker.value = false;
};
</script>

<template>
  <view class="top-bar" @click="showPicker = true">
    <image src="@/static/icon/location.png" class="img_icon" alt="Location"></image>
    <text class="selected-factory">{{ factoryDisplayed }}</text>
    <image src="@/static/icon/arrow-drow.png" class="arrow-icon" alt="Arrow-down"></image>
  </view>

  <van-popup v-model:show="showPicker" position="bottom" round :style="{ padding: '12px' }">
    <!-- <van-picker
      :columns="factoryList"
      @confirm="onConfirm"
      @cancel="showPicker = false"
    /> -->
    <van-radio-group v-model="selectedFactory">
      <van-radio v-for="(factory, index) in factories" :key="index" :name="factory.id" class="item">
        <view style="display: flex; flex-direction: column">
          <view class="title">{{ factory.name }}</view>
          <view class="desc">{{ factory.address }}</view>
        </view>
      </van-radio>
    </van-radio-group>

    <van-button block type="primary" class="confirm-btn" @click="confirmSelection">
      Ok
    </van-button>
  </van-popup>
</template>

<style scoped>
.top-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
    color: white;
    gap: 6px;
}
.selected-factory {
    color: white;
}
.img_icon {
    width: 24px;
    height: 24px
}
.arrow-icon {
    width: 12px;
    height: 12px
}
.item {
    margin-bottom: 12px;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}
.item:last-child {
    margin-bottom: 0;
    border-bottom: none;
}
.title {
    font-weight: 500;
    font-size: 14px;
}
.desc {
    color: #666;
    font-size: 12px;
    white-space: pre-line;
    margin-top: 4px;
}
.confirm-btn {
    margin-top: 16px;
    border-radius: 999px;
}
</style>
