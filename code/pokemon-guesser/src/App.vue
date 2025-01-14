<script lang="ts">
  import { defineComponent } from 'vue'

export default defineComponent({

  data() {
    let message = "Hello World";
    return {
      message,
    }
  },

})
</script>

<template>

  <div>
    <h1>{{ message }}</h1>
  </div>

</template>

<style scoped>

</style>
