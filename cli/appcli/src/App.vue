<!-- a tag script é para o controle do que terá neste arquivo -->
<script>
  // importa da raiz ou da pasta
  import FirstComponent from './components/FirstComponent.vue';
  import DataComponent from './components/DataComponent.vue';
  import LifeCycleSetup from './components/LifeCycleSetup.vue';
  import LifeCycle from './components/LifeCycle.vue';
  import Pessoa from './components/Pessoa.vue';
  import Form from './components/Form.vue';
  import Picture from './components/Picture.vue';
  import Reutilizacao from './components/Reutilizacao.vue';

  export default {
	// o name, na versão mais recente (em 2025.1) nao é mais necessário no App, pois o main já o reconhece, toda a estrutura de export tambem não. Porém, ao usar componente, é necessário ela para o App entender que importamos um componente para o template
	name: 'App', // nome do componente, utilizado para referenciar esse componente em outros lugares
	components: { // componentes filhos do componente App
	  FirstComponent, // nome do componente filho importado
	  DataComponent,
	  LifeCycleSetup,
	  LifeCycle,
	  Pessoa,
	  Form,
	  Picture,
	  Reutilizacao,
	},
	data(){
		return{
			// para ser bindado
			meu_link: 'https://github.com/Getteli/curso-vue',
			tecnologias: [
				"PHP",
				"Javascript",
				"Node",
				"Vue",
                "Bootstrap",
                "Laravel",
				"Wordpress",
				"Linux",
			],
			array_objets: [
				{id: 1, nome: 'John', idade: 25},
                {id: 2, nome: 'Jane', idade: 30},
                {id: 3, nome: 'Bob', idade: 20},
                {id: 4, nome: 'Alice', idade: 35},
			]
		}
	},
	methods: {
		showAlert(){
			// função para mostrar um alerta
            alert('Alerta @click do vue!');
		},
	}
  }
</script>

<!-- a tag template é onde o vue enxerga tudo o que vai para a tela, onde será o container de html -->
<template>
	<!-- chamamos o componente ao html como se o nome dele fosse uma tag -->
	<FirstComponent/>
	<br>
    <subtitle>
        O css local/scoped no FirstComponent <b class="boldc">Não</b> altera este subtitle que está no App!
    </subtitle>


	<h1>Hello World Vue by CLI !</h1>

	<!-- ao chamar o componente podemos colocar seus parametros com ":parametro" -->
	<!-- perceba as aspas, duplas e com simples dentro, para passar como string, se nao será um "objeto" ou "variavel" -->
	<!-- Caso a gente passe como ":parametro" -->
	<!-- Ai nao precisamos do "''" aspas dentro de aspas pois ele sabe que é uma string-->
	<DataComponent :nickname="'Getteli'" />
	 <!-- <DataComponent nickname="Getteli" /> -->
	<!-- com variavel -->
	<DataComponent :nickname="meu_link" />

	<LifeCycleSetup :fora="'Venho do App'"/>

	<LifeCycle/>

	<hr>

	<Pessoa/>

	<hr>

	<Form/>

	<hr>

	<h5>Argumentos e atributos dinamicos</h5>
	<!-- v-bind serve para capturar a o conteudo do atributo do html, e indicar que aquilo é um dado/variavel da aplicacao em vue -->
	<p>Acesse o link <a v-bind:href="meu_link" target="_blank">clicando aqui</a></p>
	<Picture/>

	<!-- sobre metodos/funcoes -->
	<!-- o @ indica que o que vem depois é uma ação que será executada no vue -->
	<!-- no caso @click indica que é para o vue que ao clicar ele vai executar algo no vue -->
	<!-- ai colocamos um nome de um metodo -->
	<button @click="showAlert">Click para ver o alert</button>

	<hr>
	<h3>Tecnologias</h3>
	<!-- forma simples -->
	<ul>
		<li v-for="tec in tecnologias">{{ tec }}</li>
	</ul>

	<h3>Com index</h3>
	<!-- se quisermos com index, colocamos entre pareteses e botamos o index como segundo parametro -->
	<ul>
		<li v-for="(tec,index) in tecnologias" :key="index">{{ tec }} ({{ index }}) <i class="sub" v-if="index > 3"> (i maior que 3)</i></li>
	</ul>

	<h3>tabela</h3>
	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>Nome</th>
				<th>Idade</th>
			</tr>
		</thead>
		<tbody>
			<!-- v-for também aceita arrays com objetos -->
			<tr v-for="(obj, i) in array_objets" :key="obj.id">
				<td>{{ i }}</td>
				<td>{{ obj.nome }}</td>
				<td>{{ obj.idade }}</td>
			</tr>
		</tbody>
	</table>

	<hr>

	<Reutilizacao/>
	<Reutilizacao/>
	<Reutilizacao/>
	<Reutilizacao/>
</template>

<!-- css global -->
<style>
	*{
		font-family: Arial, Helvetica, sans-serif;
	}
    /* css que será aplicado somente a esse template */
    h1{
        color: red;
    }
	p{
		color: violet;
	}
	.sub
	{
		font-size: 12px;
        color: gray;
	}

	/* table */
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	td, th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: #dddddd;
	}
</style>