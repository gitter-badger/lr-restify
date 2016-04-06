FROM node:latest

RUN mkdir -p /opt/node/webserver
WORKDIR /opt/node/webserver

RUN npm install nodemon -g

COPY package.json /opt/node/webserver
COPY ./src/ /opt/node/webserver/src/

RUN npm install

EXPOSE 8080

CMD ["nodemon", "-L", "/opt/node/webserver/src/app.js"]