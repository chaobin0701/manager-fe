import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //ele图标

import request from './utils/request.js' //路由请求模块
import storage from './utils/storage.js'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import Vuex from './store/index.js'
import api from './api'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.config.globalProperties.$api = api


app.use(ElementPlus).use(router).use(Vuex).mount('#app')
