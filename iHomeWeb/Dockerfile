# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

COPY . /app

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/iHomeWeb /usr/share/nginx/html

# Expose port 80
EXPOSE 4200

# CMD ["npm", "start"]

# next step tag the image

# FROM node:14-alpine as build-step

# RUN mkdir -p /app
# WORKDIR /app
# COPY package*.json /app/


# COPY . /app
# RUN npm run build --prod

# # stage 2 useing the Nginx server image to create the Nginx server and deploy app by copying build item from /app/docs to Nginx server
# FROM nginx
# EXPOSE 4200
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# COPY --from=build-step /dist/iHomeWeb /usr/share/nginx/html


# # CMD ["npm", "start"]