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
        // todo o conteudo (data ou methods) pode ser chamado ou configurado ao chamar o componente
    }
</script>

<template>
    <p>Olá ! {{ greet }}</p>
    <p>Seu apelido é: {{ nickname }}</p>
</template>