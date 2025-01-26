<template>
    <div>
        <Messages :msg="mensagem" v-show="showMsg"/>

        <form id="burger-form" @submit="createBurguer">
            <div class="input-container">
                <label for="name">Digite seu nome:</label>
                <input type="text" id="name" name="name" required v-model="name" placeholder="Digite seu nome">
            </div>
            <div class="input-container">
                <label for="pao">Selecione seu pão:</label>
                <select id="pao" name="pao" v-model="pao">
                    <option v-for="pao in paes" :keys="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
                </select>
            </div>
            <div class="input-container">
                <label for="carne"> Selecione a sua carne:</label>
                <select id="carne" name="carne" v-model="carne">
                    <option v-for="carne in carnes" :keys="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
                </select>
            </div>
            <div class="opcionais-container">
                <label for="opcionais">Selecione os opcionais</label>
                <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
                    <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                    <span>{{opcional.tipo}}</span>
                </div>
            </div>
            <div>
                <button type="submit">Finalizar</button>
            </div>
        </form>
    </div>
</template>

<script>
    import Messages from './Messages.vue';

    export default {
        name: 'BurgerForm',
        data() {
            return {
                // vem
                paes: null,
                carnes: null,
                opcionaisdata: null,
                // envia
                name: null,
                pao: null,
                carne: null,
                opcionais: [],
                status: "solicitado",
                mensagem: null,
                showMsg: false,
            }
        },
        components: {
            Messages,
        },
        methods: {
            async getIngredientes() {
                const req = await fetch('http://localhost:3000/ingredientes');
                const data = await req.json();

                this.paes = data.paes;
                this.carnes = data.carnes;
                this.opcionaisdata = data.opcionais;

                this.mensagem = "?";
            },

            async createBurguer(e) {
                e.preventDefault();

                const data = {
                    name: this.name,
                    pao: this.pao,
                    carne: this.carne,
                    opcionais: Array.from(this.opcionais),
                    status: this.status
                };

                const dataJson = JSON.stringify(data);

                const req = await fetch('http://localhost:3000/burgers',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: dataJson
                });

                let res = await req.json();

                // colocar uma msg de sistema
                this.mensagem = `Pedido de n° ${res.id} foi realizado com sucesso !`;
                this.showMsg = true;

                setTimeout(() => {
                    this.showMsg = false;
                }, 2500);

                // limpar os campos
                this.clearInputs();
            },
            
            clearInputs() {
                this.name = '';
                this.pao = null;
                this.carne = null;
                this.opcionais = [];
                this.status ='solicitado';
                this.msg = null;
            }
        },
        mounted() {
            this.getIngredientes();
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
        width: 40%;
        flex-direction: row;
        align-items: flex-start;
        margin-left: 0;
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
        display: flex;
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