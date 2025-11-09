import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        tailwindcss(),
        viteStaticCopy({
            targets: [
                {
                    src: './api/*.php',  //incluir o php junto da pasta dist
                    dest: './api'
                }
            ]
        })
    ],
    build: {
        outDir: path.resolve('C:/xampp/htdocs/PHP curriculo vite'), //salva os arquivos gerados no build dentro da pasta do projeto no xampp
        rollupOptions:{
            input: {
                index: 'index.html',
                curriculo: 'api/curriculo.html'
            }
        }
    },
    base: './',
})