<script>
    export default {
        name: "Navbar",
        props: ['logo_src', 'app_name'],
        data() {
            return {
                
            }
        }
    }
</script>

<template>
    <div id="nav">
        <!-- esta tag é para indicar ao routes do vue que isto é um LINK de rota -->
        <router-link to="/" id="logo">
            <img :src="logo_src" :alt="app_name" srcset="images/logo.png">
        </router-link>
        <!-- o to indica para ONDE a rota irá -->
        <router-link to="/">Início</router-link> |
        <router-link to="/about">Sobre</router-link> |
        <router-link to="/burgues">Pedidos</router-link>
    </div>
</template>

<style scoped>
    #nav {
        background-color: red;
        border-bottom: 4px solid #111;
        padding: 15px 15px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & a {
            color: rgb(255, 175, 175);
            text-decoration: none;
            margin: 12px;
            transition: .5s;
        }
        & a:hover {
            color: #fff;
        }
    }
    #nav #logo {
        margin: auto;
        margin-left: 0;

        & img{
            max-width: 40px;
            height: 40px;
        }
    }
</style>