/**
 * Vue
 */
const myNameApp = {
    data() {
        return {
            // hello world
            name: "",
            age: 28,

            // formulario
            input_name: "",
        }
    },
    // fora do data criamos a chave methods onde ficara todos os metodos criados por diretivas
    methods: {
        // podemos recuperar o evento igual em js
        submitForm(e) {
            e.preventDefault();
            console.log("Executando o metodo...");

            // ao chamar o input_name do data, (usando this pois é o mesmo contexto)
            // o mesmo nome da diretiva la no html
            // ai recebemos o conteudo digitado no input
            console.log(this.input_name);

            // atribuicao simples
            this.name = this.input_name;
        }
    }
}

// instanciando o vue para o html
Vue.createApp(myNameApp).mount("#app"); // nos MONTAMOS em um html