<template>
    <div>
        <p>Componente de mensagem</p>

        <form id="burger-form">
            <div class="input-container">
                <label for="name">Digite seu nome:</label>
                <input type="text" id="name" name="name" required v-model="name" placeholder="Digite seu nome">
            </div>
            <div class="input-container">
                <label for="pao">Selecione seu pão:</label>
                <select id="pao" name="pao" v-model="pao">
                    <option value="">Selecione</option>
                </select>
            </div>
            <div class="input-container">
                <label for="carne"> Selecione a sua carne:</label>
                <select id="carne" name="carne" v-model="carne">
                    <option value="">Selecione</option>
                </select>
            </div>
            <div class="opcionais-container">
                <label for="opcionais">Selecione os opcionais</label>
                <div class="checkbox-container">
                    <input type="checkbox" name="opcionais" v-model="opcionais">
                    <span>Opcional</span>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" name="opcionais" v-model="opcionais">
                    <span>Opcional</span>
                </div>
            </div>
            <div>
                <button @click="finalizarBurger">Finalizar</button>
            </div>                
        </form>
    </div>
</template>

<script>

    export default {
        name: 'BurgerForm',
        data() {
            return {
            }
        }
    }

</script>

<style scoped>
    #burger-form{
        max-width: 400px;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .input-container
    {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 15px;
    }

    .checkbox-container
    {
        display: flex;
        width: 25%;
        flex-direction: row;
        align-items: flex-start;
        margin: 15px;
    }

    label{
        font-weight: bold;
        color: #222;
        margin-bottom: 15px;
        padding: 5px 10px;
        border-left: 4px solid red;
        width: 100%;
    }

    input, select{
        width: 100%;
        padding: 5px 10px;
    }

    .opcionais-container
    {
        flex-direction: row;
        flex-wrap: wrap;
    }

    button {
        padding: 10px 20px;
        background-color: #e93e3e;
        border: 4px solid #00ff6a;
        color: white;
        cursor: pointer;
        width: 100%;
        margin-top: 20px;
        border-radius: 20px;
    }
</style>