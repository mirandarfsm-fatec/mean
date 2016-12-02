FROM node:0.10
MAINTAINER Robson Miranda <mirandarfsm@gmail.com>

COPY package.json package.json
COPY bower.json bower.json
COPY .bowerrc .bowerrc

#RUN apt-get install openjdk-7-jdk

RUN npm install -g nodemon
RUN npm install -g bower@1.3
RUN npm install -g grunt-cli@0.1 
RUN npm install -g karma-cli@0.0 #--no-bin-link
npm install -g protractor@1.5
RUN npm install
RUN bower install --allow-root

ADD . /tmp/contatooh
WORKDIR /tmp/contatooh

CMD ["nodemon", "server.js"]
