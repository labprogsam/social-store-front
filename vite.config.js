import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /* base: '/app/', */
  
  // A configuração de teste DEVE ficar aqui dentro
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // Confirme que este caminho está correto

    // Esta seção corrige o erro da Swiper
    server: {
      deps: {
        inline: ['swiper'],
      },
    },
    
    // Esta seção simula importações de arquivos de imagem e CSS
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
    },
  },
})