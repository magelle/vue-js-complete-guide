import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import ServerDetails from './ServerDetails.vue'
import ServerList from './ServerList.vue'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('app-server-details', ServerDetails)
Vue.component('app-server-list', ServerList)

new Vue({
  el: '#app',
  render: h => h(App)
})
