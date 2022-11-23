import { defineConfig } from "vite";

const path = require("path");

export default defineConfig({
    base: '/',
    root: path.resolve(__dirname, "./"),
    resolve: {
        alias: {}
    },
    server: {
        port: 8080,
        host: true
    },
    build: {
        outDir: "./dist"
    },
    plugins: []
})