import { defineConfig } from "vite";
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

module.exports = defineConfig({
    root:'src',
    plugins: [
        alias({
            entries: [{
                find: '@',
                replacement: resolve(projectRootDir, 'src'),
            }]
        })
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        open: false,
        cors: true
    },
    build: {
        outDir: "dist",
        copyPublicDir: true
    },
})