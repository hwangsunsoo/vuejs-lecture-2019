<template>
  <div>
    <h3>06. 컴포넌트 통신</h3>
    <content-table :contents="contents"/>
  </div>
</template>

<script>
import ContentTable from './ContentTable'

export default {
  name: 'VueProps',
  components: {
    ContentTable,
  },
  data () {
    return {
      contents: [
        { id: 1, title: '제목1', body: '내용1' },
        { id: 2, title: '제목2', body: '내용2' },
        { id: 3, title: '제목3', body: '내용3' },
        { id: 4, title: '제목4', body: '내용4' },
        { id: 5, title: '제목5', body: '내용5' },
      ]
    }
  }
}
</script>
