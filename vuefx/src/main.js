// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import img from '../static/加载.jpg'

import "../static/css/style.css"
//@import '../static/css/pull-refresh.less'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
	error:'http//img.mp.itc.cn/upload/20170330/3ffa055a51d343bce05d8c44517.gif',
	loading:img
})
Vue.config.productionTip = false

/* eslint-disable no-new */
import axios from 'axios'
Vue.prototype.$ajax=axios
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
