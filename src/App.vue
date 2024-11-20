<template>
  <div>
    <h1>{{ Title }}</h1>
    <p>{{Description}}</p>
    <table>
      <tr>
      <th >Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
      </tr>
      <tr>
        <th >Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
        <th><p>{{ Date.created }}</p> <button></button></th>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },props: []
  ,
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>

</style>