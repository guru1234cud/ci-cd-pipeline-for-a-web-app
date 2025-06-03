FROM node:18-alpine
WORKDIR /server
COPY server/package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node","server/index.js"]