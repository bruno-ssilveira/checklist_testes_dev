import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/checklist_testes_dev/", // Caminho do subdiretório no GitHub Pages
});
