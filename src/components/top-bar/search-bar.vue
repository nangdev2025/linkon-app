<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()

const emit = defineEmits(['update:modelValue', 'search', 'cancel']);

const updateValue = (val: string) => {
  emit('update:modelValue', val)
}

const onCancel = () => {
  emit('cancel')
}
</script>

<template>
    <view class="search-row">
        <van-search
            :model-value="props.modelValue"
            placeholder="请输入搜索关键词"
            show-action
            @update:model-value="updateValue"
            @search="(val: any) => emit('search', val)"
            autofocus
            :clearable="false"
        >
            <template #action>
                <view @click="onCancel" class="cancel-btn">Cancel</view>
            </template>
        </van-search>
    </view>
</template>

<style scoped>
.search-row {
  width: 100%;
}

.search-input {
  width: 100%;
}

.cancel-btn {
  color: white;
  padding-left: 8px;
  font-size: 16px;
}

:deep(.van-field__control){
  font-size: 14px;
}

:deep(.van-search) {
  padding: var(--van-search-padding) var(--van-search-padding) 5px var(--van-search-padding);
  background-color: transparent;
}

:deep(.van-search__content) {
  border-radius: 30rpx;
}

:deep(.van-search__action) {
  background-color: transparent;
}
</style>
