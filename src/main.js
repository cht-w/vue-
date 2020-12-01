// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'


// import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
Vue.use(ElementUI);
Vue.prototype.$info =  function (type,msg){
  if (!msg){
      return;
  }
  switch(type){
      case 1:
          this.$notify.info({
              title: '提示',
              message: msg,
              duration: 3000
          });
          break;
      case 2:
          this.$notify({
              type: 'warning',
              title: '警告',
              message: msg,
              duration: 3000
          });
          break;
      case 3:
          this.$notify.error({
              title: '错误',
              message: msg,
              duration: 3000
          });
          break;
      case 4:
          this.$notify({
              type: 'success',
              title: '成功',
              message: msg,
              duration: 3000
          });
          break;
      default:break;
  }
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})