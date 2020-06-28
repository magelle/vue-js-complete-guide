<template>
    <div>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" v-model="firstName" @change="onChange" class="form-control"/>
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input type="text" v-model="lastName" @change="onChange" class="form-control"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data: function() {
                return {
                    firstName: this.value.split(' ')[0],
                    lastName: this.value.split(' ').slice(1).join(' ')
                }
            },
        methods: {
            onChange: function () {
                this.$emit('input', this.firstName + ' ' + this.lastName)
            }
        }
    }
</script>

<style>
</style>