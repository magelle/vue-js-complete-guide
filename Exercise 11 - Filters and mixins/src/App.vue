<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <h2>Filters</h2>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <div>{{ ex1 | localReverse }}</div>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <div>{{ ex2 | globalLength }}</div>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h2>Computed</h2>
                <div>{{ reversedEx1 }}</div>
                <div>{{ ex2WithLength }}</div>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h2>Mixins</h2>
                <div>{{ reversedEx4_1 }}</div>
                <div>{{ ex4_2WithLength }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import reversed from './Reversed.js'

    Vue.filter('globalLength', function(value) {
        return value + ' (' + value.length + ')'
    });

    export default {
        mixins: [reversed],
        data: function () {
            return {
                ex1: 'Exercice 1',
                ex2: 'Exercice 2'
            }
        },
        filters: {
            localReverse: function(value) {
                return value.split('').reverse().join('')
            }
        },
        computed: {
            reversedEx1: function() {
                return this.ex1.split('').reverse().join('');
            },
            ex2WithLength: function() {
                return this.ex2 +  + ' (' + this.ex2.length + ')'
            }
        }
    }
</script>

<style>
</style>
