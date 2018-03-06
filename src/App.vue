<template>
  <div class="c-app">
    <Title fancy>Product List</Title>
    <FilterableProductTable :products="products" />
  </div>
</template>

<script>
import FilterableProductTable from './components/FilterableProductTable'
import Title from '@/components/Title'


export default {
  name: 'App',
  components: {
    FilterableProductTable,
    Title
  },
  data () {
    return {
      products
    }
  }
}
</script>

<style>
html {
  background-color: #eee;
}
body {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.c-app {
  margin-top: 10vh;
}
</style>
