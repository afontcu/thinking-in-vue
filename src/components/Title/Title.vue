<template>
  <h1 class="c-title" :class="{ 'c-title--fancy': fancy }">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    fancy: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.c-title {
  margin-bottom: 2.5rem;
  font-weight: 300;
}

.c-title--fancy {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 25px;
}

.c-title--fancy:before,
.c-title--fancy:after {
  content: "";
  align-self: center;
  border-top: 1px solid currentColor;
}
</style>
