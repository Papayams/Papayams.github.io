import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const basePath = '/Papayams/'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: basePath,
}); 