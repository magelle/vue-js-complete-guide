new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: () => alert("Alert !!"),
            store: function (event) { this.value = event.target.value }
        }
    });