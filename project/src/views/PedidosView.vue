<template>
    <div class="main-container">
        <h1>Fila de pedidos</h1>
        <Dashboard/>
    </div>
</template>

<script>
    import Dashboard from '@/components/Dashboard.vue';

    export default {
        name: 'PedidosView',
        data() {
            return {
            };
        },
        components: {
            Dashboard
        }
    }
</script>