<template>
  <div>
    <h1>{{ Title }}</h1>
    <p>{{Description}}</p>
    <table>
      <tr>
      <th >Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
      <th><button>modal-create</button></th>
      </tr>
      <tr>
        <td >Column 1</td>
        <td>Column 2</td>
        <td>Column 3</td>
        <td><button>modal-delete</button></td>
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