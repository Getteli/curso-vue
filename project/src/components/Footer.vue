<template>
    <footer id="footer">
        <div class="flex">
            <p>Make your burger - projeto em vue &copy; 2025</p>
        </div>
		<div class="flex">
			<p>Veja este projeto no <a href="https://github.com/Getteli/curso-vue"><b>GITHUB</b></a></p>
		</div>
		<div class="flex">
			<a class="logo-douglas" href="https://getteli.github.io/Getteli">
				<img src="https://getteli.github.io/Getteli/resources/midia/DG_logo.png" class="mx-auto mb-4 p-0" alt="DG" width="35px">
				<span>&nbsp; Douglas A. Silva</span>
			</a>
		</div>
		<div class="flex">
			<p>criado pelo <b>Douglas Araujo Silva</b>, entre em contato para mais informação.</p>
		</div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data(){
            return {
            }
        }
    }
</script>

<style scoped>
    #footer {
        height: 200px;
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        background-color: red;
        padding: 10px;
        width: 100%;
        color: rgb(255, 175, 175);
        left: 0;
        border-top: 4px solid #111;
        flex-direction: column;
        flex-wrap: nowrap;
    }
    .flex
    {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-bottom: 20px;
    }

    a{
        color: white;
        text-decoration: none;
    }
</style>