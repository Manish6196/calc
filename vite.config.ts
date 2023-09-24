import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/calc',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      types: `${path.resolve(__dirname, './src/types/')}`,
      utils: `${path.resolve(__dirname, './src/utils/')}`,
    },
  },
})
