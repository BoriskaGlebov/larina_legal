import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    base: '/',
    plugins: [tailwindcss()],
    build: {
        outDir: '../', // Корень проекта
        emptyOutDir: false, // Не удалять всё в корне
        assetsDir: '', // Отключаем стандартную папку assets
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].js',         // main.js → js/main.js
                chunkFileNames: 'js/[name]-[hash].js',  // динамические импорты
                assetFileNames: (assetInfo) => {
                    const ext = path.extname(assetInfo.name)

                    if (ext === '.css') return 'css/[name][extname]'
                    if (ext === '.ico') return '[name][extname]'
                    if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext))
                        return 'img/[name][extname]'

                    return '[name][extname]' // fallback
                },
            },
        },

    },
})
