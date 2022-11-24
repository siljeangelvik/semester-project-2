import { defineConfig } from "vite";
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname);

module.exports = defineConfig({
    plugins: [
        alias({
            entries: [{
                find: '@',
                replacement: resolve(projectRootDir, 'src', 'public', 'resources/ganttchart'),
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
    },
})