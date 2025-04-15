import { createApp } from 'vue'
import App from './App.vue'
// 导入第三方
import ElmentPlus from 'element-plus'
import 'element-plus/dist/index.css'

// createApp(App).mount('#app')
const app = createApp(App)

// app管理第三方库
app.use(ElmentPlus)
app.mount('#app')



