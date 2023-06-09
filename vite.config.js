import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    root: 'src',
    publicDir: 'public',
    build: {
        outDir: '../dist',
        rollupOptions: {
            output: {
                assetFileNames: `assets/[name].[ext]`
            }
        }
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
});
