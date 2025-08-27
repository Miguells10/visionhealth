import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/visionhealth/', // 🔥 obrigatório pro GitHub Pages
})