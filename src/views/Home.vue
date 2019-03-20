<template lang="pug">
  div.home
    h1 Hello!
    input(v-model="phonenumber")
    input(v-model="password")
    div#button_container
      div#submit_button(@click="logIn")
        span Log in
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 40vw;
  align-self: center;

  h1 {
    color: #00ff00;
  }

  input {
    margin: 8px;
    height: 16px;
    border-radius: 4px;
  }

  #button_container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 16px;

    #submit_button {
      height: 24px;
      width: 64px;
      background-color: antiquewhite;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      box-shadow: 0 0 5px red;
      &:hover {
        box-shadow: 0 0 15px red;
        cursor: pointer;
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      phonenumber: '',
      password: ''
    }
  },
  methods: {
    logIn() {
      // console.log(this.$store.dispatch('addMessage', 'ololo'))
      this.$router.push('chat')
    }
  }
};
</script>
