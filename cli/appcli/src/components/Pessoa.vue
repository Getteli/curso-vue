<script>
    import Endereco from './Endereco.vue';

    export default {
        name: "Pessoa",
        data() {
            return {
                nome: "Douglas",
                idade: 29,
            }
        },
        components: {
            Endereco
        }
    }
</script>

<template>
    <div>
        <h1>{{ nome }}</h1>
        <p>Idade: {{ idade }}</p>
        
        <Endereco/>
    </div>
</template>