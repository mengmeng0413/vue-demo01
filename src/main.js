// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */ 
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import vuex from 'vuex';
import router from './router/index';
import store from './store';
import '../src/assets/css/iconfont.css';
import '../src/assets/css/index.css';
import {VueMasonryPlugin} from 'vue-masonry';

Vue.use(VueMasonryPlugin)
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(vuex);
Vue.config.productionTip = false;

// const store = new vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     countIncrease(state, v) {
//       // state.count++
//       state.count = v
//     }
//   }
// })
Vue.prototype.$store = store
router.beforeEach((to, from, next) => {
  next()
})

const app = new Vue({
  router,
  store,
	render: h => h(App),
	data: {
		Bus: new Vue()
	}
}).$mount('#app');