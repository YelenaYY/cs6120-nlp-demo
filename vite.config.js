import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()], // Enables Vue 3 support
  base: '/cs6120-nlp-demo/',
  assetsInclude: ['**/*.csv', '**/*.pdf', '**/*.png'],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5173, // Default Vite port
    open: true, // Automatically open the browser when running `npm run dev`
    cors: true  // Enable CORS for API requests if needed
  },
  build: {
    outDir: 'dist', // Output directory for production build
    emptyOutDir: true,
    sourcemap: true, // Helps with debugging
    assetsDir: '',  // This will put assets in the root of dist
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          // Keep original filenames without hashing
          return `[name][extname]`
        }
      }
    }
  },
  publicDir: 'public' // Ensures static assets are properly served
});
