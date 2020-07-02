<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-myon:world="hello">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myon': {
                bind(el, binding, vnode) {
                    console.log(el)
                    console.log(binding)
                    el.style.backgroundColor = 'lightblue';
                    el.onclick = () => binding.value ( binding.arg )
                }
            }
        },
        methods: {
            hello: function(name) { alert(name); }
        }
    }
</script>

<style>
</style>
