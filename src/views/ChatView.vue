<template lang="pug">
  .container
    .top_toolbar
    .im_page
      .dialogs
        .im_dialogs_panel
          .im_dialogs_search
            input(placeholder="Search")
        DialogList(:dialogList="dialogList")
        //- .dialogs_list
        //-   .dialog_item
        //-     .inner_container
        //-       .dialog_photo
        //-       .dialog_message_wrap
        //-         .dialog_caption
        //-         .dialog_draft
        //-       .dialog_meta
        //-   .dialog_item
        //-   .dialog_item
        //-   .dialog_item
      .history
        .scrollbar
        .bottom_panel
          .send_form
            .own_photo
              .photo_image
            .send_field
              textarea
              .buttons_field
                .emoji_panel
                .submit_button
                  span SEND
            .peer_photo
              .photo_image

    .messages
      .message(v-for="message in messages")
        span {{message}}
    .toolbar  
      textarea(v-model="text")
      .button_submit(@click="onButtonSubmitClick")
      .button_clear(@click="onButtonClearClick")
      .button_test(@click="onButtonTestClick")
</template>

<script>
import DialogList from '../components/DialogList'

export default {
  name: 'ChatView',
  components: {
    DialogList
  },
  data() {
    return {
      text: '',
      dialogList: [
        {
          caption: '1111'
        },
        {
          caption: '2222'
        },
        {
          caption: '3333'
        },
        {
          caption: '4444'
        },
        {
          caption: '5555'
        }
      ]
    }
  },
  computed: {
    messages() {
      return this.$store.getters.messages
      // return ['ololo', 'fooo', 'bar']
    }
  },
  methods: {
    onButtonTestClick() {
      this.$store.dispatch('sendMessage')
    },
    onButtonSubmitClick() {
      if (this.text != '') {
        this.$store.dispatch('addMessage', this.text)
        this.text = ''
      }
    },
    onButtonClearClick() {
      this.$store.dispatch('clearMessages')
    }
  },
  watch: {
    text: function(value) {
      this.$store.dispatch('setMessage', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-self: center;
  height: calc(100vw - 1200px);
  min-width: 1010px;


  .top_toolbar {
    min-height: 48px;
    background-color: #5682a3;
  }

  .im_page {
    min-height: 640px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;

    .dialogs {
      width: 31%;
      border-right: 2px solid #E9EBED;

      .im_dialogs_panel {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 58px;
        box-sizing: border-box;

        .im_dialogs_search {
          height: calc(100% - 24px);
          width: calc(100% - 24px);
          // background-color: #e7ebf0;

          input {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 6px 26px 6px 30px;
            border: 1px solid #F2F2F2;
            box-sizing: border-box;
            border-radius: 2px;
            background-image: url(../assets/IconsetW.png);
            background-repeat: no-repeat;
            background-position: -6px -205px;
            background-color: #f2f2f2;

            &:focus {
              background-color: #ffffff;
            }
          }
        }
      }

      .dialogs_list {

        .dialog_item {
          height: 62px;
          // background-color: bisque;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          
          .inner_container {
            height: calc(100% - 14px);
            width: calc(100% - 32px);
            // background-color: #ffffff;
            display: flex;
            flex-direction: row;

            .dialog_photo {
              height: 100%;
              width: 48px;
              // background-color: red;
            }

            .dialog_message_wrap {
              height: 100%;
              // background-color: black;
              flex-grow: 1;
              display: flex;
              flex-direction: column;

              .dialog_caption {
                width: 100%;
                height: 50%;
                // background-color: yellow;
              }

              .dialog_draft {
                width: 100%;
                height: 50%;
                // background-color: blueviolet;
              }
            }

            .dialog_meta {
              width: 43px;
              height: 100%;
              // background-color: greenyellow;
            }
          }
        }
      }
    }

    .history {
      display: flex;
      flex-grow: 1;
      flex-direction: column;

      .scrollbar {
        width: 100%;
        flex-grow: 1;
      }

      .bottom_panel {
        width: 100%;
        height: 128px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        // background-color: burlywood;

        .send_form {
          width: 524px;
          height: 97px;
          // background-color: cadetblue;
          display: flex;
          flex-direction: row;

          .own_photo {
            height: 100%;
            width: 55px;

            .photo_image {
              height: 55px;
              background-color: #d4d4d4;
              border-radius: 100%;
            }
          }

          .send_field {
            flex-grow: 1;
            display: flex;
            flex-direction: column;

            textarea {
              flex-grow: 1;
              resize: none;
              border-bottom: 2px solid grey;
            }

            .buttons_field {
              height: 30px;
              display: flex;
              flex-direction: row;

              .emoji_panel {
                flex-grow: 1;
              }

              .submit_button {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                // background-color: #ffffff;
                width: 48px;
                cursor: pointer;

                span {
                  color: #3589c5;
                  font-size: 13px;
                  font-weight: bold;
                  cursor: pointer;
                }
              }
            }
          }

          .peer_photo {
            height: 100%;
            width: 55px;

            .photo_image {
              height: 55px;
              background-color: #d4d4d4;
              border-radius: 100%;
            }
          }
        }
      }
    }
  }

  .messages {
    height: 80%;
    background-color: aquamarine;
    overflow-y: scroll;

    .message {
      height: 64px;
      width: calc(100% - 16px);
      border-radius: 4px;
      background-color: antiquewhite;
      margin: 8px;
    }
  }

  .toolbar {
    height: 20%;
    background-color: grey;

    textarea {
      margin: 8px 16px 8px 16px;
      height: 64px;
      width: 80%;
    }

    .button_submit {
      height: 32px;
      width: 64px;
      background-color: aqua;
    }

    .button_clear {
      height: 32px;
      width: 64px;
      background-color: greenyellow;
    }

    .button_test {
      height: 32px;
      width: 64px;
      background-color: brown;
    }
  }
}
</style>
