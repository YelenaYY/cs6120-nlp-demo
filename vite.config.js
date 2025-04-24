import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()], // Enables Vue 3 support
  assetsInclude: ["**/*.csv"],
  resolve: {
    alias: {
      '@': '/src' // Allows to use '@' as an alias for 'src' folder
    }
  },
  server: {
    port: 5173, // Default Vite port
    open: true, // Automatically open the browser when running `npm run dev`
    cors: true  // Enable CORS for API requests if needed
  },
  build: {
    outDir: 'dist', // Output directory for production build
    sourcemap: true // Helps with debugging
  },
  publicDir: "public" // Ensures static assets are properly served
});
