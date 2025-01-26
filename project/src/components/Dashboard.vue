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
                        <ul>
                            <li v-for="opt in burger.opcionais">{{ opt }}</li>
                        </ul>
                    </td>
                    <td>
                        <select name="status">
                            <option @select="changeStatus(burger)" v-for="status in statusDb" :value="status.id">{{ status.tipo }}</option>
                        </select>
                    </td>
                    <td>
                        <button @click="deleteBurger(burger)">Excluir Pedido</button>
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
                burger_id: null,
                statusDb: [],
            }
        },
        methods:{
            async getBurgers() {
                const req = await fetch('http://localhost:3000/burgers');
                const data = await req.json();
                this.burgers = data;
            },
            async getStatus() {
                const req = await fetch('http://localhost:3000/status');
                const data = await req.json();
                this.statusDb = data;
            },
            changeStatus(burger) {},
            deleteBurger(burger) {},
        },
        mounted() {
            this.getBurgers();
            this.getStatus();
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