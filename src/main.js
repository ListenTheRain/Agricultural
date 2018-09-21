// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap'
import $ from 'jquery'
import Resource from 'vue-resource'
import '../static/bootstrap/js/bootstrap.js'
import '../static/bootstrap/css/bootstrap.css'
import common from './util/service/loginService'
import '../static/bootstrap/fonts/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;
Vue.use(Resource)
Vue.use(common)
Vue.prototype.common = common

/* eslint-disable no-new  credientials*/

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '160cab8ad6c50752175d76e61ef92c50',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
