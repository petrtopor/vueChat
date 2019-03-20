<template lang="pug">
  .container
    .messages
      .message(v-for="message in messages")
        span {{message}}
    .toolbar  
      textarea(v-model="text")
      .button_submit(@click="onButtonSubmitClick")
      .button_clear(@click="onButtonClearClick")
</template>

<script>
export default {
  name: 'ChatView',
  data() {
    return {
      text: ''
    }
  },
  computed: {
    messages() {
      return this.$store.getters.messages
      // return ['ololo', 'fooo', 'bar']
    }
  },
  methods: {
    onButtonSubmitClick() {
      if (this.text != '') {
        this.$store.dispatch('addMessage', this.text)
        this.text = ''
      }
    },
    onButtonClearClick() {
      this.$store.dispatch('clearMessages')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-self: center;
  height: 640px;
  width: 480px;

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
  }
}
</style>
