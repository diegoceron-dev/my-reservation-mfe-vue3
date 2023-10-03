import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@tests": path.resolve(__dirname, "./tests")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    federation({
      name: 'rooms-app',
      filename: 'remoteEntry.js',
      exposes: {
        './RoomDetail': './src/components/RoomDetail.vue',
      },
      shared: ['vue']
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true
        })
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()]
    }),
    Components({
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
      dts: 'src/components.d.ts'
    }),
  ],
  base: 'http://localhost:5001',
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
})
