// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// export default defineConfig({
//   plugins: [react()],
//   root: 'client',
//   build: {
//     outDir: '../dist/public',
//     emptyOutDir: true,
//     rollupOptions: {
//       input: path.resolve(__dirname,'src', 'main.tsx'), // 👈 tell Vite the React entry
//     },
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'client', 'src'),
//       '@shared': path.resolve(__dirname, 'shared'),
//       '@assets': path.resolve(__dirname, 'client', 'src', 'assets'),
//     },
//     dedupe: ['react', 'react-dom'],
//   },
// })







// client/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: 'client',
  build: {
    outDir: '../dist/public',
    emptyOutDir: true,
    // ❌ REMOVE input — let Vite detect index.html
    // rollupOptions: {
    //   input: path.resolve(__dirname,'src', 'main.tsx'),
    // },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
})
