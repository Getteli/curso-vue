<script lang="js">
    import InputText from './Form/InputText.vue';
    import ButtonSend from './Form/ButtonSend.vue';

    export default {
        name: "Form",
        data() {
            return {
                inputValue: "",
            }
        },
        components: {
            InputText,
            ButtonSend
        },
        methods: {
            enviar(e){
                e.preventDefault();
                const formData = new FormData(e.target);
                const formProps = Object.fromEntries(formData);
                console.log(formProps);

                // Você pode acessar os valores individuais, como:
                const nome = formProps.nome;
                const email = formProps.email;
                console.log(`Nome: ${nome}, Email: ${email}`);

                alert("enviando");
            }
        }
    }
</script>

<template>
    <!-- alem do click, outro evento do vue é o submit -->
    <form action="#" method="get" @submit="enviar">
        <InputText :label="'Nome'" :nameInput="'nome'" :placeholderInput="'Digite seu nome'" :class="'form'" :id="'nomeInput'" :required="true" :disabled="false" :maxLengthInput="50"/>
        <InputText :label="'Email'" :nameInput="'email'" :placeholderInput="'Digite seu email'" :class="'form'" :id="'emailInput'" :required="true" :disabled="false" :maxLengthInput="50"/>
        <ButtonSend :label="'Enviar'" :id="'buttonId'" :class="'classButton'"/>
    </form>
</template>