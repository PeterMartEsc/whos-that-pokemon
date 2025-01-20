<template>

  <PokemonGame/>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import PokemonGame from './modules/pokemon/view/PokemonGame.vue';
  export default defineComponent({

    components: {
      PokemonGame,
    }

  })
</script>

<style scoped>

</style>
