import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Point to the root directory
  baseUrl: './', // Set base URL to the root
  base: '/', // Adjust according to your specific environment if needed
})
