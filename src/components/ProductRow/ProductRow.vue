<template>
  <tr class="c-product-row">
    <td class="c-product-row__name">
      {{ name }}
    </td>
    <td class="c-product-row__price">
      {{ price }} €
      <span v-if="offer" class="c-product-row__offer">offer!</span>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductRow',
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    offer: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>
td {
  position: relative;
}
.c-product-row__name {
  text-align: left;
}
.c-product-row__price {
  text-align: right;
}
.c-product-row__offer {
  position: absolute;
  left: 1rem;
  top: 23px;
  color: #8ea631;
  font-style: italic;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 0.2px;
}
</style>
