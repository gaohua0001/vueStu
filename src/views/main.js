import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 加载element组件库
import ElementUI from 'element-ui'
// 加载elemrnt组件库样式
import 'element-ui/lib/theme-chalk/index.css'

createApp.config.productionTip = false

// 全局注册element组件库
createApp(App).use(ElementUI)
createApp(App).use(router).mount('#app')
