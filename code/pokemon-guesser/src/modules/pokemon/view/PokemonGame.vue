<template>

  <section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>


  <section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1>¿Cual es este Pokémon?</h1>
    <PokemonPicture/>
    <!-- Pokemon Options -->

  </section>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import PokemonPicture from '../components/PokemonPicture.vue';

  export default defineComponent({

    name: 'Loading',

    data() {

    },
    components: {
      PokemonPicture,
    }

})
</script>

<style scoped>

</style>
