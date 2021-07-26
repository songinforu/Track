//入口文件
import Vue from 'vue'
//引入App根组件
import App from './App.vue'
//引入element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入echarts组件
import echarts from 'echarts';
//引入vue-i18n
import VueI18n from 'vue-i18n'
import router from './router'
// import './style/iconfont/iconfont.css'
import './style/index.css'

Vue.config.productionTip = false
//使用ElementUI
Vue.use(ElementUI);
//通过插件的形式挂载
Vue.use(VueI18n);
//把echarts属性全局化，可以在页面上通过this去调用
Vue.prototype.$echarts = echarts

const i18n = new VueI18n({
  locale: 'en-US',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./VueI18n/language-zh'),   // 中文语言包
    'en-US': require('./VueI18n/language-en')    // 英文语言包
  }
})

new Vue({
  router,
  i18n,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')


