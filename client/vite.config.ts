import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, '../shared'),
    },
    dedupe: ['react', 'react-dom'], // Prevents hook errors from duplicate React
  },
  build: {
    outDir: '../dist/public',
    emptyOutDir: true,
  },
});
