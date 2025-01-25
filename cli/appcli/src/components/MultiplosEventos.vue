<script>
    export default
    {
        name: 'MultiplosEventos',
        data(){
            return {
                multipleE: "",
            }
        },
        methods:{
            first(txt,e){
                setTimeout(() => {
                    console.log(txt);
                    this.multipleE = "Primeiro evento - depois de 1s";
                }, 1000);
            },
            second(e){
                setTimeout(() => {
                    this.multipleE = "Segundo evento - depois de 2s";
                }, 2000);
            }
        }
    }
</script>

<template>
    <div>
        <!-- podemos passar texto como parametro, mas com aspas inversas a do evento/atributo de html -->
        <button @click="first('a',$event), second($event)">Ativar multiplos eventos ao clicar</button>
        <p>{{ multipleE }}</p>
    </div>
</template>

<style scoped>
    p{
        color: black;
    }
</style>