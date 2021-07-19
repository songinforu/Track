//入口文件
import Vue from 'vue'
//导入App根组件
import App from './App.vue'
//导入element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'; 

import router from './router'
// import './style/iconfont/iconfont.css'
import './style/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


