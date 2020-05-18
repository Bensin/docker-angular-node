FROM node:14.2.0-alpine3.10 as build-stage
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . . 
RUN npm build

#stage 2
FROM nginx:alpine as production-state
COPY --from=build-stage /app/dist/angular-app /usr/share/nginx/html