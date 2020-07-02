export default {
    data: function () {
        return {
            ex4_1: "Exercise 4.1",
            ex4_2: "Exercise 4.2"
        }
    },
    computed: {
        reversedEx4_1: function() {
            return this.ex4_1.split('').reverse().join('');
        },
        ex4_2WithLength: function() {
            return this.ex4_2 + ' (' + this.ex4_2.length + ')'
        }
    }
}