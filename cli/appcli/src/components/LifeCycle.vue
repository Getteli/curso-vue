<!-- script sem setup para hook -->
<script>
    export default {
        name: "LifeCycle",
        data() {
            return {
                varHook: "Ainda não sei seu valor"
            }
        },
        // nao vamos chamar ESSES METODOS dentro da chave methods, pois isso é um EVENTO, um HOOK do vue
        created() {
            console.log('Componente criado!');
            this.varHook = "Valor ao criar";
        },
        mounted() {
            console.log('Componente montado!');
            this.varHook = "Valor ao montar";
            this.execMethod();
        },
        methods: {
            execMethod(){
                console.log('Executando método customizado!');
            }
        }
    }
</script>

<template>
    <hr/>
    <h5>Life Cycle hooks:</h5>
    <div class="">
        <p>Vamos trabalhar com <b>Life Cycle Hooks</b></p>
    </div>
    <div>
        <p>Veja no console.log a mágica !</p>
        <p>Estamos chamando a variavel varHook e seu valor sendo alterado: {{ varHook }}</p>
    </div>
</template>