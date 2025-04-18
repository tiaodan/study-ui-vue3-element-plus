import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: { // 这样写, 本地npm run dev，请求不到数据，没定位原因
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        // target: 'localhost:8888', // 不带http请求不到
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 自动生成的，不知道干嘛用的, 留着
      },
    },
  }
})
