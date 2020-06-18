new Vue({
  el: '#exercise',
  data: {
    effectState: true,
    clazz1: "",
    clazz2: "",
    doesShrink: false,
    styles: "",
    progress: 0
  },
  computed: {
    effectClass: function() { return this.effectState ? "highlight" : "shrink" }
  },
  methods: {
    startEffect: function() {
      let vm = this;
      setTimeout(() => {
        vm.effectState = !vm.effectState;
        vm.startEffect();
      }, 1000);
    },
    startProgress: function () {
      let vm = this;
      setTimeout(() => {
        vm.progress += 1;
        vm.startProgress();
      }, 1000);
    }
  }
});
