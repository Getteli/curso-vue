<template>
    <footer id="footer">
        <p>Make your burguer - projeto em vue &copy; 2025</p>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data(){
            return {
            }
        }
    }
</script>

<style scoped>
    #footer {
        height: 200px;
        justify-content: center;
        display: flex;
        align-items: center;
        background-color: red;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
        color: rgb(255, 175, 175);
        left: 0;
        border-top: 4px solid #111;
    }
</style>