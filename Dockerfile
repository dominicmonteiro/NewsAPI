FROM node:8.10

ARG FEED_PASSWORD

WORKDIR /app

COPY package*.json ./

COPY .npmrc .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]