import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';  // jetzt dank esModuleInterop erlaubt

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()]
});
