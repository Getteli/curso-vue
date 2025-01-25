<script>
    export default{
        name: "Picture",
        data(){
            return{
                // para acessar arquivos que nao sejam componentes, PRECISA ESTAR DENTRO DE PUBLIC
                logo: "./images/logo.png"
            }
        }
    }
</script>

<template>
    <!-- outra forma de chamar o v-bind é apenas chamar o : -->
    <img :src="logo" width="100px" alt="vue logo">
</template>