import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import discardComments from 'postcss-discard-comments'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        discardComments({ removeAll: true }), // 🔥 remove todos os comentários
      ],
    },
  },
})
