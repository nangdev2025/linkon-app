<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['go-next']);

const phone = ref('');
const verifyCode = ref('');
const policyChecked = ref(false);
const countryCodes = ['+84', '+1', '+61', '+44'];
const selectedCode = ref('+84');

const onCountryChange = (e: any) => {
    selectedCode.value = countryCodes[e.detail.value];
}

const onSubmit = () => {
    const fullNumber = `${selectedCode.value} ${phone.value}`;
    console.log('Submitted phone number:', fullNumber);
    emit('go-next');
}
const goToTermsService = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Go to terms service');
}
const goToPrivacyPolicy = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Go to privacy policy');
}
</script>

<template>
  <view class="login-form">
    <view class="welcome-text">
      <text class="title">
        <view class="">
            Welcome back! Glad to
        </view>
        <view class="">
            see you, Again!
        </view>
      </text>
      <text class="subtitle">Enter your phone number to receive a code.</text>
    </view>

    <van-form @submit="onSubmit">
        <van-cell-group inset class="cell-group">
            <view class="input-wrapper input-wrapper--phone">
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
                    :autofocus="true"
                    :rules="[{ required: true, message: 'Please enter your phone number' }]"
                />
            </view>
            <view class="input-wrapper">
                <van-field
                    v-model="verifyCode"
                    center
                    required
                    clearable
                    :border="false"
                    placeholder="Code"
                    :rules="[{ required: true, message: 'Please enter your code' }]"
                >
                    <template #button>
                        <van-button size="small" class="code-btn">Get Code</van-button>
                    </template>
                </van-field>
            </view>
            <view style="padding: 0 8px;">
                <van-checkbox v-model="policyChecked" shape="square">Please read and agree to the <text @click="goToTermsService" class="link">Terms of Service</text> and <text @click="goToPrivacyPolicy" class="link">Privacy Policy</text></van-checkbox>
            </view>
        </van-cell-group>

      <van-button
        block
        type="primary"
        native-type="submit"
        class="submit-btn"
      >
        LOGIN
      </van-button>
    </van-form>
  </view>
</template>

<style scoped>
.login-form {
    --van-cell-group-background: transparent;
    display: block;
    overflow-y: auto;
}

.welcome-text {
  margin-bottom: 24px;
  text-align: left;
  padding-left: 4px;
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

.cell-group {
    display: grid;
    gap: 12px;
    margin-bottom: 24px;
    --van-cell-group-inset-padding: 0;
}

.input-wrapper {
    min-height: 44px;
    border-radius: 8px;
    border: 1px solid var(--app-gray-300);
    box-shadow: 0px 1px 2px 0px #1018280D;
}

.input-wrapper--phone {
    display: flex;
    align-items: center;
    background: white;
    padding-left: 12px;
}

.phone-input {
    flex: 1;
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

:deep(.van-cell.van-cell--borderless) {
    border: none;
}

:deep(.van-cell) {
    padding: 4px 12px;
}

:deep(.van-field__control) {
    font-size: 16px;
}

.link {
    color: var(--van-primary-color);
}

.submit-btn {
    border-radius: 24px;
    font-weight: bold;
}

.code-btn {
    color: var(--van-primary-color);
    border: none;
    border-radius: 24px;
    font-weight: bold;
    font-size: 14px;
}
</style>
