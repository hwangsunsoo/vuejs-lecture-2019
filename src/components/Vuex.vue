<template>
  <div>
    <h3>08. Vuex</h3>
    <content-table :contents="CONTENTS"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ContentTable from './ContentTable'

export default {
  name: 'Vuex',
  components: {
    ContentTable,
  },
  mounted () {
    this.GET_CONTENTS()
  },
  computed: {
    ...mapGetters({
      CONTENTS: 'contents',
    }),
  },
  methods: {
    ...mapActions({
      GET_CONTENTS: 'getContents',
    }),
  }
}
</script>
