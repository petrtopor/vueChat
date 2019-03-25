<template lang="pug">
  .dialog_item(@click="select")
    .inner_container
      .dialog_photo
      .dialog_message_wrap
        .dialog_caption
          span {{caption}}
        .dialog_draft
      .dialog_meta
</template>

<script>
export default {
  name: 'DialogItem',
  props: {
    dialogItem: Object,
    selected: Boolean
  },
  methods: {
    select() {
      this.$emit('selected')
    }
  },
  computed: {
    caption() {
      return this.dialogItem.caption
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog_item {
  height: 62px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  &.active {
    background-color: #6490b1;
  }
  
  .inner_container {
    height: calc(100% - 14px);
    width: calc(100% - 32px);
    background-color: #ffffff;
    display: flex;
    flex-direction: row;

    .dialog_photo {
      height: 100%;
      width: 48px;
      background-color: red;
    }

    .dialog_message_wrap {
      height: 100%;
      background-color: black;
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      .dialog_caption {
        width: 100%;
        height: 50%;
        background-color: yellow;
        display: flex;
        flex-direction: row;
      }

      .dialog_draft {
        width: 100%;
        height: 50%;
        background-color: blueviolet;
      }
    }

    .dialog_meta {
      width: 43px;
      height: 100%;
      background-color: greenyellow;
    }
  }
}
</style>
