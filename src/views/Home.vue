<template lang="pug">
  .container
    .login_page
      .login_head_wrap
        .logo_wrap
          .logo
            .icon
            .label
              span Milligramm
        .sibmit_button_wrap
          .submit_button(@click="logIn" id="sign_in_button")
            .icon
            .label
              span Next
      .login_form_wrap
        router-view(@phoneCodeChange="onPhoneCodeChange" @phoneNumberChange="onPhoneNumberChange")
        #recaptca_placeholder
      .about
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #e7ebf0;

  .login_page {
    height: 480px;
    width: 404px;
    margin-top: -131px;
    display: flex;
    flex-direction: column;

    .login_head_wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 75px;

      .logo_wrap {
        width: 140px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        .logo {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 110px;
          cursor: pointer;

          .icon {
            height: 30px;
            width: 30px;
            background-image: url(../assets/General.png);
            background-position: -5px -10px;
          }
          .label {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width: 64px;

            span {
              color: #ffffff;
              font-size: 13px;
            }
          }
        }
      }

      .sibmit_button_wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 80px;

        .submit_button {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
          width: 50px;
          cursor: pointer;

          .icon {
            height: 12px;
            width: 7px;
            background-image: url(../assets/General.png);
            background-position: -18px -50px;
          }
          .label {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width: 32px;

            span {
              color: #ffffff;
              font-size: 13px;
            }
          }
        }
      }
    }

    .login_form_wrap {
      flex-grow: 1;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      /*
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
      */
    }

    .about {
      height: 42px;
    }
  }
}
</style>

<script>
import firebase from '../firebase/index';
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      phoneCode: '',
      phoneNumber: '',
      password: '',
      isActivePhoneCodeInput: false,
      isActivePhoneNumInput: false,
      recaptchaVerifier: null
    }
  },
  methods: {
    onPhoneCodeChange(payload) {
      // console.log('onPhoneCodeChange: ', payload)
      this.phoneCode = payload
    },
    onPhoneNumberChange(payload) {
      // console.log('onPhoneNumberChange: ', payload)
      this.phoneNumber = payload
    },
    onSubmitButtonClick() {
      console.log('onSubmitButtonClick')
      // [START appVerifier]
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptca_placeholder', {
        'size': 'invisible',
        'callback': function(response) {
          console.log('reCAPTCHA solved, allow signInWithPhoneNumber.')
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      })
      // [END appVerifier]

      function onSignInSubmit() {
        console.log('onSignInSubmit')
        // var phoneNumber = getPhoneNumberFromUserInput();
        var phoneNumber = '+79176218533'
        var code = '666666'
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then(function (confirmationResult) {
            console.log('sms sent; confirmationResult: ', confirmationResult)
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            // confirmationResult.confirm(code)
            window.confirmationResult = confirmationResult;
            confirmationResult.confirm(code)
              .then(result => {
                console.log('Confirmation code is CORRECT -> GO ON FURTHER ...')
              })
              .catch(error => {
                console.log('Confirmation code is INCORRECT:\n', error)
              })
          }).catch(function (error) {
            // Error; SMS not sent
            console.error('Error during signInWithPhoneNumber', error);
            window.alert('Error during signInWithPhoneNumber:\n\n' + error.code + '\n\n' + error.message);
          })
      }
    },
    logIn() {
      // this.$store.dispatch('setPhonenumber', this.phonenumber)
      // this.$router.push('chat')
      this.$router.push({ path: 'confirmcode', query: { phonenumber: this.phoneCode + this.phoneNumber } })
    }
  },
  computed: {
    fullPhoneNumber() {
      return this.phoneCode + this.phoneNumber
    }
  }
};
</script>
