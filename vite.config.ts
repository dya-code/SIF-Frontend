import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/hub': {
        target: 'https://open.neis.go.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hub/, ''),
        secure: false,
        ws: true
      }
    }
  }
})
