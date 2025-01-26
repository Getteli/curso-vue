<template>
  <!-- chamando a navbar -->
  <Navbar :logo_src="logo_src" :app_name="app_name"/>
  <!-- nesta tag é onde ficará as VIEWS (cada tela mesmo) -->
   <!-- obs: a pasta de components são para partes menores, elementos -->
  <router-view/>

  <!-- chamando o footer depois das views -->
  <Footer/>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    data(){
      return {
        logo_src: 'images/logo.png',
        app_name: 'Hamburgueria VUE'
      }
    },
    components: {
      Navbar,
      Footer
    }
  }
</script>

<!-- global -->
<style>
  *{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 0;
    margin: 0;
  }
  .main-container{
    margin: 50px;
    min-height: 300px;
  }

  h1{
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #333;
  }
</style>