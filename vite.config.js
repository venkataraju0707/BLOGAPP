 // vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'BLOGAPP' // Replace 'your-repo-name' with your actual repo name
})
