<script lang="js">
    import InputText from './Form/InputText.vue';
    import ButtonSend from './Form/ButtonSend.vue';

    export default {
        name: "Form",
        data() {
            return {

            }
        },
        components: {
            InputText,
            ButtonSend
        }
    }
</script>

<template>
    <form action="" method="get">
        <InputText :label="'Nome'" :nameInput="'nome'" :placeholderInput="'Digite seu nome'" :class="'form'" :id="'nomeInput'" :required="true" :disabled="false" />
        <InputText :label="'Email'" :nameInput="'email'" :placeholderInput="'Digite seu email'" :class="'form'" :id="'emailInput'" :required="true" :disabled="false"/>
        <ButtonSend :label="'Enviar'" :id="'buttonId'" :class="'classButton'"/>
    </form>
</template>