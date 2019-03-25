<template lang="pug">
  .dialogs_list
    DialogItem(v-for="dialog in dialogList" :dialogItem="dialog" @selected="onSelected")
</template>

<script>
import DialogItem from './DialogItem'

export default {
  name: 'DialogList',
  components: {
    DialogItem
  },
  props: {
    dialogList: Array
  }
}
</script>

<style lang="scss" scoped>

</style>
