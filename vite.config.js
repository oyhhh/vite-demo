import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from "vite-plugin-html";
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        vue(),
        createHtmlPlugin({
            minify: true,
            inject: {
                data: {
                    appName: "hello world",
                    appTitle: "hello world",
                },
            },
        }),
    ],
    server: {
        // 跨域处理
        proxy: {
            // '/test': {
            //   target: '',  //映射地址  
            //   changeOrigin: true,
            //   ws: true,
            // }
        }
    }
})