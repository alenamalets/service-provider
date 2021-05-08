import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'
import '@/helpers/validation-rules'
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { Slider, DatePicker } from 'element-ui'

Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);
Vue.use(Slider)
Vue.use(DatePicker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
