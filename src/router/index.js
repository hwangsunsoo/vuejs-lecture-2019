const guide = [
  {
    path: '/',
    redirect: { name: 'intro' },
  },
  {
    // 01. Vue.js 소개 및 개발환경 설정
    path: '/intro',
    name: 'intro',
    component: () => import(/* webpackChunkName: "intro" */ '@/components/VueIntro.vue'),
  },
  {
    // 02. Vue 인스턴스
    path: '/instance',
    name: 'instance',
    component: () => import(/* webpackChunkName: "instance" */ '@/components/VueInstance.vue'),
  },
  {
    // 03. 컴포넌트
    path: '/vue-component',
    name: 'vue-component',
    component: () => import(/* webpackChunkName: "vue-component" */ '@/components/VueComponent.vue'),
  },
  {
    // 04. Vue 디렉티브
    path: '/directive',
    name: 'directive',
    component: () => import(/* webpackChunkName: "directive" */ '@/components/VueDirectives.vue'),
  },
  {
    // 05. 단일 파일 컴포넌트
    path: '/single-file-component',
    name: 'single-file-component',
    component: () => import(/* webpackChunkName: "single-file-component" */ '@/components/SingleFileComponent.vue'),
  },
  {
    // 07. 컴포넌트 통신
    path: '/vue-props',
    name: 'vue-props',
    component: () => import(/* webpackChunkName: "vue-props" */ '@/components/VueProps.vue'),
  },
  {
    // 07. Axios
    path: '/axios-sample',
    name: 'axios-sample',
    component: () => import(/* webpackChunkName: "axios-sample" */ '@/components/AxiosSample.vue'),
  },
  {
    // 08. Vuex
    path: '/vuex',
    name: 'vuex',
    component: () => import(/* webpackChunkName: "vuex" */ '@/components/Vuex.vue'),
  },
  {
    // 09. Vue Router
    path: '/vue-router',
    name: 'vue-router',
    component: () => import(/* webpackChunkName: "vue-router" */ '@/components/VueRouter.vue'),
  },
]

export default guide
