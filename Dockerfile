# File used for Dockerfile here we are calling app and simple copying to location
FROM node:14-alpine3.15 AS node
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
CMD ["node","server.js"]
