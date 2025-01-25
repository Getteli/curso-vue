<script>
    export default {
        name: 'FirstComponent',
    }
</script>

<template>
    <subtitle>
        Sou apenas um componente e <b class="boldc">Posso</b> estar em diversas páginas !
    </subtitle>
</template>

<!-- css scoped - só mudará o estilo deste componente -->
<style scoped>
    subtitle {
        font-size: 1.2em;
        color: #b84343;
    }
    .boldc
    {
        font-weight: bold;
        color: #4b4b4b;
    }
</style>