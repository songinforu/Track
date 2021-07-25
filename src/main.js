//入口文件
import Vue from 'vue'
//引入App根组件
import App from './App.vue'
//引入element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入echarts组件
import echarts from 'echarts'; 

import router from './router'
// import './style/iconfont/iconfont.css'
import './style/index.css'

Vue.config.productionTip = false
//使用ElementUI
Vue.use(ElementUI);
//把echarts属性全局化，可以在页面上通过this去调用
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


