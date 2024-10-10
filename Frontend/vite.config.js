import path from "path"
import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"
import { defineConfig, loadEnv } from 'vite'
// const env = loadEnv(mode, process.cwd(), '');
import dotenv from 'dotenv'

export default defineConfig({
  

  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
  define: {
    "process.env.BACKEND_URL": JSON.stringify(process.env.BACKEND_URL)
  },
})
