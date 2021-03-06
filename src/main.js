import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 加载element组件库
import ElementUI from 'element-ui'
// 加载elemrnt组件库样式aa
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// 全局注册element组件库
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
