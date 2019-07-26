
import Vue from 'vue'
import App from './App'
import router from './router'

import "@/assets/css/reset.css"
import "@/assets/css/border.css"
import "@/assets/iconfont/iconfont.css"

//引入插件swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

//axios
import axios from "axios"
Vue.prototype.$axios=axios;
Vue.config.productionTip = false;

/*vuex*/
import store from "./store"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
