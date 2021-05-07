import Vue from 'vue'
import App from './App.vue'
import router from './router';
import '@/helpers/validation-rules'
import { ValidationProvider } from "vee-validate";

Vue.component("validation-provider", ValidationProvider);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
