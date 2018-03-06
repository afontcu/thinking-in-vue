<template>
  <div class="filterable-product-table">
    <SearchBar
      :filterText="filterText"
      :displayOnlyOffers="displayOnlyOffers"
      @updateFilterText="updateFilterText"
      @toggleDisplayOffers="toggleDisplayOffers" />
    <ProductTable
      :products="products"
      :filterText="filterText"
      :displayOnlyOffers="displayOnlyOffers"/>
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
    },
    filterText: {
      type: String,
      default: ''
    },
    displayOnlyOffers: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    toggleDisplayOffers () {
      this.$emit('toggleDisplayOffers')
    },
    updateFilterText (value) {
      this.$emit('updateFilterText', value)
    }
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
