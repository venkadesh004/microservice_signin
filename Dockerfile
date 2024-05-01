FROM node:18.18-alpine3.18
COPY . /APP_SIGNIN

WORKDIR /APP_SIGNIN
CMD npm install --force && npm start