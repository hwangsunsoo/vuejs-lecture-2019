<template>
  <table style="width: 50%" border>
    <colgroup>
      <col width="10%"/>
      <col width="30%"/>
      <col width="*"/>
    </colgroup>
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="content in contents" :key="content.id">
        <td>{{ content.id }}</td>
        <td>{{ content.title }}</td>
        <td>{{ content.body }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ContentTable',
  props: {
    contents: {
      type: Array,
      default: () => [],
    }
  }
}
</script>
