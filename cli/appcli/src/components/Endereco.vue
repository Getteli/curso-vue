<script>
    export default {
        name: "Endereco",
        data() {
            return {
                endereco: {
                    rua: "Rua de tal",
                    numero: 12,
                    cidade: "Rio de Janeiro"
                }
            }
        }
    }
</script>

<template>
    <p>Endereço: {{ endereco.rua }}, n° {{ endereco.numero }}, {{ endereco.cidade }}</p>
</template>