// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173, // or your port
    strictPort: true,
    watch: {
      usePolling: true, // for WSL2 or Docker filesystem issues
    },
  },
})