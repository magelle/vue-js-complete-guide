<template>
    <div class="col-md-4">
        <div class="panel panel-default" @click="$emit('clicked')">
            <div class="panel-body">
                {{ quote }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            quote: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style>
    .panel-body:hover {
        cursor: pointer;
        background-color: #ffcfcf;
    }
</style>