FROM node as build-stage
WORKDIR /app
COPY package.json .
RUN npm install
COPY . . 
RUN npm run build --prod

#stage 2
FROM nginx as production-state
COPY --from=build-stage /app/dist/angular-app /usr/share/nginx/html