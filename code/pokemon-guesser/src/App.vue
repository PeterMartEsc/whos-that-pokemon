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

  <h1 className="text-3xl font-bold underline">
    {{ message }}
  </h1>

</template>

<style scoped>

</style>
