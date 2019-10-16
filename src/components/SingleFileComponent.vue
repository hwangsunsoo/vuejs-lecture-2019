<template>
  <div>
    <h3>05. 단일 파일 컴포넌트</h3>
    <div>
      <h4>(1) 단일 파일 컴포넌트</h4>
      <content-table/>
    </div>
    <div>
      <h4>(2) 동적 컴포넌트</h4>
      <component :is="currentView"/>
    </div>
  </div>
</template>

<script>
import ContentTable from './ContentTable'

export default {
  name: 'SingleFileComponent',
  components: {
    ContentTable,
  },
  data () {
    return {
      currentView: 'ContentTable'
    }
  }
}
</script>
