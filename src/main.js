// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line import/no-extraneous-dependencies
import 'es6-promise/auto';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './state';
import i18n from './locales';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
});
