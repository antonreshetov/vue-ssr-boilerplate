FROM node:10-alpine

ENV PORT 8080

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk update && apk add bash
RUN npm i -g nodemon
RUN yarn

COPY . .

EXPOSE $PORT
