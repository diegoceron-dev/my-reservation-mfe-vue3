// vite.config.ts
import { defineConfig } from "file:///C:/Users/diego/Desktop/microfrontend/my-reservation-mfe/node_modules/.pnpm/vite@4.4.9_@types+node@20.8.0_sass@1.68.0/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/diego/Desktop/microfrontend/my-reservation-mfe/node_modules/.pnpm/@vitejs+plugin-vue@4.3.4_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import federation from "file:///C:/Users/diego/Desktop/microfrontend/my-reservation-mfe/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.2/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import cssInjectedByJsPlugin from "file:///C:/Users/diego/Desktop/microfrontend/my-reservation-mfe/node_modules/.pnpm/vite-plugin-css-injected-by-js@2.4.0_vite@4.4.9/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import ElementPlus from "file:///C:/Users/diego/Desktop/microfrontend/my-reservation-mfe/node_modules/.pnpm/unplugin-element-plus@0.4.1_vite@4.4.9/node_modules/unplugin-element-plus/dist/vite.mjs";
import AutoImport from "file:///C:/Users/diego/Desktop/microfrontend/my-reservation-mfe/node_modules/.pnpm/unplugin-auto-import@0.16.6_@vueuse+core@10.4.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/diego/Desktop/microfrontend/my-reservation-mfe/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///C:/Users/diego/Desktop/microfrontend/my-reservation-mfe/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var vite_config_default = defineConfig({
  plugins: [
    ElementPlus(),
    vue(),
    cssInjectedByJsPlugin(),
    federation({
      name: "guests-app",
      filename: "remoteEntry.js",
      exposes: {},
      shared: ["vue"]
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  base: "http://localhost:5002",
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkaWVnb1xcXFxEZXNrdG9wXFxcXG1pY3JvZnJvbnRlbmRcXFxcbXktcmVzZXJ2YXRpb24tbWZlXFxcXHBhY2thZ2VzXFxcXGd1ZXN0cy1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGRpZWdvXFxcXERlc2t0b3BcXFxcbWljcm9mcm9udGVuZFxcXFxteS1yZXNlcnZhdGlvbi1tZmVcXFxccGFja2FnZXNcXFxcZ3Vlc3RzLWFwcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZGllZ28vRGVza3RvcC9taWNyb2Zyb250ZW5kL215LXJlc2VydmF0aW9uLW1mZS9wYWNrYWdlcy9ndWVzdHMtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSAnQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb24nXG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWNzcy1pbmplY3RlZC1ieS1qcydcbmltcG9ydCBFbGVtZW50UGx1cyBmcm9tICd1bnBsdWdpbi1lbGVtZW50LXBsdXMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIEVsZW1lbnRQbHVzKCksXG4gICAgdnVlKCksXG4gICAgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luKCksXG4gICAgZmVkZXJhdGlvbih7XG4gICAgICBuYW1lOiAnZ3Vlc3RzLWFwcCcsXG4gICAgICBmaWxlbmFtZTogJ3JlbW90ZUVudHJ5LmpzJyxcbiAgICAgIGV4cG9zZXM6IHt9LFxuICAgICAgc2hhcmVkOiBbJ3Z1ZSddXG4gICAgfSksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgfSlcbiAgXSxcbiAgYmFzZTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMicsXG4gIGJ1aWxkOiB7XG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICB0YXJnZXQ6IFsnY2hyb21lODknLCAnZWRnZTg5JywgJ2ZpcmVmb3g4OScsICdzYWZhcmkxNSddXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1hLFNBQVMsb0JBQW9CO0FBQ2hjLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLDJCQUEyQjtBQUNsQyxPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUVwQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixzQkFBc0I7QUFBQSxJQUN0QixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUM7QUFBQSxNQUNWLFFBQVEsQ0FBQyxLQUFLO0FBQUEsSUFDaEIsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVEsQ0FBQyxZQUFZLFVBQVUsYUFBYSxVQUFVO0FBQUEsRUFDeEQ7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
