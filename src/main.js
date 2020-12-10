// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueTouch from 'vue-touch';
import store from './store';
import router from './Routes';
import App from './App';

import axios from 'axios';
import { moneyfiltro } from '@/filters'



Vue.use(BootstrapVue);

Vue.use(VueTouch);


Vue.filter('moneyfiltro', moneyfiltro)

Vue.config.productionTip = false;
axios.defaults.baseURL='https://localhost:44358/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
