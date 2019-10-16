<template>
  <div>
    <h3>07. Axios</h3>
    <content-table :contents="contents"/>
  </div>
</template>

<script>
import axios from 'axios'
import ContentTable from './ContentTable'

export default {
  name: 'AxiosSample',
  components: {
    ContentTable,
  },
  data () {
    return {
      contents: []
    }
  },
  mounted () {
    axios.get('https://jsonplaceholder.typicode.com/posts', {})
      .then((response) => {
        if (response) {
          this.contents = response.data
        }
      })
      .catch(() => {
        //console.error(response)
      })
      .finally(() => {
      })
  },
}
</script>
