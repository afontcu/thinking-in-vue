<template>
  <form>
    <input
      class="input"
      type="text"
      placeholder="Search..."
      @input="handleInput" />
    <Checkbox
      name="filterOffers"
      label="Show only offers"
      @change="handleCheckbox" />
  </form>
</template>

<script>
import Checkbox from '@/components/Checkbox'

export default {
  name: 'SearchBar',
  components: {
    Checkbox
  },
  props: {
    filterText: String,
    displayOnlyOffers: Boolean
  },
  data () {
    return {}
  },
  methods: {
    handleCheckbox () {
      this.$emit('toggleDisplayOffers')
    },
    handleInput (event) {
      this.$emit('updateFilterText', event.target.value)
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  margin: 1rem 0 2rem;
}
.input {
  flex: 1;
  background-color: hsl(210, 9%, 96%);
  padding: 0.9rem;
  font-size: 1rem;
  margin-right: 1rem;
  border: 0;
}
</style>
