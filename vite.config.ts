import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'Puppers',
    short_name: 'Puppers',
    background_color: '#282c34',
    theme_color: '#282c34',
    description: 'A picture of your favorite pupperino',
    icons: [
      {
        src: 'src/assets/icon-192x192.jpg',
        sizes: '192x192',
        type: 'image/jpg',
      },
      {
        src: 'src/assets/icon-512x512.jpg',
        sizes: '512x512',
        type: 'image/jpg',
      },
    ],
    start_url: '/?source=pwa',
    display: 'standalone',
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(manifestForPlugin)],
});
