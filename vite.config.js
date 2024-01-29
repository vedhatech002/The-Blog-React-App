import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/The-Blog-React-App/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
})
