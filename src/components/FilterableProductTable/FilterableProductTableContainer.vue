<template>
  <FilterableProductTable
    :products="products"
    :filterText="filterText"
    :displayOnlyOffers="displayOnlyOffers"
    @toggleDisplayOffers="toggleDisplayOffers"
    @updateFilterText="updateFilterText" />
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
  },
  methods: {
    toggleDisplayOffers () {
      this.displayOnlyOffers = !this.displayOnlyOffers
    },
    updateFilterText (newText) {
      this.filterText = newText
    }
  }
}
</script>
