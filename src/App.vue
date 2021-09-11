<template>
  <div>Vue 5</div>
  <article><p>1</p></article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return {}
  }
})
</script>

<style type="text/css" scoped>
article {
  & p {
    color: red;
  }
}
</style>