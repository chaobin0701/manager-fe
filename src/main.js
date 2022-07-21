import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import request from './utils/request.js' //路由请求模块
import storage from './utils/storage.js'
// import 'element-plus/dist/index.css'
import router from './router/index.js'
const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage

app.use(ElementPlus).use(router).mount('#app')
