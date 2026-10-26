// Configuración de Vite: el plugin de React convierte el JSX en JavaScript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})