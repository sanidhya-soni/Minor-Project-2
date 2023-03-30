# FROM node:alpine
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm i
# CMD ["npm", "run", "start"]

FROM nginx:alpine
COPY build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]