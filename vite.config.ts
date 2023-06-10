import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

const faviconPlugin = process.env.NODE_ENV == 'production' ? vitePluginFaviconsInject() : false;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), faviconPlugin],
  base: '/nomad-pomodoro-timer/',
});
