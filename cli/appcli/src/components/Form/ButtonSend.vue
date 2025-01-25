<script>
    export default {
        name: 'ButtonSend',
        data() {
            return {

            }
        },
        props: {
            label: "Input",
            typeButton: 'name',
            idInput: 'id',
            classInput: 'class',
        },
    }
</script>

<template>
    <div>
        <button :type="typeButton" :id="idInput" :class="classInput"> {{ label }}</button>
    </div>
    <br>
</template>