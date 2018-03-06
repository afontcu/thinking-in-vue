<template>
  <div class="c-checkbox">
    <input type="checkbox" :id="name" />
    <label :for="name">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
