<template>
  <div>
    <h4>지역 컴포넌트입니다.</h4>
    <div v-if="true">
      <button @click="addNum">중가</button>
      num : {{ num }}
      plusNum : {{ plusNum }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocalComponent',
  data () {
    return {
      message: '안녕하세요',
      num: 0,
    }
  },
  created () {
    /*setInterval(() => {
      console.log(`computed: ${this.now1}\nmethods: ${this.now2()}`)
    }, 5000)*/
  },
  computed: {
    plusNum () {
      return this.num + 10
    },
    reversedMessage () {
      return this.message.split('').reverse().join('')
    },
    now1 () {
      return Date()
    },
  },
  watch: {
    num (nextVal, prevVal) {
      console.log(prevVal, nextVal)
    }
  },
  methods: {
    addNum () {
      this.num++
    },
    now2 () {
      return Date()
    },
  },
}
</script>
