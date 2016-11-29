FROM node:0.10
MAINTAINER Robson Miranda <mirandarfsm@gmail.com>

COPY package.json package.json
RUN npm install
RUN npm install -g nodemon

ADD . /tmp/contatooh
WORKDIR /tmp/contatooh

CMD ["nodemon", "server.js"]