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

# Etapa 2: Servir com NGINX
FROM nginx:alpine

# Remove configuração default do NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos buildados para o NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configuração customizada do NGINX (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Como rodar?

# docker build \
#  --build-arg VITE_SERVER_URL="http://localhost:8000" \
#  --build-arg VITE_FRONT_URL="http://localhost:5173" \
#  -t social-store-front .

# docker run -p 80:80 social-store-front
