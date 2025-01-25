<!-- o vue permite chamar o script com este atributo chamado setup, ele muda a forma como trabalhamos dentro -->
<!-- usando o setup nao precisamos exportar, ele já entende com o setup que o nome do arquivo é o nome do component -->
<script setup>
    // sem o data, para chamar os metodos com nomes ja padroes (ref, onMounted,...)
    // precisamos importar do vue
    import { ref, onMounted } from 'vue'

    // declaramos as variaveis assim
    let fixa = "Valor declarado com script setup";
    // se formos alterar o seu valor ao iniciar o componente
    let variavel = ref("pode conter valor inicial");

    // se vier de fora do componente
    defineProps(['fora'])

    // se fosse o script sem setup, colocariamos o metodo fora o data e tudo mais, aqui podemos chamar normalmente
    onMounted(() => {
        console.log("Montando o componente com setup !");

        // como variavel é o conteudo do ref, um metodo padrao do vue, quando quisermos alterar o seu "valor", chamamos o .value
        variavel.value = "Alterado ao montar";
    })
</script>

<template>
    <hr/>
    <h5>Life Cycle hooks:</h5>
    <div class="">
        <p>Vamos trabalhar com <b>Life Cycle Hooks</b></p>
    </div>
    <div>
        <p>Estamos chamando a variavel fixa: {{ fixa }}</p>
        <p>Estamos chamando a variavel com metodo: {{ variavel }}</p>
        <p>Estamos chamando a variavel com fora: {{ fora }}</p>
    </div>
</template>