import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Ajouter les fichiers SVG comme ressources statiques
  assetsInclude: ['**/*.svg'],
  css: {
    postcss: {
      plugins: [
        require('postcss-import')({
          filter: (url: string) => {
            // Exclure les fichiers SVG pour éviter les erreurs de PostCSS
            if (url.endsWith('.svg')) {
              return false;
            }
            return true;
          },
        }),
      ],
    },
  },
});
