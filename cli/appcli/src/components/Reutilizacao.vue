<script>
    export default{
        name: "Reutilizacao",
        data(){
            return{
                ativou: false,
            }
        },
        methods:{
            ativar(){
                this.ativou =! this.ativou;
            }
        }
    }
</script>

<template>
    <h5>R E U T I L I Z A Ç Ã O</h5>
    <div>
        <button @click="ativar">Clique aqui</button>
        <span v-show="ativou">&nbsp; - Ativado !</span>
    </div>
</template>