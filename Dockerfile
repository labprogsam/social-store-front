# Etapa 1: Build da aplicação
FROM node:20-alpine AS build

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código do projeto
COPY . .

# Define variáveis de ambiente para o build
ARG VITE_SERVER_URL
ARG VITE_FRONT_URL
ENV VITE_SERVER_URL=$VITE_SERVER_URL
ENV VITE_FRONT_URL=$VITE_FRONT_URL

# Build do projeto
RUN npm run build

# Etapa 2: Servir com serve
FROM node:20-alpine

WORKDIR /app

# Instala o serve globalmente
RUN npm install -g serve

# Copia os arquivos buildados
COPY --from=build /app/dist ./dist

# Expõe a porta 3008
EXPOSE 3008

# Comando para servir a aplicação
CMD ["serve", "-s", "dist", "-l", "3008"]

# Como rodar?

# docker build \
#  --build-arg VITE_SERVER_URL="http://localhost:8000" \
#  --build-arg VITE_FRONT_URL="http://localhost:3000" \
#  -t social-store-front .

# docker run -p 3000:3000 social-store-front
