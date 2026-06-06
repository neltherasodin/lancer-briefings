import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import viteCompression from "vite-plugin-compression";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
		viteCompression({
    		algorithm: "brotliCompress",
    		ext: ".br",
    		// Forza il plugin a non tentare di creare path strani
    		filter: /\.(js|css|html|svg|json|ttf|woff|woff2|eot)$/i,
    		threshold: 1024, // Comprimi solo file sopra 1KB
		}),
	],
	base: "./",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	optimizeDeps: {
		include: ["lancer-data", "lancer-ktb-data", "lancer-nrfaw-data", "lancer-longrim-data"],
	},
	build: {
		sourcemap: true,
		cssCodeSplit: true,
		reportCompressedSize: true,
	},
	json: {
		namedExports: true,
	},
	css: {
		devSourcemap: true,
	},
});
