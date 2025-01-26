<template>
    <div class="burger-table">
        <table>
            <thead>
                <tr>
                    <th><b>#</b></th>
                    <th>Name</th>
                    <th>Pão</th>
                    <th>Carne</th>
                    <th>Opcional</th>
                    <th>Status</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="burger in burgers" :key="burger.id">
                    <td><b>{{ burger.id }}</b></td>
                    <td>{{ burger.name }}</td>
                    <td>{{ burger.pao }}</td>
                    <td>{{ burger.carne }}</td>
                    <td>
                        <p v-for="opt in burger.opcionais">. {{ opt }}</p>
                    </td>
                    <td>
                        <select name="status">
                            <option v-for="status in ['Solicitado', 'Pronto', 'Entregue']" :value="status">{{ status }}</option>
                        </select>
                    </td>
                    <td>
                        <button @click="editBurger(burger)">Edit</button>
                        <button @click="deleteBurger(burger)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        name: "Dashboard",
        data() {
            return {
                burgers: [],
            }
        },
        methods:{
            async getBurgers() {
                const req = await fetch('http://localhost:3000/burgers');
                const data = await req.json();
                this.burgers = data;
            },
            deleteBurger(burger) {}
        },
        mounted() {
            this.getBurgers();
        }
    }
</script>

<style scoped>
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