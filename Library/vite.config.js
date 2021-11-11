//-- Copyright (c) 2021 TMT Insights Group, LLC
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, '/src') }],
  },
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'index.html'),
      name: 'example-library',
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/App.jsx'),
      },
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: [{
          entryFileNames: ({name}) => {
            return `example-library-${name}.es.js`
          },
          format: 'esm',
          dir: resolve(__dirname, 'lib')
      }]
    }
  }
})
