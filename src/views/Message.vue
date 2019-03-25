<template lang="pug">
  .container
    span(overflow-y: scroll;) {{text}}
</template>

<script>
export default {
  name: 'Message',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 32px;
  background-color: blue;
}
</style>
