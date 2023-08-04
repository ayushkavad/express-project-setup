FROM node:16.3.0-alpine

WORKDIR /app

COPY package.json .

RUN npm i \
    && npm i -g npm-check-updates \
    && ncu -u \
    && npm i     

COPY . .

EXPOSE 8000

CMD [ "node", "." ]