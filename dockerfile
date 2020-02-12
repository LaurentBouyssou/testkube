# docker build -t testkube . 
# 8095 outside
# docker run -it -p 8095:8085 testkube 
FROM node:latest
LABEL test kubernetes
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
RUN npm install
COPY . /usr/src/app
#RUN mv  
CMD node main.js
EXPOSE 8085