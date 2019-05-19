FROM node:10-alpine

RUN mkdir -p /home/app/client
WORKDIR /home/app/client

COPY package*.json /home/app/client/

RUN npm install

COPY . /home/app/client/

CMD [ "npm", "start" ]