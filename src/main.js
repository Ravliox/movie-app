import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(VueResource);
Vue.use(Buefy);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
