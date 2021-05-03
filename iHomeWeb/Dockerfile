  
FROM node:14-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm install 
COPY . /app
RUN npm run build --prod
EXPOSE 4200
# stage 2 useing the Nginx server image to create the Nginx server and deploy app by copying build item from /app/docs to Nginx server
FROM nginx:1.17.1-alpine

COPY --from=build-step /dist/iHomeWeb /usr/share/nginx/html


# CMD ["npm", "start"]