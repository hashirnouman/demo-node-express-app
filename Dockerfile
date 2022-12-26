FROM node:16-alpine

WORKDIR /
COPY package.json ./
COPY yarn.lock ./
COPY index.js ./
RUN yarn install --production
CMD yarn start

