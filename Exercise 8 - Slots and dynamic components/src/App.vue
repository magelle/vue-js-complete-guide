<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="display = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="display = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="display = 'appRed'">Load Red Template</button>
                <hr>
                <app-blue><h1>Love Blue</h1></app-blue>
                <app-green><h1>Love Green</h1></app-green>
                <app-red><h1>Love Red</h1></app-red>

                <component :is="display">
                    <h1>Love this</h1>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function () {
            return {
                display: ''
            }
        }
    }
</script>

<style>
</style>
