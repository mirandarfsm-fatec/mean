FROM node:0.10
MAINTAINER Robson Miranda <mirandarfsm@gmail.com>

COPY package.json package.json
COPY bower.json bower.json
COPY .bowerrc .bowerrc

RUN npm install -g nodemon
RUN npm install -g grunt-cli
RUN npm install -g bower
RUN npm install
RUN bower install --allow-root

ADD . /tmp/contatooh
WORKDIR /tmp/contatooh

CMD ["nodemon", "server.js"]
