FROM node:18-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

COPY .env .env

RUN npm run build

EXPOSE 5011

CMD ["npm", "run", "dev"]