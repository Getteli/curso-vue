<template>
    <div class="main-banner">
        <h1>MYB - Make Your Burger</h1>
    </div>
</template>

<script>
    export default{
        name: 'Banner',
        data() {
            return {
                // Your data here
            }
        },
        mounted() {
            // Your mounted code here
        },
        methods: {
            // Your methods here
        }
    }
</script>

<style scoped>
   .main-banner {
        background-image: url("../../public/images/burger.jpg");
        background-color: #333;
        background-position: 0 -225px;
        background-size: 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    h1 {
        color: #fff;
        font-size: 60px;
        text-align: center;
        padding: 20px 40px;
    }
</style>