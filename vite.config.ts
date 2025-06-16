import { defineConfig } from "vite";
import path from "path";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni(),
	AutoImport({
		resolvers: [VantResolver()],
	}),
	Components({
		resolvers: [VantResolver()],
	}),],
	server: {
		host: '0.0.0.0',
		proxy: {
			'/api': {
				target: 'https://www.b2boxlogistics.com/',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	css: {
	  preprocessorOptions: {
	    scss: {
	      api: "modern-compiler",
	      silenceDeprecations: ["legacy-js-api"],
	    },
	  },
	},
	resolve: {
		alias: {
		  '@': path.resolve(__dirname, './')
		}
    }
});