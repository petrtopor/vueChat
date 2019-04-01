<template lang="pug">
#app
  .login_head_bg
  router-view
  //- <div id="app">
  //-   <div id="nav">
  //-     <router-link to="/">Home</router-link> |
  //-     <router-link to="/about">About</router-link>
  //-   </div>
  //-   <router-view />
  //- </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  .login_head_bg {
    background: #5682a3;
    height: 226px;
  }
}
</style>
