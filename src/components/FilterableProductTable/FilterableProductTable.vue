<template>
  <div class="filterable-product-table">
    <SearchBar />
    <ProductTable :products="products"/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import ProductTable from '@/components/ProductTable'

export default {
  name: 'FilterableProductTable',
  components: {
    SearchBar,
    ProductTable
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
.filterable-product-table {
  height: auto;
  width: 600px;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 6px hsla(0, 0%, 0%, 0.2)
}
</style>
