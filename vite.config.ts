import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin.js'

export default defineConfig({
  plugins: [
    viteSSR(),
    vue(),
  ]
})
