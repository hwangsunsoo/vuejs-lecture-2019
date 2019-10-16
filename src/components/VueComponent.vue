<template>
  <div>
    <h3>03. 컴포넌트</h3>
    <my-global-component/>
    <my-local-component/>
  </div>
</template>

<script>
import LocalComponent from '@/components/LocalComponent'
export default {
  name: 'VueComponent',
  components: {
    'my-local-component': LocalComponent
  }
}
</script>
