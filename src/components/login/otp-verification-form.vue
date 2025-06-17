<script setup lang="ts">
import { ref, onMounted } from 'vue';

const otp = ref(['', '', '', '', '', '']);

const emit = defineEmits(['login-submit']);

const handleInput = (index: number) => {
  if (otp.value[index].length === 1 && index < 5) {
    const nextInput = document.querySelectorAll('.otp-input')[index + 1] as HTMLInputElement;
    nextInput?.focus();
  }
}

const onLogin = () => {
  const code = otp.value.join('')
  if (code.length === 6) {
    emit('login-submit', code);
  } else {
    uni.showToast({
      title: 'Enter 6-digit OTP',
      icon: 'none'
    })
  }
}

onMounted(() => {
  const firstInput = document.querySelectorAll('.otp-input')[0] as HTMLInputElement;
  firstInput?.focus();
});
</script>

<template>
  <view class="otp-form-wrapper">
    <view class="otp-form">
      <view class="title">OTP Verification</view>
      <view class="subtitle">
        We have sent the OTP code to your phone number
        <text class="phone">+84 866 789 937</text>
      </view>

      <view class="otp-boxes">
        <input
          v-for="(digit, index) in otp"
          :key="index"
          v-model="otp[index]"
          maxlength="1"
          type="number"
          class="otp-input"
          @input="handleInput(index)"
          autofocus
        />
      </view>

      <view class="resend-text">Don’t receive code?</view>
    </view>

    <van-button
      block
      type="primary"
      class="login-btn"
      @click="onLogin"
    >
      LOGIN
    </van-button>
  </view>
</template>

<style scoped>
.otp-container {
  padding: 24px;
  background: linear-gradient(to bottom, #61b3ff, #b0dcff);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

.otp-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  color: #333;
}

.phone {
  font-weight: bold;
  color: #000;
}

.otp-boxes {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin: 0 auto;
  max-width: 280px;
}

.otp-input {
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 8px;
  font-size: 20px;
  text-align: center;
  border: none;
  outline: none;
}

.resend-text {
  text-align: end;
  font-size: 14px;
  color: #555;
  margin-bottom: 24px;
}

.login-btn {
  background: #339aff;
  border-radius: 24px;
  font-weight: bold;
}
</style>
