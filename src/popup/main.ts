import Vue from 'vue';
import App from './App.vue';
import store from '../store';
import vuetify from '../plugins/vuetify';

/// <reference types="chrome"/>
/* eslint-disable no-new */
new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');