<template>
    <div>
        <h3>Quotes Added</h3>
        <div class="progress">
            <div class="progress-bar" role="progressbar" :style="{width: percent + '%'}" 
                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                {{ progress }}/{{ max }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            progress: {
                type: Number,
                require: true
            },
            max: {
                type: Number,
                require: true
            }
        },
        computed: {
            percent: function () { return (this.progress / this.max) * 100 }
        }
    }
</script>

<style>
</style>