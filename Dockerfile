# Etapa 1: Construção do frontend
FROM node:20-alpine AS builder

WORKDIR /app

# Copia primeiro os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Gera os arquivos estáticos
RUN npm run build
RUN npm install -g serve

EXPOSE 3007

CMD ["serve", "-s", "dist", "-l",  "3007"]