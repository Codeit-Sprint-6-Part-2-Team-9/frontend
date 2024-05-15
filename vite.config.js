import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            VITE_APP_URL : env.VITE_APP_URL,
          },
        },
      }),
      viteStaticCopy({
        targets: [
          {
            src: 'public/404.html',
            dest: '',
          },
        ],
      }),
    ],
    base: env.VITE_BASE_URL,
  });
}