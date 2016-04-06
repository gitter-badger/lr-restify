FROM node:latest

RUN mkdir -p /app
WORKDIR /app/src

COPY package.json /app/

RUN npm install


EXPOSE 8080

CMD ["node","app.js"]