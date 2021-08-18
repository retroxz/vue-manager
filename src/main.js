import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import request from "./utils/request";
import storage from "./utils/storage";
const app = createApp(App)
app.use(router).mount('#app')
app.use(ElementPlus)

app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage


