<script>
    export default {
        name: "Endereco",
        data() {
            return {
                endereco: {
                    rua: "Rua de tal",
                    numero: 12,
                    cidade: "Rio de Janeiro",
                    cep: 20911070,
                    // para o if
                    is_apartamento: false,
                    // para o show
                    mostrar_cep: true,
                }
            }
        }
    }
</script>

<template>
    <p>Endereço: {{ endereco.rua }}, n° {{ endereco.numero }}, {{ endereco.cidade }}</p>
    <!-- diretivas -->
    <div>
        <p>Diretivas</p>
        <p>If</p>
            <!-- IF (v-if) -->
            <!-- vai exibir o conteudo se a condição for true -->
            <p v-if="endereco.is_apartamento">É um apartamento</p>
            <!-- o else PRECISA estar logo em seguida, nao pode estar depois.  -->
            <p v-else>É uma casa</p>
        
        <p>Show</p>
            <!-- SHOW (um tipo de if simplificado) -->
            <!-- ele vai exibir se algo for verdadeiro, PONTO. Não há um else nem nada do tipo, mas o show.-->
            <p v-show="endereco.mostrar_cep">O CEP é {{ endereco.cep }}</p>
    </div>
    <!-- tem todas as outras logicas de programação, for, para loop, e etc.. Ver na DOC-->
</template>