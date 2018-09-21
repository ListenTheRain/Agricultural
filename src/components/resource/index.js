import Vue from 'vue';
/*引入资源请求插件*/
import VueResource from 'vue-resource';
/*使用VueResource插件*/
Vue.use(VueResource);
VueResource.actions = {
  get: {method: 'GET'},
  save: {method: 'POST'},
  query: {method: 'GET'},
  update: {method: 'PUT'},
  remove: {method: 'delete'},
  delete: {method: 'DELETE'}
}

export default ({
  data: {
    url: "http://192.168.0.222:8083"
  }
});
