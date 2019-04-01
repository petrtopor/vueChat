<template lang="pug">
  .confirm_form
    .form_header
      span {{phoneNumber}}
    .notification
      span We've sent the code to the Telegram app on your other device. Please enter the code below.
    .timeout_countdown
      span Du kannst receive new code after an hour
    .code_input
      span(:class="{ active: isActiveCodeInput }") Enter your code
      input(ref="codeInput" @focus="onCodeInputFocus" @blur="onCodeInputBlur")
</template>

<script>
export default {
  name: 'ConfirmForm',
  props: {
    phoneNumber: String
  },
  data() {
    return {
      isActiveCodeInput: false
    }
  },
  methods: {
    onCodeInputClick() {
      this.$refs.codeInput.focus()
    },
    onCodeInputFocus() {
      this.isActiveCodeInput = true
    },
    onCodeInputBlur() {
      this.isActiveCodeInput = false
    }
  }
}
</script>

<style lang="scss" scoped>
.confirm_form {
  height: 250px;
  width: 274px;
  display: flex;
  flex-direction: column;
  // background-color: greenyellow;

  .form_header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;

    span {
      color: #222;
      font-size: 15px;
      font-weight: 700;
    }
  }

  .notification {

    span {
      color: #999;
      line-height: 160%;
      text-align: center;
      font-size: 13px;
    }
  }

  .timeout_countdown {

    span {
      color: #999;
      line-height: 160%;
      text-align: center;
      font-size: 13px;
    }
  }

  .code_input {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 52px;
    // width: calc(100% / 13 * 10);
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 22px;
    // align-self: flex-end;

    span {
      font-weight: 400;
      color: #999;
      cursor: pointer;
      font-size: 13px;
      margin-bottom: 0px;
      transition: margin-bottom 1s, font-size 1s;

      &.active {
        margin-bottom: 16px;
        font-size: 12px;
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
</style>
