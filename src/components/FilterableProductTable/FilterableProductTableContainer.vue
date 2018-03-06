<template>
  <FilterableProductTable
    :products="products"
    :filterText="filterText"
    :displayOnlyOffers="displayOnlyOffers" />
</template>

<script>
import FilterableProductTable from './FilterableProductTable'
import products from '@/api.json'

export default {
  name: 'FilterableProductTableContainer',
  components: { FilterableProductTable },
  data () {
    return {
      products,
      filterText: '',
      displayOnlyOffers: false
    }
  }
}
</script>
