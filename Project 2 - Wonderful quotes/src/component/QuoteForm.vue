<template>
    <form class="form" @submit.prevent="onSubmit">
        <div class="form-group">
            <textarea class="form-control" v-model="quote">
            </textarea>
        </div>
        <div class="form-group text-center">
            <button class="btn btn-primary" type="submit">
                Add Quote
            </button>
        </div>
    </form>
</template>

<script>
    export default {
        data: function () {
            return {
                quote: ""
            }
        },
        methods: {
            onSubmit: function (event) {
                this.$emit('submit', this.quote)
                this.quote = "";
            }
        }
    }
</script>

<style>
</style>