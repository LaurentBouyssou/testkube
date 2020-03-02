# docker build -t testkube . 
# docker tag 57f067dcfce2 laurentbouyssou/testkube:V1.0.0
# 8095 outside
# docker run -it --name testkube -p 8095:8085 laurentbouyssou/testkube:V1.0.0
FROM node:latest
LABEL test kubernetes
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
#RUN mv  
CMD node main.js
EXPOSE 8085
