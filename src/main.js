//入口文件
import Vue from 'vue'
//导入App根组件
import App from './App.vue'
import router from './router'
// import './style/iconfont/iconfont.css'
import './style/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
