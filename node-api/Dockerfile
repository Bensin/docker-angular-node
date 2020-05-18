FROM node:14.2.0-alpine3.10 as node-server
WORKDIR /usr/src/app
COPY package.json .
RUN npm install 
COPY . . 
EXPOSE 3000
CMD "node" "index.js"



