import { defineConfig } from 'vite';

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
    }
});
