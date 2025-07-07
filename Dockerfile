# Stage 1: Build the React application
FROM node:18-alpine AS build

# Force cache invalidation
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Rimuovi le vecchie dipendenze e reinstalla per assicurarti che le versioni siano corrette
RUN rm -rf node_modules && npm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 