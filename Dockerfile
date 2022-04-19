FROM node:14-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3003

CMD ["npm", "start"]
