FROM node:18
WORKDIR /usr/src/app
RUN mkdir static
COPY package*.json ./
RUN apt-get update
RUN apt-get install ffmpeg -y
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm", "run", "start" ]