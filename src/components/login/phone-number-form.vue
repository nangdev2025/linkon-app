<template>
  <view class="phone-number-wrapper">
    <view class="welcome-text">
      <text class="title">Welcome back! Glad to see you, Again!</text>
      <text class="subtitle">Enter your phone number to receive a code.</text>
    </view>

    <van-form @submit="onSubmit" class="phone-form">
      <view class="phone-input-wrapper">
        <view class="prefix">
          <picker mode="selector" :range="countryCodes" @change="onCountryChange">
            <view class="prefix-text">({{ selectedCode }})</view>
          </picker>
          <van-icon class="prefix-icon" name="arrow-down" />
        </view>
        <van-field
          v-model="phone"
          placeholder="866 789 937"
          type="tel"
          required
          :border="false"
          class="phone-input"
        />
      </view>

      <van-button
        block
        type="primary"
        native-type="submit"
        class="submit-btn"
      >
        CONTINUE
      </van-button>
    </van-form>
  </view>
</template>

<script setup>
import { ref } from 'vue';

defineEmits(['goNext']);

const phone = ref('');
const countryCodes = ['+84', '+1', '+61', '+44'];
const selectedCode = ref('+84');

const onCountryChange = (e) => {
  selectedCode.value = countryCodes[e.detail.value];
}

const onSubmit = () => {
  const fullNumber = `${selectedCode.value} ${phone.value}`;
  console.log('Submitted phone number:', fullNumber);

  uni.showToast({
    title: 'Submitted!',
    icon: 'success'
  })

  uni.$emit('goNext');
}
</script>

<style scoped>
.welcome-text {
  margin-bottom: 24px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #000;
  display: block;
  margin-bottom: 4px;
}

.subtitle {
  font-size: 14px;
  color: #333;
}

.phone-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.phone-input-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 24px;
  padding: 8px 16px;
  margin-bottom: 32rpx;
}

.prefix {
  margin-right: 8px;
  display: flex;
  align-items: center;
}

.prefix-text {
  font-size: 16px;
  color: #000;
}

.phone-input {
  flex: 1;
}

:deep(.van-cell.van-cell--borderless) {
  border: none;
}

.submit-btn {
  /* background: #339aff; */
  border-radius: 24px;
  font-weight: bold;
}
</style>
