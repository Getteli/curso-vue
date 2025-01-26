<template>
  <!-- chamando a navbar -->
  <Navbar/>
  <!-- nesta tag é onde ficará as VIEWS (cada tela mesmo) -->
   <!-- obs: a pasta de components são para partes menores, elementos -->
  <router-view/>
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    components: {
      Navbar
    }
  }
</script>