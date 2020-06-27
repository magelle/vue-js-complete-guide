<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="(server) in servers">
                Server #{{ server.id }}
                <button @click="select(server)" class="btn btn-default pull-right">Select</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from '../../services/eventBus';

    export default {
        data: function () {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                ]
            }
        },
        methods: {
            select: function(server) {
                eventBus.select(server)
            }
        },
        created() {
            eventBus.$on("updateServerStatus", (id, status) => {
                this.servers.filter((el) => el.id === id)[0].status = status;
                console.log(id)
                console.log(status)
                console.log(this.servers)
            })
        }
    }
</script>

<style>

</style>
