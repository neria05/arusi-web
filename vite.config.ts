import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // This enables network access
  },
  preview: {
    port: 5173,
    host: true,
  }
});