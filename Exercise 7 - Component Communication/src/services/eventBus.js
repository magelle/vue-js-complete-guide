import Vue from 'vue'

export const eventBus = new Vue({
    methods: {
        select: function(server) {
            this.$emit("selectServer", server)
        },
        updateServerStatus: function(id, status) {
            this.$emit("updateServerStatus", id, status)
        }
    }
})