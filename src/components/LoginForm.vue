<template lang="pug">
  .login_form
    .form_lead_header
      span Sign in
    .form_lead_caption
      span Please choose your country and enter your full phone number.
    .phone_country_input_group
      .selector_label
        span Country
      .selector(@click="onPhoneCountryInputClick")
        span Russia
    .phone_groups_wrap
      .phone_code_input_group(@click="onPhoneCodeInputGroupClick")
        span(:class="{ active: isActivePhoneCodeInput }") Code
        input(ref="PhoneCodeInput" @focus="onPhoneCodeInputFocus" @blur="onPhoneCodeInputBlur" @input="onPhoneCodeChange" v-model="phoneCode")
      .phone_num_input_group(@click="onPhoneNumInputGroupClick")
        span(:class="{ active: isActivePhoneNumInput }") Phone number
        input(ref="PhoneNumInput" @focus="onPhoneNumInputFocus" @blur="onPhoneNumInputBlur" @input="onPhoneNumChange" v-model="phoneNumber")
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      phoneCode: '',
      phoneNumber: '',
      isActivePhoneCodeInput: false,
      isActivePhoneNumInput: false
    }
  },
  methods: {
    onPhoneCodeChange() {
      this.$emit('phoneCodeChange', this.phoneCode)
    },
    onPhoneNumChange() {
      this.$emit('phoneNumberChange', this.phoneNumber)
    },
    onPhoneCountryInputClick() {
      this.phoneCode = '+7'
      this.onPhoneCodeChange()
    },
    onPhoneCodeInputGroupClick() {
      this.$refs.PhoneCodeInput.focus()
    },
    onPhoneCodeInputFocus() {
      this.isActivePhoneCodeInput = true
    },
    onPhoneCodeInputBlur() {
      if(this.phoneCode === '') {
        this.isActivePhoneCodeInput = false
      }
    },
    onPhoneNumInputGroupClick() {
      this.$refs.PhoneNumInput.focus()
    },
    onPhoneNumInputFocus() {
      this.isActivePhoneNumInput = true
    },
    onPhoneNumInputBlur() {
      if(this.phoneNumber === '') {
        this.isActivePhoneNumInput = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login_form {
  height: 250px;
  width: 274px;
  display: flex;
  flex-direction: column;

  .form_lead_header {
    margin-bottom: 20px;

    span {
      font-size: 15px;
      font-weight: 700;
      color: #222;
    }
  }
  .form_lead_caption {
    margin-bottom: 30px;

    span {
      color: #999;
      margin: 15px 0 30px;
      font-size: 13px;
      line-height: 160%;
    }
  }
  .phone_country_input_group {
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;

    .selector_label {
      align-self: flex-start;

      span {
        font-weight: 400;
        color: #999;
        cursor: pointer;
        font-size: 13px;
      }
    }
    .selector {
      align-self: flex-start;

      span {
        color: #000;
        cursor: pointer;
        font-size: 13px;
      }
    }
  }
  .phone_groups_wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .phone_code_input_group {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 52px;
      width: calc(100% / 13 * 2);
      border-bottom: 1px solid #e6e6e6;

      span {
        font-weight: 400;
        color: #999;
        cursor: pointer;
        font-size: 13px;
        margin-bottom: 0px;
        transition: margin-bottom 1s;

        &.active {
          margin-bottom: 16px;
        }
      }
      input {
        align-self: flex-end;
        border: none;
        outline: none;
        width: 100%;
      }
    }
    .phone_num_input_group {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 52px;
      width: calc(100% / 13 * 10);
      border-bottom: 1px solid #e6e6e6;

      span {
        font-weight: 400;
        color: #999;
        cursor: pointer;
        font-size: 13px;
        margin-bottom: 0px;
        transition: margin-bottom 1s;

        &.active {
          margin-bottom: 16px;
        }
      }
      input {
        align-self: flex-end;
        border: none;
        outline: none;
        width: 100%;
      }
    }
  }
}
</style>
 