FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY angular.json tsconfig*.json ./
COPY src ./src
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/assay-explorer /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80