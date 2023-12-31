FROM node:18.16.0-alpine3.17 AS builder

WORKDIR /action
COPY package.json package-lock.json /action/
RUN npm ci

COPY src /action/src
ENTRYPOINT ["node", "/action/src/index.js"]
