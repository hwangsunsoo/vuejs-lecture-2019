f<template>
  <div>
    <h3>02. Vue 인스턴스</h3>
  </div>
</template>

<script>
export default {
  name: "VueInstance",
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  destroyed() {
    console.log("destroyed")
  }
};
</script>
