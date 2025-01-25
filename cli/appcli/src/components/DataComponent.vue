<script>
    export default {
        name: "DataComponent",
        // o data é onde retorna o objeto que podemos trabalhar em seu template, igual ao do cdn
        data() {
            return {
                // podemos deixar variavel fixa
                greet: "Bem vindo Douglas"
            }
        },
        // ou podemos receber parametros ao chamar este componente
        // a chave props é FIXA
        props: {
            // podemos definir o seu tipo, se é obrigatorio ou nao, se tem valor padrao
            nickname: {
                type: String,
                required: true,
                default: "Visitante"
            }
        },
        // e tambem podemos ter os metodos
        // ou emit (que é o envio de baixo para cima, enviar algo para o pai)
        emits: ['enviarPPai'], // neste caso vou enviar um metodo
        // todo o conteudo (data ou methods) pode ser chamado ou configurado ao chamar o componente
    }
</script>

<template>
    <p>Olá ! {{ greet }}</p>
    <p>Seu apelido é: {{ nickname }}</p>

    <button @click="$emit('enviarPPai', {'tipo': 'objeto', 'dados': ['1','a', 2]})">Envia um dado para o pai (App)</button>
</template>