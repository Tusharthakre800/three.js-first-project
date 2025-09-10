import { defineConfig } from 'vite'
// import glsl from 'vite-plugin-';

export default defineConfig({
    // plugins : [glsl()]
    base: './',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                manualChunks: undefined
            }
        }
    }
})