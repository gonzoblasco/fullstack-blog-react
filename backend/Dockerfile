# Imagen base (Node LTS, liviana)
FROM node:22-alpine

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y lockfile primero (para aprovechar el cache)
COPY package*.json ./

# Instalar dependencias (sin devDependencies para producción)
RUN npm ci --omit=dev

# Copiar el resto del código
COPY . .

# Variables de entorno por defecto
ENV NODE_ENV=production
ENV PORT=4000

# Exponer puerto
EXPOSE 4000

# Comando de arranque
CMD ["node", "src/server.js"]