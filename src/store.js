import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

import firebase from './firebase/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isLoggedIn: Boolean,
      phonenumber: String,
      password: String
    },
    messages: [],
    message: String,
    to: String
  },
  mutations: {
    setMessage: (state, message) => state.message = message,
    setPhonenumber: (state, phonenumber) => state.user.phonenumber = phonenumber,
    setPassword: (state, password) => state.password = password,
    logIn: state => state.isLoggedIn = true,
    logOut: state => state.isLoggedIn = false,
    addMessage: (state, message) => state.messages = [...state.messages, message],
    clearMessages: state => state.messages = []
  },
  actions: {
    setMessage: (context, message) => context.commit('setMessage', message),
    setPhonenumber: (context, phonenumber) => context.commit('setPhonenumber', phonenumber),
    setPassword: (context, password) => context.commit('setPassword', password),
    LogIn: context => context.commit('logIn'),
    logOut: context => context.commit('logOut'),
    addMessage: (context, message) => context.commit('addMessage', message),
    clearMessages: context => context.commit('clearMessages'),
    fetchUsers: contex => {
      axios.get('http://localhost:8080/user').then(response => console.log('RESPONSE DATA:\n', response.data))
    },
    fetchUser: contex => {
      axios.get('http://localhost:8080/user/').then(response => console.log('RESPONSE DATA:\n', response.data))
    },
    sendMessage: context => axios.post('/message', {
      "from": context.state.user.phonenumber,
      "to": context.state.to || '',
      "message": context.state.message
    }).then(response => console.log('response.data: ', response.data)).catch(error => console.log('error: ', error))
  },
  getters: {
    messages: state => state.messages,
    message: state => state.message,
    to: state => state.to
  }
});
