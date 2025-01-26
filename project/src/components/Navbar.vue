<script>
    export default {
        name: "Navbar",
        data() {
            return {
                
            }
        }
    }
</script>

<template>
    <div id="nav">
        <!-- esta tag é para indicar ao routes do vue que isto é um LINK de rota -->
        <router-link>
            <img src="images/logo.png" alt="" id="logo" srcset="images/logo.png">
        </router-link>
        <!-- o to indica para ONDE a rota irá -->
        <router-link to="/">Início</router-link> |
        <router-link to="/about">Sobre</router-link> |
        <router-link to="/burgues">Pedidos</router-link>
    </div>
</template>

<style scoped>
</style>