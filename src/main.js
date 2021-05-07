import Vue from 'vue'
import App from './App.vue'
import router from './router';
import '@/helpers/validation-rules'
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { Slider } from 'element-ui'

Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);
Vue.use(Slider)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
