import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isLoggedIn: Boolean,
      phonenumber: String,
      password: String
    },
    messages: []
  },
  mutations: {
    setPhonenumber: (state, phonenumber) => state.phonenumber = phonenumber,
    setPassword: (state, password) => state.password = password,
    logIn: state => state.isLoggedIn = true,
    logOut: state => state.isLoggedIn = false,
    addMessage: (state, message) => state.messages = [...state.messages, message],
    clearMessages: state => state.messages = []
  },
  actions: {
    setPhonenumber: (context, phonenumber) => context.commit('setPhonenumber', phonenumber),
    setPhonenumber: (context, password) => context.commit('setPassword', password),
    LogIn: context => context.commit('logIn'),
    logOut: context => context.commit('logOut'),
    addMessage: (context, message) => context.commit('addMessage', message),
    clearMessages: context => context.commit('clearMessages')
  },
  getters: {
    messages: state => state.messages
  }
});
