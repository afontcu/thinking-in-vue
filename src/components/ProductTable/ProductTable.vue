<template>
  <table>
    <thead>
      <tr>
        <th align="left">Name</th>
        <th align="right">Price</th>
      </tr>
    </thead>
    <tbody>
      <ProductRow
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :offer="product.offer"
      />
    </tbody>
  </table>
</template>

<script>
import ProductRow from '@/components/ProductRow'

export default {
  name: 'ProductTable',
  components: {
    ProductRow
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
table, th, td {
  border-collapse: collapse;
  border: 0;
  padding: 1.2rem;
  border-top: 1px solid #e6e6e6;
}
table {
  width: 100%;
}
thead {
  background-color: #fafafa;
  font-size: 14px;
  font-weight: semibold;
  text-transform: uppercase;
  color: #4a4a4a;
}
</style>
