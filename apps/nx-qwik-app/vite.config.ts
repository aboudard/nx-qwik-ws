import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikNxVite } from 'qwik-nx/plugins';
import { defineConfig } from 'vite';
import jsonServer from 'vite-plugin-simple-json-server';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/apps/nx-qwik-app',
  plugins: [
    jsonServer({
      // Serve as /api
      delay: 500,
      mockDir: 'server'
    }),
    qwikNxVite(),
    qwikCity(),
    qwikVite({
      client: {
        outDir: '../../dist/apps/nx-qwik-app/client',
      },
      ssr: {
        outDir: '../../dist/apps/nx-qwik-app/server',
      },
    }),
    tsconfigPaths({ root: '../../' }),
  ],
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['../../'],
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
