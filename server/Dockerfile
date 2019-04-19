FROM node:10-alpine

RUN mkdir -p /home/app/server
WORKDIR /home/app/server

COPY package*.json /home/app/server

RUN npm install

COPY . /home/app/server

CMD [ "npm", "start" ]