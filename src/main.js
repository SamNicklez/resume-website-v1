import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, AvatarPlugin } from 'bootstrap-vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(AvatarPlugin)
Vue.use(IconsPlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')
