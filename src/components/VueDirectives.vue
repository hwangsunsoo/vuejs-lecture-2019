<template>
  <div>
    <h3>04. Vue 디렉티브</h3>
    <div>
      <h4>v-for</h4>
      <ul>
        <li v-for="(item, index) in items">
          {{ index + 1 }}. {{item.message }}
        </li>
      </ul>

      <hr>

      <h4>v-if</h4>
      <div>
        <div v-if="type === 'A'">
          A
        </div>
        <div v-else-if="type === 'B'">
          B
        </div>
        <div v-else-if="type === 'C'">
          C
        </div>
        <div v-else>
          Not A/B/C
        </div>
      </div>

      <hr>

      <h4>v-show</h4>
      <div>
        <div v-show="type === 'A'">
          A
        </div>
        <div v-show="type === 'B'">
          B
        </div>
      </div>

      <hr>

      <h4>v-model</h4>
      <div>
        <label>input: <input type=“text” v-model="name"/></label>
        <div>
          name: {{ name }}
        </div>
      </div>

      <hr>

      <h4>v-on</h4>
      <div>
        <button v-on:click="onClickButton">확인</button>
        <button @click="onClickButton">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueDirectives',
  data () {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
      ],
      type: 'A',
      name: '',
    }
  },
  methods: {
    onClickButton () {
      alert('확인')
    }
  }
}
</script>
