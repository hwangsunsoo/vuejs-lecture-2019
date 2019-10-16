<template>
  <div>
    <div style="width: 350px; position: relative;">
      <span style="font-size: 24px; font-weight: bold;">목차</span>
      <span class="clickable" style="position: absolute; right: 0" @click="isHidden = !isHidden">{{ isHidden ? '펼치기' : '접기' }}</span>
    </div>
    <ul v-show="!isHidden" class="nav">
      <li v-for="link in linkList" :key="link.routePath">
        <span class="clickable" :class="{ 'selected-item': $route.name === link.routePath }" @click="onClickLink(link.routePath)">{{ link.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      isHidden: false,
      linkList: [
        { label: '01. Vue.js 소개 및 개발환경 설정', routePath: 'intro' },
        { label: '02. Vue 인스턴스', routePath: 'instance' },
        { label: '03. 컴포넌트', routePath: 'vue-component' },
        { label: '04. Vue 디렉티브', routePath: 'directive' },
        { label: '05. 단일 파일 컴포넌트', routePath: 'single-file-component' },
        { label: '06. 컴포넌트 통신', routePath: 'vue-props' },
        { label: '07. Axios', routePath: 'axios-sample' },
        { label: '08. Vuex', routePath: 'vuex' },
        { label: '09. Vue Router', routePath: 'vue-router' },
      ]
    }
  },
  methods: {
    onClickLink (routePath) {
      if (`/${routePath}` !== this.$route.path) {
        this.$router.push({ path: routePath })
      }
    },
  },
}
</script>

<style>
  ul {
    list-style: none;
    padding-inline-start: 0;
  }

  .nav > li {
    margin-bottom: 10px;
  }

  .nav > li:last-child {
    margin-bottom: 0;
  }

  span.clickable {
    cursor: pointer;
    text-decoration: underline;
  }

  span.clickable.selected-item {
    font-weight: bold;
  }
</style>
