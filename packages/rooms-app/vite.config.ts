import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    federation({
      name: 'rooms-app',
      filename: 'remoteEntry.js',
      exposes: {},
      shared: ['vue']
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  base: 'http://localhost:5001',
  build: {
    minify: false,
    target: ['chrome89', 'edge89', 'firefox89', 'safari15']
  }
})
