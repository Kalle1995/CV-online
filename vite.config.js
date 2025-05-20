import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CV-online/',   // Lägg till den här raden med ditt repo-namn
  server: {
    port: 3000,
  }
})
