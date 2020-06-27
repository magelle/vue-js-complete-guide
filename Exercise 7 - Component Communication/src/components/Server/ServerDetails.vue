<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server != null">
            Server {{ server.id }}, status :  {{ server.status }}
            <button class="btn btn-primary" @click="updateTo('Normal')">Normal</button>
            <button class="btn btn-warning" @click="updateTo('Critical')">Critical</button>
            <button class="btn btn-default" @click="updateTo('Unknown')">Unknown</button>
        </p>
        <p v-else>Server Details are currently not updated</p>
    </div>

</template>

<script>
    import {eventBus} from '../../services/eventBus';

    export default {
        data : function() {
            return {
                server: null
            }
        },
        methods: {
            updateTo: function(status) {
                eventBus.updateServerStatus(this.server.id, status)
            }
        },
        created() {
            eventBus.$on('selectServer', (server) => { this.server = server; }) 
        }
    }
</script>

<style>

</style>
