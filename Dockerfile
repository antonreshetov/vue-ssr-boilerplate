FROM node:10-alpine

ENV PORT 8080
ENV NODE_ENV production

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install all dependencies, including devDependencies for the build job
RUN NODE_ENV=development yarn install && yarn cache clean

RUN yarn build 

# Expose port
EXPOSE $PORT

CMD [ "npm", "start" ]
