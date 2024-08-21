import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';
const pathResolve = (pathUrl) => resolve(__dirname, pathUrl);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    // https: true,
    proxy: {
      '/api': {
        target: 'http://dict.youdao.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/sass/dealerMass3/core/mixin";',
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      /* 为解决自动导入eslint报错，初次构建已经生成，后续开发人员无须操作，直接使用即可 */
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: false, // 若没此json文件，先开启，生成后在关闭
        filepath: './.eslintrc-auto-import.json',
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    legacy({
      targets: ['>0.1%', 'not IE 11', 'Safari > 9'],
    }),
  ],
});
