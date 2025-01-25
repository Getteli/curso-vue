<!-- a tag script é para o controle do que terá neste arquivo -->
<script>
  // importa da raiz ou da pasta
  import FirstComponent from './components/FirstComponent.vue';
  import DataComponent from './components/DataComponent.vue';
  import LifeCycleSetup from './components/LifeCycleSetup.vue';
  import LifeCycle from './components/LifeCycle.vue';
  import Pessoa from './components/Pessoa.vue';
  import Form from './components/Form.vue';

  export default {
    // o name, na versão mais recente (em 2025.1) nao é mais necessário no App, pois o main já o reconhece, toda a estrutura de export tambem não. Porém, ao usar componente, é necessário ela para o App entender que importamos um componente para o template
    name: 'App', // nome do componente, utilizado para referenciar esse componente em outros lugares
    components: { // componentes filhos do componente App
      FirstComponent, // nome do componente filho importado
      DataComponent,
      LifeCycleSetup,
      LifeCycle,
      Pessoa,
      Form,
    }
  }
</script>

<!-- a tag template é onde o vue enxerga tudo o que vai para a tela, onde será o container de html -->
<template>
  <!-- chamamos o componente ao html como se o nome dele fosse uma tag -->
  <FirstComponent/>
  
  <h1>Hello World Vue by CLI !</h1>
  
  <!-- ao chamar o componente podemos colocar seus parametros com ":parametro" -->
  <!-- perceba as aspas, duplas e com simples dentro, para passar como string, se nao será um "objeto" ou "variavel" -->
  <DataComponent :nickname="'Getteli'"" />  

  <LifeCycleSetup :fora="'Venho do App'"/>

  <LifeCycle/>

  <hr>

  <Pessoa/>

  <hr>

  <Form/>
</template>