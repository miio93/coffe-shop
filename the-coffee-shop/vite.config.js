import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/the-coffee-shop/', //  IMPORTANT: Replace 'the-coffee-shop' with your GitHub repository name!
})