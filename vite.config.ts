import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'MovieDesignHV',
      formats: ['es', 'umd'],
      fileName: (format) => `movie-design-hv.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          return assetInfo.name === 'style.css' ? 'movie-design-hv.css' : assetInfo.name || 'asset';
        }
      }
    }
  }
})