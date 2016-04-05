FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY ./src /usr/src/app

RUN npm install

EXPOSE 8080

CMD ["node","app.js"]