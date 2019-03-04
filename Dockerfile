FROM node:10-alpine

ENV PORT 8080
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY /package*.json ./

RUN apk update && apk add bash
RUN NODE_ENV=development yarn install && yarn cache clean

COPY . .

RUN yarn build
RUN npm i -g nodemon

EXPOSE $PORT
