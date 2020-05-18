FROM node as build-stage
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . . 
RUN npm run build --prod

#stage 2
FROM nginx:alpine as production-state
COPY --from=build-stage /usr/src/app/dist/angular-app /usr/share/nginx/html



