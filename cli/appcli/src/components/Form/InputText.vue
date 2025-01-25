<script>
    export default {
        name: 'inputText',
        data() {
            return {

            }
        },
        props: {
            label: "Input",
            nameInput: 'name',
            idInput: 'id',
            placeholderInput: 'PlaceHolder',
            classInput: 'class',
            valueInput: '',
            disabledInput: false,
            requiredInput: false,
            minLengthInput: 3,
            maxLengthInput: 10,
        },
    }
</script>

<template>
    <div>
        <label> {{ label }} <br/>
        &nbsp;<input type="text" :name="nameInput" :id="idInput" :class="classInput" :disabled="disabledInput" :required="requiredInput" :minlength="minLengthInput" :maxlength="maxLengthInput" :placeholder="placeholderInput" value="">
        </label>
    </div>
    <br>
</template>